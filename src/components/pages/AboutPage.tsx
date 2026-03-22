import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';

const base = import.meta.env.BASE_URL;

const cities = ["Hà Nội", "San Francisco", "Hà Nội", "Japan", "Houston"];

const workPrinciples = [
  {
    num: "01",
    title: "Strategy is storytelling",
    body: "The best business decisions aren't just efficient — they're meaningful. I approach strategy the same way I approach a photograph: looking for the frame that makes the whole picture make sense. Data tells you what happened. Story tells you why it matters.",
  },
  {
    num: "02",
    title: "Observe before you act",
    body: "The Hoà Bình trip taught me this viscerally: showing up with the wrong solution, however well-intentioned, helps no one. I'd rather ask one more question than make one more assumption. The best insights come from looking closer, not faster.",
  },
  {
    num: "03",
    title: "Cross-cultural fluency is a skill",
    body: "Not just linguistically, but in the deeper sense of understanding how context shapes meaning. What works in one culture may need translation in another. I've lived that across multiple countries, and I bring it to every team I'm part of.",
  },
];

const HANOI_DIMS = [
  { w: 768,  h: 1024 },
  { w: 885,  h: 825  },
  { w: 768,  h: 1024 },
  { w: 768,  h: 1024 },
  { w: 1200, h: 845  },
  { w: 768,  h: 1024 },
  { w: 886,  h: 886  },
  { w: 768,  h: 1024 },
];

const hanoiPhotos = [1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => ({
  src: `${base}assets/hanoi/hanoi${n}.avif`,
  alt: `Hà Nội street scene ${n}`,
  width: HANOI_DIMS[i].w,
  height: HANOI_DIMS[i].h,
}));
const hoaBinhPhotos = [1, 2, 3, 4].map((n) => ({
  src: `${base}assets/hoabinh/hoabinh${n}.avif`,
  alt: `Hoà Bình ${n}`,
}));

function HanoiGallery() {
  return (
    <div className="my-8">
      <ColumnsPhotoAlbum
        photos={hanoiPhotos}
        columns={(w) => (w < 480 ? 2 : w < 768 ? 3 : 4)}
        spacing={8}
      />
      <p className="gallery-caption">photographs — hà nội</p>
    </div>
  );
}

