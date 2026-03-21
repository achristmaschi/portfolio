"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image moves up 120px while the section is in view — leads the scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative px-6 md:px-10 lg:px-14 pt-8 pb-16 md:pb-24 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Outer row: image on top (mobile/tablet), image on right (desktop) */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
        {/* Profile image — top on mobile, right on desktop */}
        <motion.div className="shrink-0" style={{ y: imageY }}>
          <img
            src={`${import.meta.env.BASE_URL}assets/profile.avif`}
            alt="Chi Tran portrait with flowers"
            className="w-[300px] sm:w-[330px] md:w-[380px] xl:w-[500px]"
            width={1200}
            height={1600}
            fetchPriority="high"
          />
        </motion.div>

        {/* Text content — below image on mobile, left on desktop */}
        <div className="flex-1 min-w-0">
          {/* Main Name */}
          <h1
            className="font-heading leading-[0.9] tracking-tight text-primary font-semibold
                       text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem]"
          >
            Chi Tran
          </h1>

          {/* Tagline */}
          <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg text-[#4a3f3a] italic">
            thinks in stories, sees in frames, and builds with intention.
          </p>

          {/* Bio */}
          <div className="mt-12 space-y-6 md:space-y-8 max-w-3xl">
            <p className="text-base md:text-lg text-[#3a302b] font-bold italic">
              Welcome — I'm Chi
            </p>
            <p className="text-sm md:text-base leading-relaxed text-[#4a3f3a]">
              I'm a business student who's always been curious about how things
              come together: brands, cultures, ideas, and the stories behind them.
              Alongside studying strategy, I spend time photographing the world on
              film, slowing down to notice the small details most people pass by.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-[#4a3f3a]">
              This is a small corner of the internet where I share the work I've
              been building, the things I'm learning, and the moments that make
              me pause.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
