import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function HomePage() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <main className="pt-[56px] md:pt-[60px]">
      {/* Hero */}
      <section
        ref={sectionRef}
        id="hero"
        className="relative px-6 md:px-10 lg:px-14 pt-8 pb-16 md:pb-24 overflow-hidden min-h-screen flex flex-col justify-center"
      >
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
          {/* Profile image */}
          <motion.div
            className="shrink-0"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            <img
              src={`${base}assets/profile.avif`}
              alt="Chi Tran portrait with flowers"
              className="w-[300px] sm:w-[330px] md:w-[380px] xl:w-[500px]"
              fetchPriority="high"
            />
          </motion.div>

          {/* Text content */}
          <motion.div className="flex-1 min-w-0" style={{ y: textY }}>
            <motion.h1
              className="font-heading leading-[0.9] tracking-tight text-primary font-semibold
                         text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem]"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.045 } },
              }}
            >
              {"Chi Tran".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-3 md:mt-5 text-base sm:text-lg md:text-xl text-[#4a3f3a] italic font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.55 }}
            >
              thinks in stories, sees in frames, and builds with intention.
            </motion.p>

            <motion.div
              className="mt-12 space-y-4 md:space-y-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.75 }}
            >
              <p className="text-sm md:text-base leading-relaxed text-[#4a3f3a]">
                Welcome!
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#4a3f3a]">
                I'm a business student who's always been curious about how
                things come together: brands, cultures, ideas, and the stories
                behind them. Alongside studying strategy, I spend time
                photographing the world on film, slowing down to notice the
                small details most people pass by.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#4a3f3a]">
                This is a small corner of the internet where I share the work
                I've been building, the things I'm learning, and the moments
                that make me pause.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`${import.meta.env.BASE_URL}about`}
                  className="inline-flex items-center gap-2 border-[1.5px] border-primary rounded-full px-6 py-2.5 text-sm md:text-base italic bg-primary text-bg font-medium tracking-wide transition-colors duration-200 hover:bg-transparent hover:text-primary"
                >
                  get to know me
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}work`}
                  className="inline-flex items-center gap-2 border-[1.5px] border-primary rounded-full px-6 py-2.5 text-sm md:text-base italic text-primary font-medium tracking-wide transition-colors duration-200 hover:bg-primary/80 hover:text-bg"
                >
                  explore my career
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="px-6 md:px-10 lg:px-14">
        <motion.h2
          className="font-heading text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-semibold text-primary mb-10 md:mb-16"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          featured
        </motion.h2>

        <motion.div
          className="border-t border-primary/20 mb-0"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        />

        <div className="divide-y divide-primary/10">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              className="group block py-10 md:py-14"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-12 mb-8">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold italic text-primary group-hover:opacity-75 transition-opacity leading-tight">
                    {project.name}
                  </h3>
                  <p className="font-heading text-base font-bold text-subtitle mt-1">
                    {project.year}
                  </p>
                </div>

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

              <motion.div
                className="border border-primary/10 rounded-xl overflow-hidden bg-secondary-bg transition-shadow duration-300 group-hover:shadow-md"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
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
              </motion.div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
