export default function Hero() {
  return (
    <section
      id="hero"
      className="relative px-6 md:px-10 lg:px-14 pt-8 pb-16 md:pb-24 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Outer row: image on top (mobile/tablet), image on right (desktop) */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
        {/* Profile image — top on mobile, right on desktop */}
        <div className="shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/profile.png`}
            alt="Chi Tran portrait with flowers"
            className="w-[300px] h-[390px] sm:w-[330px] sm:h-[430px] md:w-[380px] md:h-[500px]
                       object-cover rounded-[45%_55%_40%_60%/55%_45%_60%_40%]"
          />
        </div>

        {/* Text content — below image on mobile, left on desktop */}
        <div className="flex-1 min-w-0">
          {/* Main Name */}
          <h1
            className="font-heading leading-[0.9] tracking-tight text-primary
                       text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
          >
            Chi Tran
          </h1>

          {/* Tagline */}
          <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg text-[#4a3f3a] italic">
            thinks in stories, sees in frames, and builds with intention.
          </p>

          {/* Bio */}
          <div className="mt-12 space-y-6 md:space-y-8 max-w-2xl">
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
