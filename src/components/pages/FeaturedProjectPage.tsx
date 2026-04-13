import { motion } from "framer-motion";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const base = import.meta.env.BASE_URL;

const productPhotos = [
  {
    src: `${base}assets/bản/product/product_list.avif`,
    alt: "BẢN product lineup",
    width: 1200,
    height: 1697,
  },
  {
    src: `${base}assets/bản/product/IMG_0005.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 900,
  },
  {
    src: `${base}assets/bản/product/IMG_0043.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 900,
  },
  {
    src: `${base}assets/bản/product/IMG_7211.avif`,
    alt: "BẢN product",
    width: 900,
    height: 1200,
  },
  {
    src: `${base}assets/bản/product/IMG_7367.avif`,
    alt: "BẢN product",
    width: 900,
    height: 1200,
  },
  {
    src: `${base}assets/bản/product/IMG_7396.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 1600,
  },
  {
    src: `${base}assets/bản/product/IMG_7425.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 1600,
  },
  {
    src: `${base}assets/bản/product/IMG_7435.avif`,
    alt: "BẢN product",
    width: 900,
    height: 1200,
  },
  {
    src: `${base}assets/bản/product/IMG_7487.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 1600,
  },
  {
    src: `${base}assets/bản/product/IMG_7531.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 1600,
  },
  {
    src: `${base}assets/bản/product/IMG_7548.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 1600,
  },
  {
    src: `${base}assets/bản/product/IMG_7582.avif`,
    alt: "BẢN product",
    width: 1200,
    height: 1600,
  },
];

function ProductGallery() {
  return (
    <div className="my-8">
      <ColumnsPhotoAlbum
        photos={productPhotos}
        columns={(w) => (w < 480 ? 2 : w < 768 ? 3 : 4)}
        spacing={8}
      />
      <p className="gallery-caption">photographs — bản products</p>
    </div>
  );
}

const insightPhotos = [
  { src: `${base}assets/bản/insight/insight_1.avif`, alt: 'BẢN insight 1', width: 1200, height: 514 },
  { src: `${base}assets/bản/insight/insight_2.avif`, alt: 'BẢN insight 2', width: 1200, height: 510 },
  { src: `${base}assets/bản/insight/insight_3.avif`, alt: 'BẢN insight 3', width: 1200, height: 426 },
  { src: `${base}assets/bản/insight/insight_4.avif`, alt: 'BẢN insight 4', width: 1200, height: 655 },
  { src: `${base}assets/bản/insight/insight_5.avif`, alt: 'BẢN insight 5', width: 1200, height: 511 },
  { src: `${base}assets/bản/insight/insight_6.avif`, alt: 'BẢN insight 6', width: 1200, height: 529 },
];

const symbolCards = [
  {
    title: "Bản — the village",
    body: (
      <>
        In Vietnamese, <em>bản</em> refers to a village or community in the
        highlands — a place of belonging, roots, and collective memory. The name
        grounds the brand in a sense of place and heritage that cannot be
        manufactured.
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
        <li>
          Organized in-person sales events driving 30% revenue growth within two
          months of launch
        </li>
        <li>
          Engaged 500+ customers through pop-up events, product showcases, and
          direct sales
        </li>
        <li>
          Built early brand recognition among university students and young
          consumers drawn to culturally inspired products
        </li>
      </ul>
    ),
  },
  {
    title: "Digital Community Growth",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Grew to 800+ followers (+588%) in approximately four months through
          organic content and storytelling
        </li>
        <li>
          Achieved 2.9K Facebook reach and 1.3K interactions — driven by artisan
          stories and cultural heritage content
        </li>
        <li>
          Grew Instagram reach to 1.4K (+1,300%) through visual product
          photography and behind-the-scenes production content
        </li>
      </ul>
    ),
  },
  {
    title: "Operational Development",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Established partnerships with 10+ artisan suppliers, building a
          reliable production network for handcrafted brocade
        </li>
        <li>
          Implemented operational tracking for inventory, supplier coordination,
          and order fulfillment to support scalable growth
        </li>
        <li>
          Built brand infrastructure: packaging concepts, sales materials, and
          social media channel architecture
        </li>
      </ul>
    ),
  },
  {
    title: "Community & Cultural Impact",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Introduced traditional brocade craftsmanship to a younger audience by
          translating heritage textiles into modern lifestyle products
        </li>
        <li>
          Created a platform that amplified artisan community stories and
          modelled fair, respectful collaboration practices
        </li>
      </ul>
    ),
  },
];

const eventImages = [
  "popup1",
  "popup2",
  "popup3",
  "IMG_0549",
  "IMG_0821",
  "IMG_0849",
  "IMG_0860",
  "IMG_8520",
  "IMG_8736",
  "IMG_8739",
  "IMG_9026",
  "IMG_9036",
  "IMG_9193",
  "IMG_9285",
  "IMG_9288",
  "IMG_9586",
  "IMG_9607",
  "IMG_9617",
].map((name) => ({
  src: `${base}assets/bản/event/${name}.avif`,
  alt: `BẢN pop-up event — ${name}`,
}));

function EventGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div
      className="project-section"
      style={
        {
          "--swiper-navigation-color": "var(--color-primary)",
          "--swiper-theme-color": "var(--color-primary)",
        } as React.CSSProperties
      }
    >
      <p className="section-label">— The Events</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >On the ground.</motion.h2>
      <div className="section-body">
        {/* Main viewer */}
        <p>
          We organized a series of offline pop-up events to test the brand and
          connect directly with our audience. Our first activations took place
          at The Tree Restaurant and Lotte Mall’s Spooky Festival, where we
          introduced BẢN in a more interactive, in-person setting.
        </p>

        <p>
          The Spooky Festival became an unexpected turning point, one customer
          resonated with our mission and invited us to join International Day at
          Westlink International School. There, we had the opportunity to share
          the story of Vietnamese brocade and its cultural significance with
          students and families from over 20 countries.
        </p>

        <p>
          Through this connection, we also began a collaboration with Unicorn
          Charity, committing a portion of our profits to support children in
          remote areas. We later continued our outreach at NEU’s Innovation
          Fair, expanding our reach within a student and entrepreneurial
          community.
        </p>
        <p>
          These experiences went beyond sales, they allowed us to understand how
          people engage with the brand, build meaningful relationships, and
          shape BẢN into something more grounded and impactful.
        </p>

        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          navigation
          spaceBetween={12}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden mb-3"
        >
          {eventImages.map((img) => (
            <SwiperSlide key={img.src}>
              {/* 3:2 aspect-ratio box; portrait images get side padding so full height is visible */}
              <div className="relative w-full aspect-[3/2] flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full max-h-full w-auto h-full object-contain px-[5%]"
                  loading="lazy"
                />
              </div>
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
        <p className="gallery-caption">photographs — bản events</p>
      </div>
    </div>
  );
}

export default function FeaturedProjectPage() {
  return (
    <main className="page-main">
      {/* Header Image */}
      <section className="w-full">
        <picture>
          <source type="image/avif" media="(min-width: 1024px)" srcSet={`${base}assets/bản/laptopview.avif`} />
          <source type="image/avif" media="(min-width: 768px)" srcSet={`${base}assets/bản/tablet%20view.avif`} />
          <img 
            src={`${base}assets/bản/phoneview.avif`} 
            alt="BẢN Project Header" 
            className="w-full h-auto block"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
      </section>

      {/* Hero */}
      <section className="project-section mt-6 mb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 max-w-5xl mx-auto items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
        >
          <p className="font-sans text-base md:text-xl text-subtitle leading-relaxed text-left m-0">
            A social enterprise preserving Vietnam's ethnic minority heritage
            through handcrafted brocade, and the story of how a question became
            a brand.
          </p>
          <motion.div 
            className="flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
          >
            <span className="font-sans font-medium text-sm md:text-base text-subtitle/80 text-left">View more about the project:</span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/unbox.ban"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/unbox.ban/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary hover:opacity-70 transition-opacity duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.149 2.163 8.415 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Origin */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— The Origin</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >It started with a question...</motion.h2>
        <div className="section-body">
          <p>
            BẢN began as a question: how can traditional craftsmanship exist
            meaningfully in a modern market?
          </p>
          <p>
            While learning more about Vietnam's ethnic textile traditions, I
            became drawn to the stories woven into brocade fabrics—patterns that
            carry cultural identity, history, and community memory. Each piece
            of cloth, I realized, was a form of language. A record of a people,
            stitched by hand over generations in the mountainous regions of
            Vietnam, by ethnic minority communities whose voices rarely reached
            the world beyond their villages.
          </p>
          <p>
            Yet many of these crafts struggle to reach modern audiences. Mass
            production, changing tastes, and fading intergenerational knowledge
            have pushed these traditions toward disappearance. I wanted to
            understand whether thoughtful branding and storytelling could help
            bridge that gap—presenting traditional craftsmanship in a way that
            feels relevant and alive, while still honoring its origins with full
            integrity.
          </p>
          <p>
            So together with a group of passionate young entrepreneurs, we built
            BẢN—a brand rooted in a mission to preserve and promote the ethnic
            heritage of Vietnam's mountainous regions, while creating
            sustainable economic opportunities for the artisan communities who
            keep these traditions alive.
          </p>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[700px] sm:min-h-[600px] md:min-h-[400px]">
        <motion.img
          src={`${base}assets/stuffy3.avif`}
          alt=""
          aria-hidden="true"
          className="absolute left-0 bottom-0 w-[170px] sm:w-[200px] md:w-[220px] lg:w-[260px] object-contain pointer-events-none select-none"
          initial={{ opacity: 0, x: -60, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        />
        <motion.img
          src={`${base}assets/stuffy2.avif`}
          alt=""
          aria-hidden="true"
          className="absolute top-12 md:top-0 right-0 w-[160px] md:w-[200px] lg:w-[260px] object-contain pointer-events-none select-none"
          initial={{ opacity: 0, x: 60, rotate: 8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={`${base}assets/stuffy1.avif`}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-4 w-[120px] md:w-[130px] lg:w-[150px] object-contain pointer-events-none select-none"
          initial={{ opacity: 0, y: 40, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          viewport={{ once: true }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-16 md:px-40 lg:px-32 xl:px-8 md:pb-0">
          <motion.p
            className="font-sans font-semibold text-lg md:text-2xl text-tertiary mb-10 md:mb-16 tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            on the meaning behind
          </motion.p>
          <motion.blockquote
            className="font-display text-2xl md:text-3xl xl:text-4xl italic font-semibold text-tertiary leading-snug"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            viewport={{ once: true }}
          >
            "The patterns in brocade are not decoration. They are identity—a
            visual record of who a community is, where they come from, and what
            they believe."
          </motion.blockquote>
        </div>
      </section>

      {/* The Name & Symbol */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— The Name & The Symbol</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >What BẢN means?</motion.h2>
        <div className="space-y-4">
          {symbolCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="project-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h3 className="project-card-title">{card.title}</h3>
              <p className="project-card-body">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Product */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— The Product</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >Craft, made for today.</motion.h2>
        <div className="section-body">
          <p>
            BẢN's product line is built around handcrafted brocade objects —
            each one a collaboration between traditional artisanship and
            contemporary design. Plush toys, wallets, scarves, and keychains,
            all made from authentic brocade fabric woven by ethnic minority
            artisans. Every piece is functional, beautiful, and carries the
            story of the hands that made it.
          </p>
          <p>
            We designed the products to live in the gifting market — where
            meaning matters as much as aesthetics. When someone gives a BẢN
            product, they are giving a piece of cultural history wrapped in the
            work of a real artisan, paid fairly for their craft.
          </p>
        </div>
        <ProductGallery />
      </section>

      {/* My Role */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— My Role</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >What I actually built.</motion.h2>
        <div className="section-body">
          <p>
            As co-founder and operations lead, I was responsible for the parts
            of BẢN that most people never see — the infrastructure that makes a
            brand actually function. Vendor sourcing, production planning,
            supplier negotiations, inventory, order fulfillment. I built
            relationships with more than ten artisan suppliers, aligning on
            pricing, timelines, and quality standards in a context where trust
            and cultural respect mattered as much as contracts.
          </p>
          <p>
            I also shaped how BẢN told its story. I developed brand narratives
            and press-style content, planned and executed our sales events, and
            managed the customer relationships that turned first-time buyers
            into people who understood — and cared about — what BẢN stood for.
          </p>
          <p>
            Within two months of our first event, we had engaged over 500
            customers and grown event revenue by 30%. But the number I'm
            proudest of is harder to measure: the number of people who left one
            of our events knowing the name of the craft, the community behind
            it, and why it matters.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— Core Values</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >What we stand for.</motion.h2>
        <div className="space-y-4">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              className="project-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h3 className="project-card-title">{v.title}</h3>
              <p className="project-card-body">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <EventGallery />

      {/* Results & Impact */}
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— Results & Impact</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >Early traction, real numbers.</motion.h2>
        <div className="section-body mb-8">
          <p>
            Within the first two months of launch, BẢN achieved strong early
            traction through a combination of community storytelling, in-person
            sales events, and organic digital marketing, with no paid
            advertising.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              className="project-card flex flex-col items-center justify-center text-center p-6 min-h-[160px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">
                {stat.stat}
              </span>
              <span className="text-sm sm:text-base text-subtitle leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {impactDetails.map((detail, i) => (
            <motion.div
              key={detail.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h3 className="project-card-title">{detail.title}</h3>
              <div className="project-card-body text-subtitle">
                {detail.body}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insight screenshots */}
        <div className="mt-8">
          <ColumnsPhotoAlbum
            photos={insightPhotos}
            columns={(w) => (w < 640 ? 1 : 2)}
            spacing={8}
          />
        </div>
        <p className="gallery-caption">data — bản analytics</p>
      </section>
      <section className="project-section">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >— What I Learned</motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true }}
        >How it shaped me.</motion.h2>
        <div className="section-body mb-12">
          <p>
            BẢN taught me that building something meaningful is harder — and
            more rewarding — than building something profitable. That the best
            brands don't just sell products; they give people a way to
            participate in something larger than themselves. That operations and
            storytelling are not opposites; they are the same act of care,
            expressed in different forms.
          </p>
        </div>
        <div className="space-y-4">
          {lessons.map((l, i) => (
            <motion.div
              key={l.num}
              className="project-card flex-row gap-6 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.span
                className="font-display text-4xl font-bold text-primary shrink-0"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                viewport={{ once: true }}
              >
                {l.num}
              </motion.span>
              <div>
                <h3 className="project-card-title">{l.title}</h3>
                <p className="project-card-body">{l.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="project-section flex flex-col items-center text-center">
        <motion.div
          className="w-12 h-px bg-primary mb-10"
          style={{ originX: 0.5 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.blockquote
          className="font-display text-2xl md:text-3xl lg:text-4xl italic font-semibold text-tertiary leading-snug max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          viewport={{ once: true }}
        >
          "I went in thinking I was building a brand. I came out understanding
          that I was learning how to listen — to artisans, to customers, to the
          story the material itself wanted to tell."
        </motion.blockquote>
        <motion.div
          className="w-12 h-px bg-primary mt-10"
          style={{ originX: 0.5 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </section>
    </main>
  );
}