function HoaBinhStrip() {
  return (
    <div className="my-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={8}
        loop
        speed={5000}
        autoplay={{ delay: 0 }}
      >
        {hoaBinhPhotos.map((photo, i) => (
          <SwiperSlide key={i} style={{ width: 'auto' }}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="block h-[48vw] sm:h-[18rem] md:h-[22rem] lg:h-[28rem] w-auto"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="gallery-caption">photographs — hoà bình</p>
    </div>
  );
}

const outsideCards = [
  {
    title: "🍵 Enjoying a tea phase with no end in sight",
    body: "Matcha, oolong, jasmine, hojicha — I'm open to all of it. Vietnamese egg coffee holds a special place. Japan made me very serious about tea. I now own more tea than I have mugs for, which feels like a completely reasonable life choice.",
  },
  {
    title: "📖 Reading outside of business school",
    body: "Essays, non-fiction, anything at the intersection of culture and ideas. I'm drawn to writers who notice things other people walk past. Current rotation: books about memory, craft, and how places shape people.",
  },
  {
    title: "✍︎ Writing something that may never be published",
    body: "Journaling, blog drafts, notes on things I'm still figuring out. Writing is how I understand what I actually think. If a post eventually makes it to the Playground, it went through at least three cups of tea and one deleted draft.",
  },
  {
    title: "🎞️ Waiting to find out what's on that last roll of film.",
    body: "I shoot on expired film, mostly Agfa Vista and Kodak Gold. The colors shift in ways you can't predict. You won't know what you got until weeks later. I find that deeply reassuring. Not everything needs to be immediate.",
  },
  {
    title: "🚗 Adjusting to a car-dependent city",
    body: "I grew up walking everywhere: Hà Nội's alleys, San Francisco's hills, Japan's impossibly good train system. Houston is many things, but walkable is not one of them. I miss being able to just step outside and go.",
  },
  {
    title: "💬 Thinking in Vietnamese and writing in English.",
    body: "There are ideas that only have the right word in one language. Living between two has made me a more careful, more precise thinker — always looking for the version that works in both worlds. Sometimes the translation is the most interesting part.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-[56px] md:pt-[60px]">
      {/* Hero */}
      <section className="project-section grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-x-4 gap-y-4 lg:gap-y-5 min-h-[45vh]">
        <div className="lg:col-start-1 lg:row-start-1">
          <motion.h1
            className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic text-primary leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Hi there,<br />it's Chi!
          </motion.h1>
          <motion.p
            className="font-sans text-base md:text-lg text-subtitle italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            (Trần Tùng Chi, if we're being formal)
          </motion.p>
        </div>
        <motion.div
          className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-3 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          <img
            src={`${base}assets/about.avif`}
            alt="Chi Tran"
            className="w-[260px] sm:w-[300px] lg:w-[340px] xl:w-[420px] object-contain xl:mr-24"
            width={840}
            height={1120}
            fetchPriority="high"
          />
        </motion.div>
        <motion.p
          className="font-sans text-base md:text-lg leading-relaxed max-w-2xl order-3 lg:order-none lg:col-start-1 lg:row-start-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.35 }}
        >
          A business student who believes the best strategy is a story well told —
          and that slowing down, whether in business or behind a camera, is almost
          always the right move.
        </motion.p>
      </section>

      {/* My Story */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— My Story</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >A Hà Nội girl learning to see the world, slowly.</motion.h2>
        <div className="section-body">
          <p>
            Growing up in Hà Nội taught me to notice things. The city is busy and
            chaotic on the surface, but underneath it—people sitting on tiny plastic stools
            with tea, street vendors arranging fruit with quiet care, neighbours who have
            known each other for decades—there's a whole other rhythm. Living there made me
            a watcher. Interested in how community builds itself in the spaces between words.
            That habit stayed.
          </p>
          <HanoiGallery />
          <p>
            It stayed when my team and I drove up to Hoà Bình, a mountainous province in
            northern Vietnam, carrying fans and lights as gifts for an ethnic minority
            community. When we arrived, most of it couldn't be used due to different outlets
            and frequent power cuts. A small moment, but it made something permanently clear:
            good solutions require you to understand the world as it actually is, not as you
            imagine it. That's the lens I've carried into everything since, including BẢN.
          </p>
          <HoaBinhStrip />
          <p>
            It stayed, too, through every move. San Francisco from 7th grade through 10th,
            back to Việt Nam, then a semester in Japan, and now Houston. Each place asked for
            a different version of me, and I had to figure out, quietly and quickly, how to
            exist there. The hardest part was never the logistics—it was rebuilding
            friendships, routines, the confidence to communicate in a room where you're still
            finding your footing. Being between languages and cultures means I'm often looking
            for the version of an idea that works in both worlds. I think that makes me a more
            careful thinker, and a better communicator.
          </p>
        </div>
      </section>

      {/* City trail */}
      <div className="px-6 md:px-12 lg:px-28 2xl:px-0 flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 font-sans text-sm md:text-base text-subtitle/50 select-none">
          {cities.map((city, i) => (
            <React.Fragment key={city + i}>
              <motion.span
                className={
                  i === 0 || i === cities.length - 1
                    ? "text-primary/80 xl:text-2xl font-semibold"
                    : undefined
                }
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                {city}
              </motion.span>
              {i === cities.length - 1 ? (
                <motion.span
                  className="text-primary/40 text-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.05 }}
                  viewport={{ once: true }}
                >✦ now</motion.span>
              ) : (
                <motion.div
                  className="w-6 md:w-10 xl:w-24 h-px bg-primary/20 shrink-0"
                  style={{ originX: 0 }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.05 }}
                  viewport={{ once: true }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* What I bring */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— What I Bring to the Table</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >How I think about work.</motion.h2>
        <div className="space-y-4">
          {workPrinciples.map((p, i) => (
            <motion.div
              key={p.num}
              className="project-card flex-row gap-6 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <span className="font-display text-4xl font-bold text-primary shrink-0">{p.num}</span>
              <div>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-body">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outside of work */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— Outside of Work</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >I Am...</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {outsideCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="project-card"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h3 className="project-card-title">{card.title}</h3>
              <p className="project-card-body mt-3">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
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
          "The best thinking I've done has happened slowly, over something warm,
          in a place with no particular reason to hurry."
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
