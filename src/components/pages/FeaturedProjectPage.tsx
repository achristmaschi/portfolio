import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const base = import.meta.env.BASE_URL;

const symbolCards = [
  {
    title: "Bản — the village",
    body: (
      <>
        In Vietnamese, <em>bản</em> refers to a village or community in the highlands — a place of
        belonging, roots, and collective memory. The name grounds the brand in a sense of place and
        heritage that cannot be manufactured.
      </>
    ),
  },
  {
    title: "The Lạc Bird",
    body: "The logo features the Lạc Bird — a symbol of freedom and the rediscovery of fading ethnic values. Beneath it, an ethnic rooftop represents unity and community. Together, they speak of something ancient taking flight again.",
  },
  {
    title: "Indigo - the color",
    body: "The deep indigo of BẢN's identity reflects the traditional attire of Vietnam's mountain communities and their harmony with nature. It is the color of cloth dyed in rivers, worn through seasons, passed down through generations.",
  },
];

const coreValues = [
  {
    title: "Cultural Preservation",
    body: "BẢN is dedicated to safeguarding the rich cultural heritage of Vietnam's ethnic groups, ensuring these traditions are passed down and appreciated by future generations. We believe a craft that disappears takes an entire worldview with it.",
  },
  {
    title: "Sustainability",
    body: "BẢN prioritizes eco-friendly materials and responsible production practices, minimizing environmental impact while supporting the communities whose land and identity are inseparable from the craft.",
  },
  {
    title: "Community & Empowerment",
    body: "Through direct collaboration with local artisans, BẢN creates real economic opportunity for ethnic minority communities — fair wages, long-term partnerships, and the dignity of having their work seen and valued by the wider world.",
  },
];

const lessons = [
  {
    num: "01",
    title: "Strategy is storytelling",
    body: "Every decision we made — pricing, distribution, packaging, partnerships — was also a statement about what BẢN believed. Strategy and narrative are inseparable.",
  },
  {
    num: "02",
    title: "Trust is infrastructure",
    body: "Working with artisan communities taught me that the most important agreements are not written in contracts. They are built through consistency, respect, and showing up.",
  },
  {
    num: "03",
    title: "Culture is a business asset",
    body: "Not in a transactional way, but in the sense that products rooted in real meaning connect with people in ways that manufactured aesthetics never can.",
  },
  {
    num: "04",
    title: "Patience is a skill",
    body: "Handcraft cannot be rushed. Neither can trust, nor community, nor the kind of brand that actually means something. BẢN taught me to move with intention, not urgency.",
  },
];

const impactStats = [
  { stat: "30%", label: "Event revenue growth within 2 months" },
  { stat: "500+", label: "Customers engaged across pop-up events" },
  { stat: "800+", label: "Social followers — +588% in 4 months" },
  { stat: "10+", label: "Artisan supplier partnerships established" },
];

const impactDetails = [
  {
    title: "Revenue & Customer Engagement",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Organized in-person sales events driving 30% revenue growth within two months of launch</li>
        <li>Engaged 500+ customers through pop-up events, product showcases, and direct sales</li>
        <li>Built early brand recognition among university students and young consumers drawn to culturally inspired products</li>
      </ul>
    ),
  },
  {
    title: "Digital Community Growth",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Grew to 800+ followers (+588%) in approximately four months through organic content and storytelling</li>
        <li>Achieved 2.9K Facebook reach and 1.3K interactions — driven by artisan stories and cultural heritage content</li>
        <li>Grew Instagram reach to 1.4K (+1,300%) through visual product photography and behind-the-scenes production content</li>
      </ul>
    ),
  },
  {
    title: "Operational Development",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Established partnerships with 10+ artisan suppliers, building a reliable production network for handcrafted brocade</li>
        <li>Implemented operational tracking for inventory, supplier coordination, and order fulfillment to support scalable growth</li>
        <li>Built brand infrastructure: packaging concepts, sales materials, and social media channel architecture</li>
      </ul>
    ),
  },
  {
    title: "Community & Cultural Impact",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Introduced traditional brocade craftsmanship to a younger audience by translating heritage textiles into modern lifestyle products</li>
        <li>Created a platform that amplified artisan community stories and modelled fair, respectful collaboration practices</li>
      </ul>
    ),
  },
];

const eventImages = [
  'IMG_0549', 'IMG_0821', 'IMG_0849', 'IMG_0860',
  'IMG_8251', 'IMG_8736', 'IMG_8739',
  'IMG_9026', 'IMG_9036', 'IMG_9193', 'IMG_9285', 'IMG_9288',
  'IMG_9586', 'IMG_9607', 'IMG_9617',
].map((name) => ({
  src: `${base}assets/bản/event/${name}.avif`,
  alt: `BẢN pop-up event — ${name}`,
}));

