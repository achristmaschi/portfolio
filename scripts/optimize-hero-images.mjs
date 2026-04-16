#!/usr/bin/env node
/**
 * Optimize hero images by converting PNG to AVIF at multiple responsive breakpoints.
 *
 * Creates three AVIF variants for each hero image:
 *   - Mobile (480px)
 *   - Tablet (1024px)
 *   - Desktop (1440px)
 *
 * Uses high quality (95) since images are already downscaled.
 * Original PNG files are deleted after successful conversion.
 *
 * Usage:
 *   node scripts/optimize-hero-images.mjs
 */

import sharp from "sharp";
import { stat, unlink, mkdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "public", "assets");

// Breakpoints for responsive images
const BREAKPOINTS = [
  { name: "mobile", width: 480 },
  { name: "tablet", width: 1024 },
  { name: "desktop", width: 1440 },
];

// AVIF compression settings
const AVIF_QUALITY = 95; // High quality since images are already downscaled
const AVIF_EFFORT = 7;   // Balanced encode speed vs. file size

// Hero images to process: [source path, output base name]
const HERO_IMAGES = [
  {
    source: join(ASSETS_DIR, "about", "about.png"),
    outputDir: join(ASSETS_DIR, "about", "hero"),
    baseName: "about",
  },
  {
    source: join(ASSETS_DIR, "playground", "playground.png"),
    outputDir: join(ASSETS_DIR, "playground", "hero"),
    baseName: "playground",
  },
];

function mb(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

function kb(bytes) {
  return (bytes / 1024).toFixed(2);
}

async function optimizeHeroImage(heroConfig) {
  const { source, outputDir, baseName } = heroConfig;

  console.log(`\n📸 Processing: ${baseName}`);
  console.log("━".repeat(60));

  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true });

  const { size: sourceSizeBytes } = await stat(source);
  console.log(`Source: ${source}`);
  console.log(`Source size: ${mb(sourceSizeBytes)} MB`);

  let totalOutputBytes = 0;

  for (const { name, width } of BREAKPOINTS) {
    const outputPath = join(outputDir, `${baseName}-${name}.avif`);
    const variantName = `${baseName}-${name}.avif`;

    try {
      await sharp(source)
        .resize(width, null, { withoutEnlargement: true })
        .avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT })
        .toFile(outputPath);

      const { size: outputSizeBytes } = await stat(outputPath);
      totalOutputBytes += outputSizeBytes;

      const reduction = Math.round((1 - outputSizeBytes / sourceSizeBytes) * 100);
      console.log(
        `  ✓ ${variantName.padEnd(25)} ${width.toString().padEnd(4)}px  ${kb(outputSizeBytes).padStart(8)} KB  (-${reduction}%)`
      );
    } catch (error) {
      console.error(`  ✗ Failed to create ${variantName}: ${error.message}`);
      throw error;
    }
  }

  console.log(`\nTotal size for ${baseName}: ${mb(totalOutputBytes)} MB`);
  console.log(`Total savings: ${Math.round((1 - totalOutputBytes / sourceSizeBytes) * 100)}%`);

  // Delete original PNG after successful conversion
  try {
    await unlink(source);
    console.log(`✓ Deleted original: ${source}`);
  } catch (error) {
    console.error(`✗ Failed to delete original: ${error.message}`);
  }
}

async function main() {
  console.log("🖼️  Hero Image Optimization Script");
  console.log("═".repeat(60));
  console.log(`Quality: ${AVIF_QUALITY} | Effort: ${AVIF_EFFORT}`);
  console.log(`Breakpoints: ${BREAKPOINTS.map((b) => `${b.name} (${b.width}px)`).join(", ")}`);

  try {
    for (const heroConfig of HERO_IMAGES) {
      await optimizeHeroImage(heroConfig);
    }

    console.log("\n" + "═".repeat(60));
    console.log("✅ All hero images optimized successfully!");
    console.log("\nNext steps:");
    console.log("1. Update AboutPage.tsx to use responsive <picture> element");
    console.log("2. Update PlaygroundPage.tsx to use responsive <picture> element");
    console.log("3. Test on mobile, tablet, and desktop viewports");
  } catch (error) {
    console.error("\n❌ Optimization failed:", error);
    process.exit(1);
  }
}

main();
