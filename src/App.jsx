import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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

      {showLayout && (
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
      )}

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
