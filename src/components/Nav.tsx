"use client";

const navLinks = ["about", "work", "playground"];

export default function Nav() {
  return (
    <header className="w-full px-8 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      {/* Logo / name link */}
      <a
        href="/"
        className="text-primary tracking-wide text-xl underline decoration-2 underline-offset-4"
        style={{ textDecorationColor: 'var(--color-primary)' }}
      >
        achristmaschi
      </a>

      {/* Pill navigation links */}
      <nav>
        <ul className="flex flex-wrap justify-center md:items-center gap-3 sm:gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="
                  inline-flex items-center justify-center
                  border-[1.5px] border-primary rounded-[40px] px-6 py-1.5 sm:px-8 sm:py-2
                  text-lg sm:text-2xl italic text-primary font-medium tracking-wide
                  transition-colors duration-200 hover:bg-primary hover:text-bg bg-transparent
                "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
