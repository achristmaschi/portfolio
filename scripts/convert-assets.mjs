#!/usr/bin/env node
/**
 * Convert all PNG/JPEG/video files in public/assets (recursively) to web formats.
 *   Images → AVIF  (via sharp)
 *   Videos → WebM  (VP9 + Opus, via ffmpeg)
 *
 * - Skips files that already have a matching output.
 * - Images wider than MAX_WIDTH are resized down (aspect ratio preserved).
 * - Original files are deleted after successful conversion.
 *
 * Usage:  node scripts/convert-assets.mjs
 *    or:  npm run convert-assets
 */

import sharp from "sharp";
import { readdir, access, stat, unlink } from "fs/promises";
import { join, extname, basename, relative } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "public", "assets");

// Largest image on the site is ban_logo at lg:w-[600px]; 1200px covers 2× retina.
const MAX_WIDTH = 1200;

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
async function collectSources(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await collectSources(full)));
    } else if (/\.(png|jpe?g)$/i.test(extname(entry.name))) {
      results.push({ path: full, type: "image" });
    } else if (/\.(mov|mp4|avi|mkv|m4v|webm)$/i.test(extname(entry.name))) {
      results.push({ path: full, type: "video" });
    }
  }
  return results;
}

async function main() {
  const sources = await collectSources(ASSETS_DIR);

  if (sources.length === 0) {
    console.log("No convertible files found in public/assets (or subfolders) — nothing to do.");
    return;
  }

  let converted = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const { path: inputPath, type } of sources) {
    const file = basename(inputPath);
    const relPath = relative(ASSETS_DIR, inputPath);
    const outputExt = type === "video" ? ".webm" : ".avif";
    const outputName = basename(file, extname(file)) + outputExt;
    const outputPath = join(inputPath.slice(0, inputPath.length - file.length), outputName);

    if (await exists(outputPath)) {
      console.log(`  skip     ${relPath}  (already exists)`);
      skipped++;
      continue;
    }

    const { size: sizeBefore } = await stat(inputPath);

    if (type === "video") {
      await convertVideo(inputPath, outputPath);
    } else {
      const image = sharp(inputPath);
      const { width } = await image.metadata();
      let pipeline = image;
      let resizeNote = "";
      if (width && width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        resizeNote = `  resized ${width}px → ${MAX_WIDTH}px,`;
      }
      await pipeline.avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT }).toFile(outputPath);
      const { size: sizeAfter } = await stat(outputPath);
      const saving = Math.round((1 - sizeAfter / sizeBefore) * 100);
      totalBefore += sizeBefore;
      totalAfter += sizeAfter;
      console.log(
        `  convert  ${relPath}  →  ${outputName}` +
        `  [${resizeNote} ${kb(sizeBefore)} → ${kb(sizeAfter)}, -${saving}%]`
      );
      await unlink(inputPath);
      console.log(`  deleted  ${relPath}`);
      converted++;
      continue;
    }

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
  }

  console.log(
    `\nDone — ${converted} converted, ${skipped} skipped.` +
    (converted > 0
      ? `\nTotal: ${kb(totalBefore)} → ${kb(totalAfter)}  (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
      : "")
  );
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
