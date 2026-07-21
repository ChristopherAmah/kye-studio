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
      className={`min-h-screen bg-[#f6f4ef] text-black px-6 md:px-12 py-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Huge Title */}
      <h1
        ref={titleRef}
        className="text-transparent uppercase font-black leading-none whitespace-nowrap tracking-tight
        text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem]"
        style={{
          WebkitTextStroke: "2px #111",
        }}
      >
        KYE STUDIO
      </h1>

      {/* Spacer */}
      <div className="h-28 md:h-40" />

      {/* Tagline */}
      <a
        href="#contact"
        className="inline-block text-3xl md:text-5xl underline underline-offset-8 hover:opacity-70 transition"
      >
        Building digital experiences people remember.
      </a>

      {/* Divider */}
      <div className="border-t border-black mt-16 mb-14" />

      {/* Bottom */}
      <div className="grid md:grid-cols-2 gap-20">

        {/* Projects */}
        <div>
          <h3 className="text-lg uppercase tracking-[0.35em] text-neutral-500 mb-8">
            Projects
          </h3>

          <div className="space-y-6">

            <a
              href="#"
              className="flex items-center gap-6 group"
            >
              <span className="text-neutral-400 text-lg w-8">01</span>

              <span className="text-3xl md:text-4xl font-light transition-transform duration-300 group-hover:translate-x-2">
                NOT AN ARTIST
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-6 group"
            >
              <span className="text-neutral-400 text-lg w-8">02</span>

              <span className="text-3xl md:text-4xl font-light transition-transform duration-300 group-hover:translate-x-2">
                NOT FOR SALE
              </span>
            </a>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg uppercase tracking-[0.35em] text-neutral-500 mb-8">
            Contact
          </h3>

          <div className="flex flex-col gap-5">

            <a
              href="#"
              className="text-3xl md:text-4xl font-light transition-transform duration-300 hover:translate-x-2"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-3xl md:text-4xl font-light transition-transform duration-300 hover:translate-x-2"
            >
              X / Twitter
            </a>

            <a
              href="mailto:hello@kyestudio.com"
              className="text-3xl md:text-4xl font-light transition-transform duration-300 hover:translate-x-2"
            >
              Email
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="border-t border-black mt-24 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-md tracking-wider text-neutral-500">

        <span>© {new Date().getFullYear()} KYE STUDIO</span>

        <a
          href="https://christopheramahportfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 md:mt-0 hover:text-black transition-colors duration-300"
        >
          Made by <span className="text-xl text-black">AMAH</span>
        </a>

      </div>
    </footer>
  );
}