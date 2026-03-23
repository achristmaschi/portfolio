#!/usr/bin/env node
/**
 * Convert image/video files in a target directory (recursively) to web formats.
 *   Images → AVIF  (via sharp)
 *   Videos → WebM  (VP9 + Opus, via ffmpeg)
 *
 * - Skips files that already have a matching output.
 * - Images wider than MAX_WIDTH are resized down (aspect ratio preserved).
 * - Original non-AVIF files are deleted after successful conversion.
 * - AVIF input files are only processed when --include-avif is provided.
 *
 * Usage:
 *   node scripts/convert-assets.mjs [targetPath] [maxWidth] [--include-avif]
 *
 * Defaults:
 *   targetPath: public/assets
 *   maxWidth:   1200
 */

import sharp from "sharp";
import { readdir, access, stat, unlink, rename } from "fs/promises";
import { join, extname, basename, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DEFAULT_ASSETS_DIR = join(__dirname, "..", "public", "assets");

// Largest image on the site is ban_logo at lg:w-[600px]; 1200px covers 2× retina.
const DEFAULT_MAX_WIDTH = 1200;

const AVIF_QUALITY = 75; // 0–100, higher = better quality / larger file
const AVIF_EFFORT = 7;   // 0–9, higher = slower encode / smaller file

// WebM VP9 CRF: 0 (lossless) – 63 (worst). 33 is a good web balance.
const WEBM_CRF = 33;
// Video height cap — 1080p is fine for web; wider source will be scaled down.
const VIDEO_MAX_HEIGHT = 1080;

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

/** Recursively collect all image and video file paths under a directory. */
async function collectSources(dir, includeAvif) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await collectSources(full, includeAvif)));
    } else if (/\.(png|jpe?g)$/i.test(extname(entry.name))) {
      results.push({ path: full, type: "image" });
    } else if (includeAvif && /\.(avif)$/i.test(extname(entry.name))) {
      results.push({ path: full, type: "image" });
    } else if (/\.(mov|mp4|avi|mkv|m4v|webm)$/i.test(extname(entry.name))) {
      results.push({ path: full, type: "video" });
    }
  }
  return results;
}