const popupImages = [
  { src: `${base}assets/bản/popup1.avif`, alt: 'BẢN pop-up event' },
  { src: `${base}assets/bản/popup2.avif`, alt: 'BẢN pop-up event' },
  { src: `${base}assets/bản/popup3.avif`, alt: 'BẢN pop-up event' },
];

function EventGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div
      className="project-section"
      style={{ '--swiper-navigation-color': 'var(--color-primary)', '--swiper-theme-color': 'var(--color-primary)' } as React.CSSProperties}
    >
      <p className="section-label">— The Events</p>
      <h2 className="section-heading">On the ground.</h2>

      {/* Popup triptych: 3 equal portrait cards, capped in width */}
      <div className="flex justify-center gap-4 mb-6">
        {popupImages.map((img, i) => (
          <div key={i} className="w-[220px] sm:w-[260px] md:w-[300px] shrink-0 rounded-xl overflow-hidden shadow-sm">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Main viewer */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        navigation
        spaceBetween={12}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="w-full rounded-xl overflow-hidden mb-3"
      >
        {eventImages.map((img) => (
          <SwiperSlide key={img.src}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[55vw] sm:h-[420px] md:h-[520px] object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail strip */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={6}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        breakpoints={{
          480: { slidesPerView: 6, spaceBetween: 6 },
          768: { slidesPerView: 8, spaceBetween: 8 },
          1024: { slidesPerView: 10, spaceBetween: 8 },
        }}
        className="thumbs-gallery"
      >
        {eventImages.map((img) => (
          <SwiperSlide
            key={img.src}
            className="cursor-pointer rounded overflow-hidden opacity-50 transition-opacity [&.swiper-slide-thumb-active]:opacity-100"
          >
            <img
              src={img.src}
              alt=""
              aria-hidden="true"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function FeaturedProjectPage() {
  return (
    <main className="pt-[56px] md:pt-[60px]">

      {/* Hero */}
      <section className="project-section flex flex-col md:flex-row items-center min-h-[40vh]">
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={`${base}assets/ban_logo.avif`}
            alt="BẢN logo"
            className="w-[300px] md:w-[400px] lg:w-[600px] object-contain"
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            BẢN – Unveiling Identity
          </h1>
          <p className="font-sans text-base md:text-xl text-subtitle leading-relaxed max-w-md mx-auto md:mx-0">
            A social enterprise preserving Vietnam's ethnic minority heritage through handcrafted
            brocade, and the story of how a question became a brand.
          </p>
        </div>
      </section>

      {/* The Origin */}
      <section className="project-section">
        <p className="section-label">— The Origin</p>
        <h2 className="section-heading">It started with a question...</h2>
        <div className="section-body">
          <p>BẢN began as a question: how can traditional craftsmanship exist meaningfully in a modern market?</p>
          <p>
            While learning more about Vietnam's ethnic textile traditions, I became drawn to the
            stories woven into brocade fabrics—patterns that carry cultural identity, history, and
            community memory. Each piece of cloth, I realized, was a form of language. A record of a
            people, stitched by hand over generations in the mountainous regions of Vietnam, by ethnic
            minority communities whose voices rarely reached the world beyond their villages.
          </p>
          <p>
            Yet many of these crafts struggle to reach modern audiences. Mass production, changing
            tastes, and fading intergenerational knowledge have pushed these traditions toward
            disappearance. I wanted to understand whether thoughtful branding and storytelling could
            help bridge that gap—presenting traditional craftsmanship in a way that feels relevant and
            alive, while still honoring its origins with full integrity.
          </p>
          <p>
            So together with a group of passionate young entrepreneurs, we built BẢN—a brand rooted
            in a mission to preserve and promote the ethnic heritage of Vietnam's mountainous regions,
            while creating sustainable economic opportunities for the artisan communities who keep
            these traditions alive.
          </p>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[700px] sm:min-h-[600px] md:min-h-[400px]">
        <img src={`${base}assets/stuffy3.avif`} alt="" aria-hidden="true"
          className="absolute left-0 bottom-0 w-[170px] sm:w-[200px] md:w-[220px] lg:w-[260px] object-contain pointer-events-none select-none" />
        <img src={`${base}assets/stuffy2.avif`} alt="" aria-hidden="true"
          className="absolute top-12 md:top-0 right-0 w-[160px] md:w-[200px] lg:w-[260px] object-contain pointer-events-none select-none" />
        <img src={`${base}assets/stuffy1.avif`} alt="" aria-hidden="true"
          className="absolute bottom-0 right-4 w-[120px] md:w-[130px] lg:w-[150px] object-contain pointer-events-none select-none" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-16 md:px-40 lg:px-32 xl:px-8 md:pb-0">
          <p className="font-sans font-semibold text-lg md:text-2xl text-tertiary mb-10 md:mb-16 tracking-wide">
            on the meaning behind
          </p>
          <blockquote className="font-display text-2xl md:text-3xl xl:text-4xl italic font-semibold text-tertiary leading-snug">
            "The patterns in brocade are not decoration. They are identity—a visual record of who a
            community is, where they come from, and what they believe."
          </blockquote>
        </div>
      </section>

      {/* The Name & Symbol */}
      <section className="project-section">
        <p className="section-label">— The Name & The Symbol</p>
        <h2 className="section-heading">What BẢN means?</h2>
        <div className="space-y-4">
          {symbolCards.map((card) => (
            <div key={card.title} className="project-card">
              <h3 className="project-card-title">{card.title}</h3>
              <p className="project-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Product */}
      <section className="project-section">
        <p className="section-label">— The Product</p>
        <h2 className="section-heading">Craft, made for today.</h2>
        <div className="section-body">
          <p>
            BẢN's product line is built around handcrafted brocade objects — each one a collaboration
            between traditional artisanship and contemporary design. Plush toys, wallets, scarves, and
            keychains, all made from authentic brocade fabric woven by ethnic minority artisans. Every
            piece is functional, beautiful, and carries the story of the hands that made it.
          </p>
          <p>
            We designed the products to live in the gifting market — where meaning matters as much as
            aesthetics. When someone gives a BẢN product, they are giving a piece of cultural history
            wrapped in the work of a real artisan, paid fairly for their craft.
          </p>
        </div>
      </section>

      {/* My Role */}
      <section className="project-section">
        <p className="section-label">— My Role</p>
        <h2 className="section-heading">What I actually built.</h2>
        <div className="section-body">
          <p>
            As co-founder and operations lead, I was responsible for the parts of BẢN that most
            people never see — the infrastructure that makes a brand actually function. Vendor
            sourcing, production planning, supplier negotiations, inventory, order fulfillment. I
            built relationships with more than ten artisan suppliers, aligning on pricing, timelines,
            and quality standards in a context where trust and cultural respect mattered as much as
            contracts.
          </p>
          <p>
            I also shaped how BẢN told its story. I developed brand narratives and press-style
            content, planned and executed our sales events, and managed the customer relationships
            that turned first-time buyers into people who understood — and cared about — what BẢN
            stood for.
          </p>
          <p>
            Within two months of our first event, we had engaged over 500 customers and grown event
            revenue by 30%. But the number I'm proudest of is harder to measure: the number of people
            who left one of our events knowing the name of the craft, the community behind it, and why
            it matters.
          </p>
        </div>
      </section>

      <EventGallery />

      {/* Core Values */}
      <section className="project-section">
        <p className="section-label">— Core Values</p>
        <h2 className="section-heading">What we stand for.</h2>
        <div className="space-y-4">
          {coreValues.map((v) => (
            <div key={v.title} className="project-card">
              <h3 className="project-card-title">{v.title}</h3>
              <p className="project-card-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results & Impact */}
      <section className="project-section">
        <p className="section-label">— Results & Impact</p>
        <h2 className="section-heading">Early traction, real numbers.</h2>
        <div className="section-body mb-8">
          <p>
            Within the first two months of launch, BẢN achieved strong early traction through a combination of community storytelling, in-person sales events, and organic digital marketing, with no paid advertising.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {impactStats.map((stat, i) => (
            <div key={i} className="project-card flex flex-col items-center justify-center text-center p-6 min-h-[160px]">
              <span className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">{stat.stat}</span>
              <span className="text-sm sm:text-base text-subtitle leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {impactDetails.map((detail) => (
            <div key={detail.title} className="project-card">
              <h3 className="project-card-title">{detail.title}</h3>
              <div className="project-card-body text-subtitle">{detail.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section className="project-section">
        <p className="section-label">— What I Learned</p>
        <h2 className="section-heading">How it shaped me.</h2>
        <div className="section-body mb-12">
          <p>
            BẢN taught me that building something meaningful is harder — and more rewarding — than
            building something profitable. That the best brands don't just sell products; they give
            people a way to participate in something larger than themselves. That operations and
            storytelling are not opposites; they are the same act of care, expressed in different
            forms.
          </p>
        </div>
        <div className="space-y-4">
          {lessons.map((l) => (
            <div key={l.num} className="project-card flex-row gap-6 items-start">
              <span className="font-display text-4xl font-bold text-primary shrink-0">{l.num}</span>
              <div>
                <h3 className="project-card-title">{l.title}</h3>
                <p className="project-card-body">{l.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="project-section flex flex-col items-center text-center">
        <div className="w-12 h-px bg-primary mb-10" />
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic font-semibold text-tertiary leading-snug max-w-3xl">
          "I went in thinking I was building a brand. I came out understanding that I was learning
          how to listen — to artisans, to customers, to the story the material itself wanted to tell."
        </blockquote>
        <div className="w-12 h-px bg-primary mt-10" />
      </section>

    </main>
  );
}
