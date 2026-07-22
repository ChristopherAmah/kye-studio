import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`bg-[#f6f4ef] text-black overflow-hidden px-5 sm:px-6 md:px-10 lg:px-14 py-10 md:py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Huge Title */}
      <h1
        ref={titleRef}
        className="
          mb-10
          text-transparent
          uppercase
          font-black
          leading-none
          tracking-tight
          break-words
          text-[3.2rem]
          sm:text-[5rem]
          md:text-[8rem]
          lg:text-[11rem]
          xl:text-[13rem]
        "
        style={{
          WebkitTextStroke: "2px #111",
        }}
      >
        KYE STUDIO
      </h1>

      {/* Spacer */}
      <div className="h-14 sm:h-20 md:h-32" />

      {/* Tagline */}
      <a
        href="#contact"
        className="
          inline-block
          max-w-5xl
          text-xl
          sm:text-2xl
          md:text-4xl
          lg:text-5xl
          leading-snug
          underline
          underline-offset-8
          hover:opacity-70
          transition
        "
      >
        Building digital experiences people remember.
      </a>

      {/* Divider */}
      <div className="border-t border-black mt-12 md:mt-16 mb-10 md:mb-14" />

      {/* Projects & Contact */}
      <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-20">

        {/* Projects */}
        <div>
          <h3 className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.25em] md:tracking-[0.35em] text-neutral-500 mb-5 md:mb-8">
            Projects
          </h3>

          <div className="space-y-4 md:space-y-6">
            <a
              href="#"
              className="flex items-center gap-3 md:gap-6 group"
            >
              <span className="text-neutral-400 text-xs sm:text-sm md:text-lg w-5 md:w-8">
                01
              </span>

              <span className="text-base sm:text-xl md:text-4xl font-light transition-transform duration-300 group-hover:translate-x-2">
                NOT AN ARTIST
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 md:gap-6 group"
            >
              <span className="text-neutral-400 text-xs sm:text-sm md:text-lg w-5 md:w-8">
                02
              </span>

              <span className="text-base sm:text-xl md:text-4xl font-light transition-transform duration-300 group-hover:translate-x-2">
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
            <a
              href="#"
              className="text-base sm:text-xl md:text-4xl font-light transition-transform duration-300 hover:translate-x-2"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-base sm:text-xl md:text-4xl font-light transition-transform duration-300 hover:translate-x-2"
            >
              X / Twitter
            </a>

            <a
              href="mailto:hello@kyestudio.com"
              className="text-base sm:text-xl md:text-4xl font-light transition-transform duration-300 hover:translate-x-2"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-black mt-16 md:mt-24 pt-6 flex flex-row sm:flex-row justify-between items-start sm:items-center gap-3 text-sm md:text-base tracking-wider text-neutral-500">
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