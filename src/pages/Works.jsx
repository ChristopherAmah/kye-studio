import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// Sample image imports
import not1 from "../assets/na1.jpeg";
import not2 from "../assets/na2.jpeg";
import not3 from "../assets/na3.jpeg";
import not4 from "../assets/na4.jpeg";
import not5 from "../assets/na5.jpeg";
import not6 from "../assets/na6.jpeg";
import not7 from "../assets/na7.jpeg";
import nfs1 from "../assets/nfs1.jpeg";
import nfs2 from "../assets/nfs2.jpeg";
import nfs3 from "../assets/nfs3.jpeg";

const INSTAGRAM_URL = "https://www.instagram.com/cashflowsteadysniping?igsh=MTg1b2R2bmR6ZTYwcw==";

// Unique IDs 1 through 10
const allProjects = [
  // --- NOT AN ARTIST CATEGORY ---
  {
    id: 1,
    image: not1,
    title: "#001",
    subtitle: "Exploring the depths of human expressions.",
    category: "NOT AN ARTIST",
  },
  {
    id: 2,
    image: not2,
    title: "#002",
    subtitle: "A study in contrasts and connections.",
    category: "NOT AN ARTIST",
  },
  {
    id: 3,
    image: not3,
    title: "#003",
    subtitle: "Capturing the essence of human emotion.",
    category: "NOT AN ARTIST",
  },
  {
    id: 4,
    image: not4,
    title: "#004",
    subtitle: "Exploring the boundaries of creative expression.",
    category: "NOT AN ARTIST",
  },
  {
    id: 5,
    image: not5,
    title: "#005",
    subtitle: "Exploring the boundaries of creative expression.",
    category: "NOT AN ARTIST",
  },
  {
    id: 6,
    image: not6,
    title: "#006",
    subtitle: "Exploring the boundaries of creative expression.",
    category: "NOT AN ARTIST",
  },
  {
    id: 7,
    image: not7,
    title: "#007",
    subtitle: "Exploring the boundaries of creative expression.",
    category: "NOT AN ARTIST",
  },

  // --- NOT FOR SALE CATEGORY ---
  {
    id: 8,
    image: nfs1,
    title: "#008",
    subtitle: "Archival personal collection piece 01.",
    category: "NOT FOR SALE",
  },
  {
    id: 9,
    image: nfs2,
    title: "#009",
    subtitle: "Private series — available for acquisition.",
    category: "NOT FOR SALE",
  },
  {
    id: 10,
    image: nfs3,
    title: "#010",
    subtitle: "Private series — available for acquisition.",
    category: "NOT FOR SALE",
  },
];

function BuyButton() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-white text-black font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-200 active:bg-gray-300 transition-colors shadow-lg focus:outline-none"
    >
      Buy Piece
    </a>
  );
}

