import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowLogo(currentScrollY > window.innerHeight * 0.9);

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 h-16 md:h-[8dvh] theme-surface theme-text border-t theme-border transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
        showNavbar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="relative flex items-center h-full px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <div
          className={`absolute left-4 sm:left-6 md:left-12 uppercase font-semibold tracking-tight transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
            showLogo
              ? "hidden sm:block opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
        >
          UNMADE
        </div>

        {/* Navigation */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className={`flex items-center gap-5 sm:gap-8 md:gap-16 lg:gap-28
              text-xs sm:text-sm md:text-lg lg:text-xl
              font-medium font-aeonik tracking-wide
              transform-gpu transition-all duration-700
              ease-[cubic-bezier(.22,1,.36,1)]
              ${
                showLogo
                  ? "translate-x-0 md:translate-x-48 lg:translate-x-72"
                  : "translate-x-0"
              }`}
          >
            <Link to="/home" className="hover:opacity-60 transition">
              HOME
            </Link>

            <Link to="/works" className="hover:opacity-60 transition">
              WORKS
            </Link>

            <Link to="/about" className="hover:opacity-60 transition">
              ABOUT
            </Link>

            <a href="#footer" className="hover:opacity-60 transition">
              CONTACT
            </a>
          </div>
        </div>

        {/* Moon */}
        {/*
        <button className="absolute right-4 sm:right-6 md:right-12 transition-transform duration-300 hover:rotate-90">
          <Moon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" strokeWidth={1.8} />
        </button>
        */}
      </div>
    </nav>
  );
}
