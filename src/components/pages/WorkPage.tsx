import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL;

interface TimelineEntry {
  date: string;
  title: string;
  org: string;
  body: string;
  highlight?: boolean;
  last?: boolean;
  stats?: string[];
  caseStudyHref?: string;
}

const entries: TimelineEntry[] = [
  {
    date: "Jan 2025 – Present",
    title: "Instructional Assistant",
    org: "C. T. Bauer College of Business · Houston, TX",
    body: "Supporting 100+ students per semester — grading, virtual office hours, course development. The role that taught me that clear communication is its own form of leadership. I also helped write quiz questions, which turns out to be much harder than answering them.",
  },
  {
    date: "Jan 2025 – Present",
    title: "M.S. Global Business Leadership",
    org: "University of Houston · GPA 3.89/4.0",
    body: "Learning to think globally, lead across cultures, and combine analytical rigor with human judgment. The degree I chose because I believe business, done well, is one of the most powerful tools for positive change.",
  },
  {
    date: "Aug 2024 – Jan 2025",
    title: "Co-Founder & Operations Lead",
    org: "BẢN — Social Enterprise · Vietnam",
    body: "Built a brand rooted in Vietnamese ethnic minority heritage — handcrafted brocade products made by artisan communities in the highlands. Managed everything from vendor sourcing to sales events and brand storytelling.",
    highlight: true,
    stats: ["500+ customers", "30% event revenue growth", "10+ artisan partnerships"],
    caseStudyHref: `${base}featured-project`,
  },
  {
    date: "Jan – Apr 2024",
    title: "Business Development Intern",
    org: "Seaconsult JSC · GIZ–ASEAN SME II Project · Vietnam",
    body: "Contributed to an ASEAN-commissioned initiative to strengthen SME competitiveness — market research, policy analysis, and coordinating cross-border programs for 5,000+ businesses. My first real glimpse into how policy and business strategy intersect at scale.",
  },
  {
    date: "Jun 2022 – Mar 2023",
    title: "Academic Development Coordinator",
    org: "American Study JSC · Hà Nội",
    body: "Developed materials for 200+ students, ran workshops, and served as the bridge between teachers and families. Where I learned that communication is never just information — it's relationship.",
  },
  {
    date: "Sep 2020 – Dec 2024",
    title: "B.B.A. Entrepreneurship Management",
    org: "National Economics University · Hà Nội",
    body: "Where it started. Full-tuition exchange scholarship to Soka University, Japan. 3rd place in a start-up competition. A lot of tea, a lot of questions, and the beginning of figuring out what I actually want to build.",
    last: true,
  },
];

function Entry({ entry, index }: { entry: TimelineEntry; index: number }) {
  const dotBg = entry.highlight ? "bg-primary" : "bg-bg";
  const wrapperClass = entry.last ? "group timeline-entry-last" : "group timeline-entry";

  return (
    <motion.div
      className={wrapperClass}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className={`timeline-dot ${dotBg}`} />
      <p className="timeline-date">{entry.date}</p>
      <div className="timeline-title-row">
        <h2 className="timeline-title">{entry.title}</h2>
        <span className="timeline-dot-separator">·</span>
        <p className="timeline-org">{entry.org}</p>
      </div>
      <p className="timeline-body">{entry.body}</p>
      {entry.stats && (
        <div className="flex flex-wrap gap-3 mt-5">
          {entry.stats.map((s) => (
            <span key={s} className="timeline-stat-pill">{s}</span>
          ))}
        </div>
      )}
      {entry.caseStudyHref && (
        <a
          href={entry.caseStudyHref}
          className="inline-flex items-center gap-2 mt-5 font-sans text-sm font-medium text-primary/70 hover:text-primary transition-colors duration-200 group/link"
        >
          <span>Read the full case study</span>
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </a>
      )}
    </motion.div>
  );
}

export default function WorkPage() {
  return (
    <main className="pt-[56px] md:pt-[60px]">
      {/* Hero */}
      <section className="project-section flex flex-col min-h-[15vh] justify-center">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >— My Journey</motion.p>
        <motion.h1
          className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold italic text-primary leading-tight mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          From Hà Nội to Houston,
          <br className="hidden md:block" />
          with stops along the way.
        </motion.h1>
      </section>

      {/* Timeline */}
      <section className="project-section">
        <div className="relative">
          <motion.div
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-primary/15 hidden sm:block"
            style={{ originY: 0 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          />
          <div className="flex flex-col gap-0">
            {entries.map((entry, i) => (
              <Entry key={entry.title + entry.date} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume download */}
      <section className="project-section flex flex-col items-center text-center pb-8">
        <motion.div
          className="w-12 h-px bg-primary/30 mb-10"
          style={{ originX: 0.5 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="font-sans text-base text-subtitle italic mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Want the full picture?
        </motion.p>
        <motion.a
          href={`${base}assets/CHI TRAN 2026 resume.pdf`}
          download
          className="btn-pill gap-3 px-8 py-3 font-sans text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Résumé
        </motion.a>
      </section>
    </main>
  );
}
