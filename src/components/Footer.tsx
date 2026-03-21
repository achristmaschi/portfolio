const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer
      id="playground"
      className="bg-primary text-bg w-screen relative left-1/2 -translate-x-1/2 px-6 lg:px-18 pt-10 pb-6"
    >
      {/* Top — heading + contact info + socials, centered */}
      <div className="flex flex-col items-center text-center gap-4 mb-6">
        <h2 className="font-heading text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold leading-[0.95] tracking-tight">
          let's connect
        </h2>
        <ul className="space-y-2 text-sm text-bg/80">
          <li className="flex items-center justify-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-70">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <a href="mailto:chitg.tran@gmail.com" className="hover:opacity-70 transition-opacity">
              chitg.tran@gmail.com
            </a>
          </li>
          <li className="flex items-center justify-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-70">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3.07a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.1 6.1l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="tel:+13463170502" className="hover:opacity-70 transition-opacity">
              (346) 317-0502
            </a>
          </li>
        </ul>

        {/* Social links */}
        <div className="flex gap-5 pt-1">
          <a
            href="https://www.instagram.com/achristmaschi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-bg hover:opacity-70 transition-opacity duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.149 2.163 8.415 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/chitgtran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-bg hover:opacity-70 transition-opacity duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-bg/40 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-bg/80">
        <div className="flex items-center gap-3">
          <a
            href={`${base}assets/CHI%20TRAN%202026%20resume.pdf`}
            download="Chi_Tran_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-3 py-2 text-xs sm:text-sm border border-bg/40 rounded-lg hover:bg-bg/10 transition-colors duration-200 text-bg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            download résumé
          </a>
          <a
            href="mailto:chitg.tran@gmail.com"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-3 py-2 text-xs sm:text-sm bg-bg text-primary font-medium rounded-lg hover:bg-bg/90 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            send me a message
          </a>
        </div>
        <div className="flex items-center gap-4">
          <p>© 2026 - Proudly designed by Chi & Quan</p>
        </div>
      </div>
    </footer>
  );
}
