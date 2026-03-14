export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center px-6 md:px-10 lg:px-14 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Main Name */}
        <h1
          className="font-display font-bold leading-[0.9] tracking-tight text-primary
                     text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] xl:text-[13rem]"
        >
          Chi Tran
        </h1>

        {/* Tagline */}
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#4a3f3a] font-light max-w-lg lg:max-w-xl leading-relaxed">
          thinks in stories, sees in frames, and builds with intention.
        </p>
      </div>
    </section>
  );
}
