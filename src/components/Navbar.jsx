import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BottomNavbar({ theme, onToggleTheme }) {
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
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-12 gap-4">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start min-w-0">
          <div
            className={`uppercase font-semibold tracking-tight transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
              showLogo
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8 pointer-events-none"
            }`}
          >
            UNMADE
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 text-xs sm:text-sm md:text-base lg:text-lg font-medium font-aeonik tracking-wide shrink-0">
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

        {/* Right: Theme Toggle */}
        <div className="flex-1 flex justify-end min-w-0">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center rounded-full border theme-border theme-surface px-3 py-2 text-[10px] sm:px-3 sm:py-2 sm:text-xs font-semibold uppercase tracking-[0.22em] theme-text shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shrink-0"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="hidden sm:inline-flex items-center gap-2">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
            <span className="sm:hidden text-sm leading-none" aria-hidden="true">
              {theme === "dark" ? "☀️" : "🌙"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}