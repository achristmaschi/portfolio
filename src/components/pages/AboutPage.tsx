import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';

const base = import.meta.env.BASE_URL;

const cities = ["Hà Nội", "San Francisco", "Hà Nội", "Japan", "Houston"];

const iAmCards = [
  {
    lead: "… probably at a café right now, on my second cup of matcha or egg coffee.",
    body: "I love tea in all its forms: matcha, oolong, green, hojicha, whatever's good. But Vietnamese egg coffee (cà phê trứng) has my whole heart. It's creamy, rich, and requires absolutely no rush. I do my best thinking in slow, warm places.",
  },
  {
    lead: "… still adjusting to a city where you need a car to get anywhere.",
    body: "I grew up walking everywhere: Hà Nội's alleys, San Francisco's hills, Japan's impossibly good train system. Houston is many things, but walkable is not one of them. I miss being able to just step outside and go.",
  },
  {
    lead: "… thinking in Vietnamese and writing in English, sometimes at the same time.",
    body: "There are ideas that only have the right word in one language. Living between two has made me a more careful, more precise thinker — always looking for the version that works in both worlds. Sometimes the translation is the most interesting part.",
  },
];

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
      <p className="mt-2 font-sans text-[11px] tracking-widest uppercase text-subtitle/80 text-right">
        photographs — hà nội
      </p>
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="mt-2 font-sans text-[11px] tracking-widest uppercase text-subtitle/80 text-right">
        photographs — hoà bình
      </p>
    </div>
  );
}

const outsideCards = [
  {
    title: "🍵 A tea phase with no end in sight",
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
];

export default function AboutPage() {
  return (
    <main className="pt-[56px] md:pt-[60px]">
      {/* Hero */}
      <section className="project-section grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-x-4 gap-y-4 lg:gap-y-5 min-h-[45vh]">
        <div className="lg:col-start-1 lg:row-start-1">
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic text-primary leading-tight">
            Hi there,<br />it's Chi!
          </h1>
          <p className="font-sans text-base md:text-lg text-subtitle italic">
            (Trần Tùng Chi, if we're being formal)
          </p>
        </div>
        <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-3 flex justify-center lg:justify-end">
          <img
            src={`${base}assets/about.avif`}
            alt="Chi Tran"
            className="w-[260px] sm:w-[300px] lg:w-[340px] xl:w-[420px] object-contain xl:mr-24"
          />
        </div>
        <p className="font-sans text-base md:text-lg leading-relaxed max-w-2xl order-3 lg:order-none lg:col-start-1 lg:row-start-2">
          A business student who believes the best strategy is a story well told —
          and that slowing down, whether in business or behind a camera, is almost
          always the right move.
        </p>
      </section>

      {/* My Story */}
      <section className="project-section">
        <p className="section-label">— My Story</p>
        <h2 className="section-heading">A Hà Nội girl learning to see the world, slowly.</h2>
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
              <span
                className={
                  i === 0 || i === cities.length - 1
                    ? "text-primary/80 xl:text-2xl font-semibold"
                    : undefined
                }
              >
                {city}
              </span>
              {i === cities.length - 1 ? (
                <span className="text-primary/40 text-xs">✦ now</span>
              ) : (
                <div className="w-6 md:w-10 xl:w-24 h-px bg-primary/20 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* I Am */}
      <section className="project-section">
        <h2 className="section-heading">I Am ...</h2>
        <div className="space-y-4">
          {iAmCards.map((card) => (
            <div key={card.lead} className="project-card">
              <p className="font-display text-xl md:text-2xl italic font-semibold text-tertiary mb-3">
                {card.lead}
              </p>
              <p className="project-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I bring */}
      <section className="project-section">
        <p className="section-label">— What I Bring to the Table</p>
        <h2 className="section-heading">How I think about work.</h2>
        <div className="space-y-4">
          {workPrinciples.map((p) => (
            <div key={p.num} className="project-card flex-row gap-6 items-start">
              <span className="font-display text-4xl font-bold text-primary shrink-0">{p.num}</span>
              <div>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outside of work */}
      <section className="project-section">
        <p className="section-label">— Outside of Work</p>
        <h2 className="section-heading">The rest of it.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {outsideCards.map((card) => (
            <div key={card.title} className="project-card">
              <h3 className="project-card-title">{card.title}</h3>
              <p className="project-card-body mt-3">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="my-24 md:my-32 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <div className="w-12 h-px bg-primary mb-10" />
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic font-semibold text-tertiary leading-snug max-w-3xl">
          "The best thinking I've done has happened slowly, over something warm,
          in a place with no particular reason to hurry."
        </blockquote>
        <div className="w-12 h-px bg-primary mt-10" />
      </section>
    </main>
  );
}
