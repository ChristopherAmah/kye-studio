import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const shippingRates = [
    {
      region: "Canada",
      price: "$13.59 - $18.62",
      detail: "Regular Parcel, 0.5 kg. Price varies by destination zone.",
    },
    {
      region: "USA",
      price: "$21.54 - $23.81",
      detail: "Expedited Parcel, 0.5 kg. Rate varies by destination state.",
    },
    {
      region: "International",
      price: "$62.03 - $95.21",
      detail: "Xpresspost, 0.5 kg. Rate varies by destination country.",
    },
  ];

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
      className={`theme-surface theme-text overflow-hidden px-5 sm:px-6 md:px-10 lg:px-14 pt-16 md:pt-24 pb-6 transition-all duration-700 ${
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
          style={{ WebkitTextStroke: "2px var(--color-text)" }}
        >
          UNMADE
        </h1>
      </div>


      {/* Projects & Contact Grid */}
      <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-20 pt-12 border-t theme-border md:pt-16">
        {/* Projects */}
        <div>
          <h3 className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.25em] md:tracking-[0.35em] theme-muted mb-5 md:mb-8">
            Projects
          </h3>
          <div className="space-y-4 md:space-y-6">
            <a href="#not-an-artist" className="flex items-center gap-3 md:gap-6 group">
              <span className="theme-muted text-xs sm:text-sm md:text-lg w-5 md:w-8">01</span>
              <span className="text-base sm:text-xl md:text-2xl font-light transition-transform duration-300 group-hover:translate-x-2">
                NOT AN ARTIST
              </span>
            </a>
            <a href="#not-for-sale" className="flex items-center gap-3 md:gap-6 group">
              <span className="theme-muted text-xs sm:text-sm md:text-lg w-5 md:w-8">02</span>
              <span className="text-base sm:text-xl md:text-2xl font-light transition-transform duration-300 group-hover:translate-x-2">
                NOT FOR SALE
              </span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.25em] md:tracking-[0.35em] theme-muted mb-5 md:mb-8">
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

      {/* Shipping Rates */}
      <div className="mt-12 md:mt-16 border-t theme-border pt-10 md:pt-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <h3 className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.25em] md:tracking-[0.35em] theme-muted mb-4">
              Shipping Rates
            </h3>
            <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed">
              Current Canada Post consumer prices as of March 23, 2026.
              Exact shipping costs depend on package size, weight, destination,
              and service options.
            </p>
          </div>

          <a
            href="https://www.canadapost-postescanada.ca/cpc/en/support/kb/other-products-services/using-tools/how-to-use-find-a-rate.page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border theme-border px-5 py-3 text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors"
          >
            Open Canada Post Rate Tool
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {shippingRates.map((item) => (
            <div
              key={item.region}
              className="rounded-3xl border theme-border theme-surface-strong p-5 md:p-6 shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.3em] theme-muted mb-3">
                {item.region}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold theme-text mb-3">
                {item.price}
              </p>
              <p className="text-sm sm:text-base md:text-lg theme-muted leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs sm:text-sm theme-muted leading-relaxed">
          Official Canada Post guidance says the Find a Rate tool calculates
          shipping based on sender address, destination, mailing type, size, and
          weight.
        </p>
      </div>

      {/* Meta info bar */}
      <div className="border-t theme-border mt-16 md:mt-24 pt-6 flex flex-row justify-between items-center text-sm md:text-base tracking-wider theme-muted mb-8">
        <span>© {new Date().getFullYear()} UNMADE</span>
        <a
          href="https://christopheramahportfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-colors duration-300"
        >
          Made by <span className="text-lg md:text-xl theme-text">AMAH</span>
        </a>
      </div>

      
    </footer>
  );
}
