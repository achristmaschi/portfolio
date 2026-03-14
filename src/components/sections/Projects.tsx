export default function Projects() {
  return (
    <section
      id="work"
      className="px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:py-32"
    >
      <div>
        {/* Section heading */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-10 md:mb-16">
          featured
        </h2>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Project card */}
          <a
            href="#"
            className="group block rounded-2xl overflow-hidden bg-white/50 border border-primary/10
                       transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="aspect-[4/3] bg-primary/5 flex items-center justify-center overflow-hidden">
              <span className="text-primary/30 text-sm italic">Homepage</span>
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-medium text-[#3a302b] group-hover:text-primary transition-colors">
                Homepage
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
