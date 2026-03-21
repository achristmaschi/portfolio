const base = import.meta.env.BASE_URL;

interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  imageAlt?: string;
  video?: string;
}

const projects: Project[] = [
  {
    name: "BẢN",
    year: "2024",
    description:
      "BẢN explores the intersection of culture, craft, and modern branding. Inspired by Vietnamese brocade traditions, the project reimagines how heritage textiles can find new life in contemporary products and storytelling.",
    tags: ["Social Enterprise", "Brand Strategy", "Cultural Preservation"],
    href: `${base}featured-project`,
    video: `${base}assets/bản/BẢN_VIDEO.webm`,
    image: `${base}assets/ban_logo.avif`,
    imageAlt: "BẢN logo",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 lg:px-14">
      {/* Section heading */}
      <h2 className="font-heading text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-semibold text-primary mb-10 md:mb-16">
        featured
      </h2>

      {/* Divider */}
      <div className="border-t border-primary/20 mb-0" />

      {/* Project list */}
      <div className="divide-y divide-primary/10">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="group block py-10 md:py-14"
          >
            {/* Meta row */}
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-12 mb-8">
              {/* Left: name + year */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold italic text-primary group-hover:opacity-75 transition-opacity leading-tight">
                  {project.name}
                </h3>
                <p className="font-heading text-base font-bold text-subtitle mt-1">
                  {project.year}
                </p>
              </div>

              {/* Right: description + tags */}
              <div className="flex flex-col gap-4">
                <p className="font-sans text-base md:text-lg leading-relaxed text-[#3a302b] max-w-2xl">
                  {project.description}
                </p>
                <p className="font-sans text-xs tracking-widest uppercase text-primary/60">
                  {project.tags.map((tag, i) => (
                    <span key={tag}>
                      {i > 0 && <span className="mx-2 opacity-40">/</span>}
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* Project thumbnail */}
            <div className="border border-primary/10 rounded-xl overflow-hidden bg-secondary-bg transition-shadow duration-300 group-hover:shadow-md">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover max-h-[480px]"
                />
              ) : (
                <div className="flex items-center justify-center p-10 md:p-16">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="max-h-[320px] md:max-h-[400px] w-auto object-contain"
                  />
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
