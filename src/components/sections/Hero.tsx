export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] px-8 lg:px-16 pt-12 pb-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative flex flex-col lg:block">
        
        {/* ── Left Content (Text) ──────────────────────────────────────── */}
        <div className="relative z-10 lg:w-[65%]">
          {/* Main Name */}
          <h1
            className="text-primary font-bold leading-[0.85] tracking-tight selection:bg-primary selection:text-white
                       text-[5.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem]"
          >
            Chi Tran
          </h1>

          {/* Tagline */}
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-[#333] font-light max-w-xl">
            thinks in stories, sees in frames, and builds with intention.
          </p>

          {/* Bio Block */}
          <div className="mt-16 sm:mt-24 space-y-6 max-w-2xl text-[1.1rem] sm:text-lg lg:text-xl font-light text-[#222]">
            <p className="font-medium">Welcome — I'm Chi</p>
            <p className="leading-relaxed">
              I'm a business student who's always been curious about how things
              come together: brands, cultures, ideas, and the stories behind them.
              Alongside studying strategy, I spend time photographing the world on
              film, slowing down to notice the small details most people pass by.
            </p>
            <p className="leading-relaxed">
              This is a small corner of the internet where I share the work I've
              been building, the things I'm learning, and the moments that make
              me pause.
            </p>
          </div>
        </div>

        {/* ── Right Content (Overlapping Image Placeholder) ─────────────────── */}
        <div 
          className="relative lg:absolute lg:top-12 lg:right-0 z-0 mt-16 lg:mt-0 self-center lg:self-auto"
        >
          {/* The dashed blob shape */}
          <div
            className="w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] lg:w-[500px] lg:h-[600px] xl:w-[600px] xl:h-[700px]
                       rounded-[45%_55%_40%_60%/55%_45%_60%_40%] 
                       border-[2.5px] border-dashed border-primary
                       flex flex-col items-center justify-center text-primary/60
                       bg-white/30 backdrop-blur-sm"
          >
            <span className="text-lg italic font-medium">photo coming soon</span>
            <span className="text-sm mt-2 opacity-70">(overlapping image area)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
