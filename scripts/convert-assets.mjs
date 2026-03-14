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
import { readdir, access } from "fs/promises";
import { join, extname, basename } from "path";
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

async function main() {
  const files = await readdir(ASSETS_DIR);
  const sources = files.filter((f) => /\.(png|jpe?g)$/i.test(extname(f)));

  if (sources.length === 0) {
    console.log("No PNG/JPEG files found in public/assets — nothing to do.");
    return;
  }

  let converted = 0;
  let skipped = 0;

  for (const file of sources) {
    const inputPath = join(ASSETS_DIR, file);
    const outputName = basename(file, extname(file)) + ".avif";
    const outputPath = join(ASSETS_DIR, outputName);

    if (await exists(outputPath)) {
      console.log(`  skip     ${file}  →  ${outputName}  (already exists)`);
      skipped++;
      continue;
    }

    const image = sharp(inputPath);
    const { width } = await image.metadata();

    let pipeline = image;
    let resizeNote = "";

    if (width && width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      resizeNote = `  (resized from ${width}px → ${MAX_WIDTH}px)`;
    }

    await pipeline.avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT }).toFile(outputPath);
    console.log(`  convert  ${file}  →  ${outputName}${resizeNote}`);
    converted++;
  }

  console.log(`\nDone — ${converted} converted, ${skipped} skipped.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
