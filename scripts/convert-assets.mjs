#!/usr/bin/env node
/**
 * Convert all PNG/JPEG files in public/assets to AVIF.
 * - Skips files that already have a matching .avif output.
 * - Resizes down to MAX_WIDTH if the source is wider (preserves aspect ratio).
 *
 * Usage:  node scripts/convert-assets.mjs
 *    or:  npm run convert-assets
 */

import sharp from "sharp";
import { readdir, access, stat, unlink } from "fs/promises";
import { join, extname, basename, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "public", "assets");

// Largest image on the site is ban_logo at lg:w-[600px]; 1200px covers 2× retina.
const MAX_WIDTH = 1200;

const AVIF_QUALITY = 75; // 0–100, higher = better quality / larger file
const AVIF_EFFORT = 7;   // 0–9, higher = slower encode / smaller file

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

/** Recursively collect all PNG/JPEG file paths under a directory. */
async function collectSources(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await collectSources(full)));
    } else if (/\.(png|jpe?g)$/i.test(extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const sources = await collectSources(ASSETS_DIR);

  if (sources.length === 0) {
    console.log("No PNG/JPEG files found in public/assets (or subfolders) — nothing to do.");
    return;
  }

  let converted = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const inputPath of sources) {
    const file = basename(inputPath);
    const relPath = relative(ASSETS_DIR, inputPath);
    const outputName = basename(file, extname(file)) + ".avif";
    const outputPath = join(inputPath.slice(0, inputPath.length - file.length), outputName);

    if (await exists(outputPath)) {
      console.log(`  skip     ${relPath}  (already exists)`);
      skipped++;
      continue;
    }

    const image = sharp(inputPath);
    const { width } = await image.metadata();
    const { size: sizeBefore } = await stat(inputPath);

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

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