async function main() {
  const { assetsDir, maxWidth, includeAvif } = parseCliArgs();

  if (!(await exists(assetsDir))) {
    throw new Error(`Target path does not exist: ${assetsDir}`);
  }

  const sources = await collectSources(assetsDir, includeAvif);

  if (sources.length === 0) {
    console.log(`No convertible files found in ${assetsDir} (or subfolders) — nothing to do.`);
    return;
  }

  let converted = 0;
  let skipped = 0;
  let failed = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const { path: inputPath, type } of sources) {
    const file = basename(inputPath);
    const relPath = relative(assetsDir, inputPath);
    const inputExt = extname(file).toLowerCase();
    const outputExt = type === "video" ? ".webm" : ".avif";
    const outputName = basename(file, extname(file)) + outputExt;
    const outputPath =
      type === "image" && inputExt === ".avif"
        ? join(inputPath.slice(0, inputPath.length - file.length), `${basename(file, extname(file))}.tmp.avif`)
        : join(inputPath.slice(0, inputPath.length - file.length), outputName);

    if (type !== "image" || inputExt !== ".avif") {
      if (await exists(outputPath)) {
        console.log(`  skip     ${relPath}  (already exists)`);
        skipped++;
        continue;
      }
    }

    try {
      const { size: sizeBefore } = await stat(inputPath);

      if (type === "video") {
        await convertVideo(inputPath, outputPath);
        const { size: sizeAfter } = await stat(outputPath);
        const saving = Math.round((1 - sizeAfter / sizeBefore) * 100);
        totalBefore += sizeBefore;
        totalAfter += sizeAfter;
        console.log(
          `  convert  ${relPath}  →  ${outputName}` +
          `  [${mb(sizeBefore)} → ${mb(sizeAfter)}, -${saving}%]`
        );
        await unlink(inputPath);
        console.log(`  deleted  ${relPath}`);
        converted++;
        continue;
      } else {
        const image = sharp(inputPath, { failOnError: false });
        const { width } = await image.metadata();
        let pipeline = image;
        let resizeNote = "";
        if (width && width > maxWidth) {
          pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
          resizeNote = `  resized ${width}px → ${maxWidth}px,`;
        }
        await pipeline.avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT }).toFile(outputPath);
        const { size: sizeAfter } = await stat(outputPath);
        const saving = Math.round((1 - sizeAfter / sizeBefore) * 100);
        totalBefore += sizeBefore;
        totalAfter += sizeAfter;

        if (inputExt === ".avif") {
          await rename(outputPath, inputPath);
          console.log(
            `  recompress ${relPath}` +
            `  [${resizeNote} ${kb(sizeBefore)} → ${kb(sizeAfter)}, -${saving}%]`
          );
        } else {
          console.log(
            `  convert  ${relPath}  →  ${outputName}` +
            `  [${resizeNote} ${kb(sizeBefore)} → ${kb(sizeAfter)}, -${saving}%]`
          );
          await unlink(inputPath);
          console.log(`  deleted  ${relPath}`);
        }
      }

      converted++;
    } catch (err) {
      // Clean up any partial output so the file isn't wrongly skipped next run.
      if (await exists(outputPath)) await unlink(outputPath);
      console.error(`  ERROR    ${relPath}  —  ${err.message}`);
      failed++;
    }
  }

  console.log(
    `\nDone — ${converted} converted, ${skipped} skipped, ${failed} failed.` +
    (converted > 0
      ? `\nTotal: ${kb(totalBefore)} → ${kb(totalAfter)}  (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
      : "")
  );
}

function parseCliArgs() {
  const args = process.argv.slice(2);
  const showHelp = args.includes("--help") || args.includes("-h");
  const includeAvif = args.includes("--include-avif");
  const positional = args.filter((arg) => !arg.startsWith("-"));
  const [targetArg, maxWidthArg] = positional;

  if (showHelp) {
    console.log(
      [
        "Usage:",
        "  node scripts/convert-assets.mjs [targetPath] [maxWidth] [--include-avif]",
        "",
        "Examples:",
        "  node scripts/convert-assets.mjs",
        "  node scripts/convert-assets.mjs public/assets/playground",
        "  node scripts/convert-assets.mjs public/assets/playground 900",
        "  node scripts/convert-assets.mjs public/assets/playground 900 --include-avif",
        "",
        "Flags:",
        "  --include-avif   Include existing .avif files as conversion inputs",
        "",
        `Defaults: targetPath=${DEFAULT_ASSETS_DIR}, maxWidth=${DEFAULT_MAX_WIDTH}`,
      ].join("\n")
    );
    process.exit(0);
  }

  const assetsDir = targetArg ? resolve(process.cwd(), targetArg) : DEFAULT_ASSETS_DIR;
  const parsedMaxWidth = maxWidthArg ? Number(maxWidthArg) : DEFAULT_MAX_WIDTH;

  if (!Number.isFinite(parsedMaxWidth) || parsedMaxWidth <= 0) {
    throw new Error(`Invalid maxWidth: ${maxWidthArg}. Expected a positive number.`);
  }

  return { assetsDir, maxWidth: parsedMaxWidth, includeAvif };
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

function mb(bytes) {
  return bytes >= 1024 * 1024
    ? (bytes / (1024 * 1024)).toFixed(1) + " MB"
    : (bytes / 1024).toFixed(1) + " KB";
}

/**
 * Convert a video file to WebM (VP9 video + Opus audio) using ffmpeg.
 * Scales down to VIDEO_MAX_HEIGHT if taller, preserving aspect ratio.
 */
function convertVideo(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    // vf scale: keep width/height divisible by 2 (VP9 requirement)
    const scaleFilter = `scale='if(gt(ih,${VIDEO_MAX_HEIGHT}),-2,iw)':'if(gt(ih,${VIDEO_MAX_HEIGHT}),${VIDEO_MAX_HEIGHT},-2)'`;
    const args = [
      "-i", inputPath,
      "-c:v", "libvpx-vp9",
      "-crf", String(WEBM_CRF),
      "-b:v", "0",            // constant quality mode (CRF-only, no bitrate cap)
      "-vf", scaleFilter,
      "-c:a", "libopus",
      "-b:a", "128k",
      "-y",                   // overwrite output if it somehow exists
      outputPath,
    ];

    console.log(`  encoding ${basename(inputPath)}  →  ${basename(outputPath)}  (this may take a while…)`);

    const proc = spawn("ffmpeg", args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    proc.stderr.on("data", (d) => { stderr += d.toString(); });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited ${code}\n${stderr.slice(-500)}`));
    });
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
