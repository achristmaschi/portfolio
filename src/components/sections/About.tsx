export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* ── Text Content ──────────────────────────────────── */}
        <div className="flex-1 space-y-6 md:space-y-8 max-w-2xl">
          <p className="text-lg md:text-xl font-medium text-[#3a302b]">
            Welcome — I'm Chi
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#4a3f3a] font-light">
            I'm a business student who's always been curious about how things
            come together: brands, cultures, ideas, and the stories behind them.
            Alongside studying strategy, I spend time photographing the world on
            film, slowing down to notice the small details most people pass by.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#4a3f3a] font-light">
            This is a small corner of the internet where I share the work I've
            been building, the things I'm learning, and the moments that make
            me pause.
          </p>
        </div>

        {/* ── Image ─────────────────────────────────────────── */}
        <div className="self-center lg:self-start shrink-0">
          <div className="relative">
            {/* Dashed organic border behind */}
            <div
              className="absolute -inset-3 md:-inset-4 rounded-[45%_55%_40%_60%/55%_45%_60%_40%]
                         border-[2px] border-dashed border-primary/40"
            />
            <img
              src="https://static.wixstatic.com/media/d1b75a_558b2d769cf544a28069a9dc21da837d~mv2.png/v1/fill/w_414,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pink%20Poppy%20Flowers.png"
              alt="Pink Poppy Flowers"
              className="w-[240px] h-[320px] sm:w-[280px] sm:h-[374px] md:w-[310px] md:h-[414px]
                         object-cover rounded-[45%_55%_40%_60%/55%_45%_60%_40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
