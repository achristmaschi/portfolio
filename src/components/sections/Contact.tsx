export default function Contact() {
  return (
    <footer
      id="playground"
      className="px-6 md:px-10 lg:px-14 py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Connection heading */}
        <h5 className="text-xl md:text-2xl font-medium text-[#3a302b] mb-6 md:mb-8">
          ​let's stay connected!
        </h5>

        {/* Social links */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
          <a
            href="https://www.instagram.com/achristmaschi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-[1.5px] border-primary rounded-full
                       px-5 py-1.5 md:px-6 md:py-2 text-sm md:text-base text-primary font-medium
                       transition-colors duration-200 hover:bg-primary hover:text-bg"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/chitgtran/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-[1.5px] border-primary rounded-full
                       px-5 py-1.5 md:px-6 md:py-2 text-sm md:text-base text-primary font-medium
                       transition-colors duration-200 hover:bg-primary hover:text-bg"
          >
            LinkedIn
          </a>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-primary/15 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#7a6f68]">
          <p>Proudly designed by Chi Tran</p>
          <p>© 2026 by Chi Tran</p>
        </div>
      </div>
    </footer>
  );
}
