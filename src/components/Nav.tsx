"use client";

import { useState } from "react";

const base = import.meta.env.BASE_URL;
const allLinks = ["about", "work", "playground"];

function navHref(link: string) {
  if (link === "work") return `${base}work`;
  if (link === "about") return `${base}about`;
  return `#${link}`;
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-32 py-3 md:py-4 flex items-center justify-between bg-bg/90 backdrop-blur-sm border-b border-primary/20">
      {/* Logo / name link */}
      <a
        href={base}
        className="text-primary tracking-wide text-lg md:text-xl underline decoration-[1.5px] underline-offset-4 font-medium"
        style={{ textDecorationColor: "var(--color-primary)" }}
      >
        achristmaschi
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-[5px] p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-3 lg:gap-4">
          {allLinks.map((link) => (
            <li key={link}>
              <a
                href={navHref(link)}
                className="
                  inline-flex items-center justify-center
                  border-[1.5px] border-primary rounded-full px-5 py-1.5 lg:px-7 lg:py-2
                  text-base lg:text-lg italic text-primary font-medium tracking-wide
                  transition-colors duration-200 hover:bg-primary hover:text-bg bg-transparent
                "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-sm md:hidden border-t border-primary/10 shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-8">
            {allLinks.map((link) => (
              <li key={link}>
                <a
                  href={navHref(link)}
                  onClick={() => setMenuOpen(false)}
                  className="
                    inline-flex items-center justify-center
                    border-[1.5px] border-primary rounded-full px-8 py-2
                    text-lg italic text-primary font-medium tracking-wide
                    transition-colors duration-200 hover:bg-primary hover:text-bg bg-transparent
                  "
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
