export default function Hero() {
  return (
    <section
      id="hero"
      className="relative px-6 md:px-10 lg:px-14 pt-4 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Divider line below nav */}
      <div className="border-t border-primary/20 mb-8 md:mb-12" />

      {/* Main Name */}
      <h1
        className="font-display font-bold leading-[0.9] tracking-tight text-primary
                   text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
      >
        Chi Tran
      </h1>

      {/* Tagline */}
      <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg text-[#4a3f3a] font-light italic">
        thinks in stories, sees in frames, and builds with intention.
      </p>

      {/* Bio + Image row */}
      <div className="mt-12 md:mt-16 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 space-y-6 md:space-y-8 max-w-2xl">
          <p className="text-base md:text-lg font-medium text-[#3a302b] italic">
            Welcome — I'm Chi
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#4a3f3a] font-light">
            I'm a business student who's always been curious about how things
            come together: brands, cultures, ideas, and the stories behind them.
            Alongside studying strategy, I spend time photographing the world on
            film, slowing down to notice the small details most people pass by.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#4a3f3a] font-light">
            This is a small corner of the internet where I share the work I've
            been building, the things I'm learning, and the moments that make
            me pause.
          </p>
        </div>

        {/* Image with organic blob shape */}
        <div className="self-center lg:self-start shrink-0 relative">
          <img
            src="https://static.wixstatic.com/media/d1b75a_558b2d769cf544a28069a9dc21da837d~mv2.png/v1/fill/w_414,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pink%20Poppy%20Flowers.png"
            alt="Chi Tran portrait with flowers"
            className="relative w-[260px] h-[340px] sm:w-[280px] sm:h-[370px] md:w-[320px] md:h-[420px]
                       object-cover rounded-[45%_55%_40%_60%/55%_45%_60%_40%]"
          />
        </div>
      </div>
    </section>
  );
}
