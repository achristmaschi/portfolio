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
    body: "Where it started. Full-tuition exchange scholarship to Soka University, Japan. 3rd place in a national start-up competition. A lot of tea, a lot of questions, and the beginning of figuring out what I actually want to build.",
    last: true,
  },
];

function Entry({ entry }: { entry: TimelineEntry }) {
  const dotBg = entry.highlight ? "bg-primary" : "bg-bg";
  const wrapperClass = entry.last ? "group timeline-entry-last" : "group timeline-entry";

  return (
    <div className={wrapperClass}>
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
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="pt-[56px] md:pt-[60px]">
      {/* Hero */}
      <section className="project-section flex flex-col min-h-[35vh] justify-center">
        <p className="section-label">— My Journey</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic text-primary leading-tight mt-2">
          From Hà Nội to Houston,{" "}
          <br className="hidden md:block" />
          with stops along the way.
        </h1>
      </section>

      {/* Timeline */}
      <section className="project-section">
        <div className="relative">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-primary/15 hidden sm:block" />
          <div className="flex flex-col gap-0">
            {entries.map((entry) => (
              <Entry key={entry.title + entry.date} entry={entry} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
