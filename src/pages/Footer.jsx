import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`bg-[#f6f4ef] text-black overflow-hidden px-5 sm:px-6 md:px-10 lg:px-14 pt-16 md:pt-24 pb-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    id="footer">
      {/* Tagline / Call to Action */}
      {/* <a
        href="#contact"
        className="inline-block max-w-5xl text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug underline underline-offset-8 hover:opacity-70 transition mb-12 md:mb-16"
      >
        Building digital experiences people remember.
      </a> */}

      {/* Huge Bottom Title */}
      <div ref={titleRef} className="w-full overflow-hidden leading-none pt-4 pb-4 md:pt-6 md:pb-6">
        <h1
          className="
            text-transparent
            uppercase
            font-black
            leading-none
            tracking-tight
            whitespace-nowrap
            text-[14vw]
            select-none
            pointer-events-none
          "
          style={{ WebkitTextStroke: "2px #111" }}
        >
          KYE STUDIO
        </h1>
      </div>


      {/* Projects & Contact Grid */}
      <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-20 pt-12 border-t border-black/20 md:pt-16">
        {/* Projects */}
        <div>
          <h3 className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.25em] md:tracking-[0.35em] text-neutral-500 mb-5 md:mb-8">
            Projects
          </h3>
          <div className="space-y-4 md:space-y-6">
            <a href="#not-an-artist" className="flex items-center gap-3 md:gap-6 group">
              <span className="text-neutral-400 text-xs sm:text-sm md:text-lg w-5 md:w-8">01</span>
              <span className="text-base sm:text-xl md:text-2xl font-light transition-transform duration-300 group-hover:translate-x-2">
                NOT AN ARTIST
              </span>
            </a>
            <a href="#not-for-sale" className="flex items-center gap-3 md:gap-6 group">
              <span className="text-neutral-400 text-xs sm:text-sm md:text-lg w-5 md:w-8">02</span>
              <span className="text-base sm:text-xl md:text-2xl font-light transition-transform duration-300 group-hover:translate-x-2">
                NOT FOR SALE
              </span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.25em] md:tracking-[0.35em] text-neutral-500 mb-5 md:mb-8">
            Contact
          </h3>
          <div className="flex flex-col gap-3 md:gap-5">
            <a href="https://www.instagram.com/cashflowsteadysniping?igsh=MTg1b2R2bmR6ZTYwcw==" className="text-base sm:text-xl md:text-2xl font-light transition-transform duration-300 hover:translate-x-2">
              Instagram
            </a>
            <a href="#" className="text-base sm:text-xl md:text-2xl font-light transition-transform duration-300 hover:translate-x-2">
              X / Twitter
            </a>
            <a href="mailto:hello@kyestudio.com" className="text-base sm:text-xl md:text-2xl font-light transition-transform duration-300 hover:translate-x-2">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Meta info bar */}
      <div className="border-t border-black/20 mt-16 md:mt-24 pt-6 flex flex-row justify-between items-center text-sm md:text-base tracking-wider text-neutral-500 mb-8">
        <span>© {new Date().getFullYear()} KYE STUDIO</span>
        <a
          href="https://christopheramahportfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-300"
        >
          Made by <span className="text-lg md:text-xl text-black">AMAH</span>
        </a>
      </div>

      
    </footer>
  );
}