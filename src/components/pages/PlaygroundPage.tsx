import { useState } from "react";
import { motion } from "framer-motion";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

const base = import.meta.env.BASE_URL;

// ── Photo normalizer ─────────────────────────────────────────────────────────
// Scales all photos to a fixed width while preserving aspect ratio.
// Lower BASE_WIDTH = smaller files = faster loads.
const BASE_WIDTH = 900;
const norm = <T extends { width: number; height: number }>(photos: T[]): T[] =>
  photos.map((p) => ({ ...p, width: BASE_WIDTH, height: Math.round(BASE_WIDTH * p.height / p.width) }));

// ── Grad photos ───────────────────────────────────────────────────────────────
const gradPhotos = norm([
  { src: `${base}assets/playground/grad/243B15BA-7718-4325-A9C7-BC8FF6FB11AE.avif`, alt: "Grad photo 1", width: 3, height: 2 },
  { src: `${base}assets/playground/grad/IMG_0332.avif`, alt: "Grad photo 2", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_0333 2.avif`, alt: "Grad photo 3", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_0333.avif`, alt: "Grad photo 4", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_0334.avif`, alt: "Grad photo 5", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_0335 2.avif`, alt: "Grad photo 6", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_0336.avif`, alt: "Grad photo 7", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_2324.avif`, alt: "Grad photo 9", width: 3, height: 2 },
  { src: `${base}assets/playground/grad/IMG_2518.avif`, alt: "Grad photo 10", width: 3, height: 2 },
  { src: `${base}assets/playground/grad/IMG_2535.avif`, alt: "Grad photo 11", width: 3, height: 2 },
  { src: `${base}assets/playground/grad/IMG_3117 2.avif`, alt: "Grad photo 12", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_3117.avif`, alt: "Grad photo 13", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_3118.avif`, alt: "Grad photo 14", width: 4, height: 3 },
  { src: `${base}assets/playground/grad/IMG_3121 2.avif`, alt: "Grad photo 15", width: 4, height: 3 },
  { src: `${base}assets/playground/grad/IMG_3122 2.avif`, alt: "Grad photo 17", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_3122.avif`, alt: "Grad photo 18", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_3123.avif`, alt: "Grad photo 19", width: 4, height: 3 },
  { src: `${base}assets/playground/grad/IMG_7969.avif`, alt: "Grad photo 20", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_7976 2.avif`, alt: "Grad photo 22", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_7976.avif`, alt: "Grad photo 23", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_7977 2.avif`, alt: "Grad photo 24", width: 4, height: 3 },
  { src: `${base}assets/playground/grad/IMG_7978.avif`, alt: "Grad photo 25", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_7979.avif`, alt: "Grad photo 26", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_7982.avif`, alt: "Grad photo 27", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_7983.avif`, alt: "Grad photo 28", width: 2, height: 3 },
  { src: `${base}assets/playground/grad/IMG_7984.avif`, alt: "Grad photo 29", width: 3, height: 4 },
  { src: `${base}assets/playground/grad/IMG_9269.avif`, alt: "Grad photo 30", width: 3, height: 2 },
]);

// ── Sunset photos (the world on its way out) ──────────────────────────────────
const sunsetPhotos = norm([
  { src: `${base}assets/playground/sunset/000033.avif`, alt: "Film sunset 1", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/000035.avif`, alt: "Film sunset 2", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/000067.avif`, alt: "Film sunset 3", width: 2, height: 3 },
  { src: `${base}assets/playground/sunset/IMG_2339.avif`, alt: "Film sunset 4", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/IMG_2340.avif`, alt: "Film sunset 5", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/IMG_3124 2.avif`, alt: "Film sunset 6", width: 3, height: 4 },
  { src: `${base}assets/playground/sunset/IMG_5189.avif`, alt: "Film sunset 7", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/IMG_7964.avif`, alt: "Film sunset 8", width: 2, height: 3 },
  { src: `${base}assets/playground/sunset/IMG_9252.avif`, alt: "Film sunset 9", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/IMG_9253.avif`, alt: "Film sunset 10", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/IMG_9254.avif`, alt: "Film sunset 11", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/IMG_9261.avif`, alt: "Film sunset 12", width: 3, height: 2 },
  { src: `${base}assets/playground/sunset/IMG_9266.avif`, alt: "Film sunset 13", width: 3, height: 2 },
]);

