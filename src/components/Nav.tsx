import { useState, useEffect } from "react";

const base = import.meta.env.BASE_URL;

const allLinks = [
  { label: "about",      href: `${base}about` },
  { label: "work",       href: `${base}work`  },
  { label: "playground", href: `${base}playground` },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-bg/90 backdrop-blur-sm border-b border-primary/20 transition-all duration-300
        px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-32
        ${scrolled ? "py-2 md:py-2.5" : "py-4 md:py-5"}`}
    >
      {/* Logo */}
      <a
        href={base}
        className={`text-primary tracking-wide underline decoration-[1.5px] underline-offset-4 font-medium transition-all duration-300
          ${scrolled ? "text-base md:text-lg" : "text-lg md:text-xl"}`}
        style={{ textDecorationColor: "var(--color-primary)" }}
      >
        achristmaschi
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-[5px] p-2"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="nav-mobile"
      >
        <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-3 lg:gap-4">
          {allLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`btn-pill
                  ${scrolled
                    ? "btn-pill-size-sm"
                    : "btn-pill-size-lg"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <nav
          id="nav-mobile"
          className="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-sm md:hidden border-t border-primary/10 shadow-lg"
        >
          <ul className="flex flex-col">
            {allLinks.map(({ label, href }) => (
              <li key={label} className="w-full">
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-5 text-lg italic text-primary font-medium tracking-wide border-b border-primary/10 transition-colors duration-200 hover:bg-primary/10"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