function ParallaxProjectItem({ project, onOpenModal }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={containerRef}
      className="flex items-center px-2 sm:px-4 md:px-6 py-6 md:py-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          onClick={() => onOpenModal(project)}
          className="relative w-full overflow-hidden rounded-lg cursor-pointer group bg-neutral-900 flex items-center justify-center"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{ y }}
            className="w-full max-h-[60vh] md:max-h-[70vh] object-contain transition-transform duration-500 group-hover:scale-102"
          />

          <div className="absolute inset-0 image-scrim opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="image-panel-text text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium border image-panel-border px-4 py-2.5 md:px-5 md:py-3 rounded-full backdrop-blur-md text-center">
              View Fullscreen
            </span>
          </div>
        </div>

        <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
          <div className="flex flex-row items-center justify-between gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">
              {project.title}
            </h2>
            <BuyButton />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light">
            {project.subtitle}
          </p>

          <p className="uppercase tracking-[0.2em] text-gray-400 underline text-xs">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center image-scrim backdrop-blur-lg p-4 sm:p-6 md:p-12 cursor-zoom-out overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 image-panel-close hover:opacity-100 uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors z-10 px-3 py-1.5 rounded-full border"
      >
        Close [ESC]
      </button>

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl w-full flex flex-col items-center justify-center cursor-default py-8"
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />

        <div className="mt-4 md:mt-6 text-center space-y-1 px-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-gray-400">
            {project.subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("NOT AN ARTIST");
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("feed");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("not-for-sale")) {
        setActiveCategory("NOT FOR SALE");
      } else if (hash.includes("not-an-artist")) {
        setActiveCategory("NOT AN ARTIST");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filteredProjects = allProjects.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="relative bg-black text-white min-h-screen select-none">
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-3 py-3 sm:px-8 flex flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-1 sm:space-x-2 bg-neutral-900 p-1 sm:p-1.5 rounded-full border border-white/10 shrink-0">
          <button
            onClick={() => {
              setActiveCategory("NOT AN ARTIST");
              window.location.hash = "not-an-artist";
            }}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${
              activeCategory === "NOT AN ARTIST"
                ? "bg-[var(--color-text)] text-[var(--color-bg)] shadow-md"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            NOT AN ARTIST
          </button>

          <button
            onClick={() => {
              setActiveCategory("NOT FOR SALE");
              window.location.hash = "not-for-sale";
            }}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${
              activeCategory === "NOT FOR SALE"
                ? "bg-[var(--color-text)] text-[var(--color-bg)] shadow-md"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            NOT FOR SALE
          </button>
        </div>

        <button
          onClick={() => setViewMode(viewMode === "feed" ? "grid" : "feed")}
          className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] border theme-border p-2 sm:px-4 sm:py-2 rounded-full theme-text hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors flex items-center justify-center shrink-0"
          title={viewMode === "feed" ? "Switch to Grid View" : "Switch to Parallax Feed"}
        >
          {viewMode === "feed" ? (
            <>
              <svg className="w-4 h-4 md:hidden" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
              </svg>
              <span className="hidden md:inline">View All Grid</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 md:hidden" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 5h16v3H4V5zm0 6h16v3H4v-3zm0 6h16v3H4v-3z"/>
              </svg>
              <span className="hidden md:inline">Switch to Parallax Feed</span>
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="sticky top-14 md:top-20 h-10 md:h-[calc(100vh-80px)] w-full md:w-24 lg:w-28 flex items-center justify-center border-b md:border-b-0 md:border-r theme-border bg-[var(--color-bg)] z-30 shrink-0">
          <h2 className="md:[writing-mode:vertical-rl] md:[text-orientation:upright] theme-text uppercase tracking-[0.3em] font-bold text-xs md:text-lg">
            {activeCategory}
          </h2>
        </div>

        <div className="flex-1 w-full">
          {viewMode === "feed" ? (
            <div>
              {/* Grid layout with 2 columns on medium+ screens for both categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 sm:p-6">
                {filteredProjects.map((project) => (
                  <ParallaxProjectItem
                    key={project.id}
                    project={project}
                    onOpenModal={setSelectedProject}
                  />
                ))}
              </div>

              <div className="py-16 md:py-24 text-center border-t border-white/10 px-4">
                <button
                  onClick={() => setViewMode("grid")}
                  className="inline-flex items-center space-x-3 theme-text border theme-border-strong hover:border-[var(--color-border-strong)] px-6 py-3.5 md:px-8 md:py-4 rounded-full uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm transition-all duration-300 hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)] group active:scale-95"
                >
                  <span>See More Pictures From Here</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    &gt;
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-12">
              <h3 className="text-xl md:text-2xl uppercase tracking-[0.2em] mb-8 text-neutral-400">
                All Pictures — {activeCategory}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative aspect-square bg-neutral-900 rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-white/40 transition-colors p-2 flex items-center justify-center"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                      <h4 className="text-white font-bold text-base">{project.title}</h4>
                      <p className="text-neutral-300 text-xs">{project.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ImageModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