// ── Film sections config ──────────────────────────────────────────────────────
const filmSections = [
  {
    id: "sunset",
    slug: "the world on its way out",
    title: "the world on its way out",
    body: "I don't know what it is about the last light. Maybe it's the color, maybe it's knowing it only lasts a few minutes before it's gone. Either way, I always stop for it. These are the skies I couldn't walk past.",
    caption: "film photographs — sunsets",
    photos: sunsetPhotos,
  },
  {
    id: "faces",
    slug: "faces i keep",
    title: "faces i keep",
    body: "Some of these people know me well. Some I only met once. Some didn't know I was taking the photo, some did. What they have in common is a moment where I looked at someone and thought, I want to hold onto this. I'm glad I did.",
    caption: "film photographs — portraits",
    photos: [] as typeof sunsetPhotos,
  },
  {
    id: "longway",
    slug: "the long way home",
    title: "the long way home",
    body: "Every city has that one street you keep going back to without really knowing why. A window, a corner, a light that hits differently in the afternoon. These are the in-betweens, the quiet parts of places that became mine for a while.",
    caption: "film photographs — streets & places",
    photos: [] as typeof sunsetPhotos,
  },
  {
    id: "flowers",
    slug: "flowers, tears, and terrible lighting",
    title: "flowers, tears, and terrible lighting",
    body: "I love grad season. The chaos of it, the flowers, the trying-not-to-cry, the group photos where someone's always blinking. There's something about watching people reach the end of something and the beginning of something else at the same time, I always want to photograph it. These are the moments I was lucky enough to be around for.",
    caption: "film photographs — grad season",
    photos: gradPhotos,
  },
];

// ── Film gallery section ──────────────────────────────────────────────────────
function FilmSection({
  section,
  index,
}: {
  section: (typeof filmSections)[0];
  index: number;
}) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const hasPhotos = section.photos.length > 0;

  return (
    <>
      <section id={section.id} className="project-section">
        {/* Label */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          — film
        </motion.p>

        {/* Title */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
          viewport={{ once: true }}
        >
          {section.title}
        </motion.h2>

        {/* Body */}
        <motion.p
          className="font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          viewport={{ once: true }}
        >
          {section.body}
        </motion.p>

        {/* Gallery */}
        {hasPhotos ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <RowsPhotoAlbum
              photos={section.photos}
              targetRowHeight={(w) => (w < 480 ? 140 : w < 768 ? 180 : 230)}
              spacing={6}
              onClick={({ index: photoIndex }) => setLightboxIndex(photoIndex)}
            />

            {/* Lightbox */}
            <Lightbox
              slides={section.photos}
              open={lightboxIndex >= 0}
              index={lightboxIndex}
              close={() => setLightboxIndex(-1)}
              plugins={[Fullscreen, Slideshow, Zoom]}
              styles={{
                container: { backgroundColor: "rgba(0,0,0,0.92)" },
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            className="border border-primary/15 rounded-xl p-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-sm tracking-widest uppercase text-subtitle/40">
              more coming soon
            </p>
          </motion.div>
        )}
      </section>

    </>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function PlaygroundPage() {
  return (
    <main className="page-main">
      {/* Hero Image */}
      <section className="w-full">
        <picture>
          <source media="(min-width: 1024px)" srcSet={`${base}assets/playground/hero/playground-desktop.avif`} type="image/avif" />
          <source media="(min-width: 768px)" srcSet={`${base}assets/playground/hero/playground-tablet.avif`} type="image/avif" />
          <img 
            src={`${base}assets/playground/hero/playground-mobile.avif`} 
            alt="Playground Header" 
            className="w-full h-auto block"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
      </section>

      {/* Top rule */}
      <motion.div
        className="mx-6 md:mx-12 lg:mx-28 2xl:mx-0 h-px bg-primary/10"
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
      />

      {/* Film sections */}
      {filmSections.map((section, i) => (
        <FilmSection key={section.id} section={section} index={i} />
      ))}

      {/* Closing quote */}
      <section className="my-24 md:my-32 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <motion.div
          className="w-12 h-px bg-primary mb-10"
          style={{ originX: 0.5 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.blockquote
          className="font-display text-2xl md:text-3xl lg:text-4xl italic font-semibold text-tertiary leading-snug max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          viewport={{ once: true }}
        >
          "I don't know if I photograph the world to understand it, or to prove to myself
          that I was really there."
        </motion.blockquote>
        <motion.div
          className="w-12 h-px bg-primary mt-10"
          style={{ originX: 0.5 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </section>
    </main>
  );
}
