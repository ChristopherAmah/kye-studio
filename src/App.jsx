import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MoonStar, SunMedium } from "lucide-react";
import "./App.css";

import Overview from "./pages/Overview";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Works from "./pages/Works";
import About from "./pages/About";

// Helper component that resets scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const THEME_STORAGE_KEY = "unmade-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(getInitialTheme);

  // Hide Navbar and Footer on the Overview page
  const showLayout = location.pathname !== "/";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Scroll helper placed inside the Router context */}
      <ScrollToTop />

      <button
        type="button"
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-[60] inline-flex items-center gap-2 rounded-full border theme-border theme-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] theme-text shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <>
            <SunMedium size={14} />
            Light
          </>
        ) : (
          <>
            <MoonStar size={14} />
            Dark
          </>
        )}
      </button>

      {showLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />

        {/* Show Overview for any unknown route */}
        <Route path="*" element={<Overview />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

export default App;
