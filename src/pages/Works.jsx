import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// Sample image imports
import not1 from "../assets/heroart/DSC_0508.JPG";
import not2 from "../assets/heroart/DSC_0516.JPG";
import not3 from "../assets/heroart/DSC_0528.JPG";
import not4 from "../assets/heroart/DSC_0548.JPG";

const INSTAGRAM_URL = "https://www.instagram.com/cashflowsteadysniping?igsh=MTg1b2R2bmR6ZTYwcw==";
const WHATSAPP_URL = "https://wa.me/1234567890?text=Hi!%20I'm%20interested%20in%20buying%20an%20art%20piece.";

// All projects array with categories attached
const allProjects = [
  // --- NOT AN ARTIST CATEGORY ---
  {
    id: 1,
    image: not1,
    title: "THE FACE",
    subtitle: "Exploring the depths of human expressions.",
    category: "NOT AN ARTIST",
  },
  {
    id: 2,
    image: not2,
    title: "THE WALL",
    subtitle: "A study in contrasts and connections.",
    category: "NOT AN ARTIST",
  },
  {
    id: 3,
    image: not3,
    title: "THE EYES",
    subtitle: "Capturing the essence of human emotion.",
    category: "NOT AN ARTIST",
  },
  {
    id: 4,
    image: not4,
    title: "THE ART",
    subtitle: "Exploring the boundaries of creative expression.",
    category: "NOT AN ARTIST",
  },

  // --- NOT FOR SALE CATEGORY ---
  {
    id: 5,
    image: not1,
    title: "UNPUBLISHED SHADOWS",
    subtitle: "Archival personal collection piece 01.",
    category: "NOT FOR SALE",
  },
  {
    id: 6,
    image: not2,
    title: "SILENT MOMENTS",
    subtitle: "Private series — not available for acquisition.",
    category: "NOT FOR SALE",
  },
];

function BuyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-white text-black font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-200 active:bg-gray-300 transition-colors shadow-lg focus:outline-none"
      >
        Buy Piece
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 sm:right-auto sm:left-0 mt-2 w-48 bg-neutral-900 border border-white/20 rounded-xl shadow-2xl overflow-hidden z-40 backdrop-blur-md"
          >
            <div className="p-2 space-y-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-2.5 text-xs text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-pink-500 shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Contact on IG</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-2.5 text-xs text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-green-500 shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ParallaxProjectItem({ project, onOpenModal }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-[80vh] md:min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-12 md:py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          onClick={() => onOpenModal(project)}
          className="relative h-70 sm:h-95 md:h-125 w-full overflow-hidden rounded-lg cursor-pointer group"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{ y }}
            className="absolute inset-0 w-full h-[125%] object-cover top-[-12.5%] transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="text-white text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium border border-white/40 px-4 py-2.5 md:px-5 md:py-3 rounded-full backdrop-blur-md text-center">
              View Fullscreen
            </span>
          </div>
        </div>

        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          <div className="flex flex-row items-center justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white tracking-wide">
              {project.title}
            </h2>
            {project.category !== "NOT FOR SALE" && <BuyButton />}
          </div>

          <p className="text-base sm:text-xl md:text-3xl text-gray-200 font-light">
            {project.subtitle}
          </p>

          <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-gray-400 underline text-xs md:text-sm">
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-6 md:p-12 cursor-zoom-out overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors z-10 bg-black/40 px-3 py-1.5 rounded-full border border-white/10"
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
          className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />

        <div className="mt-4 md:mt-6 text-center space-y-3 md:space-y-4 px-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {project.category !== "NOT FOR SALE" && <BuyButton />}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("NOT AN ARTIST");
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("feed"); // 'feed' (parallax scroll) or 'grid' (see all images)

  // Listen for URL hash changes (e.g. site.com/#not-for-sale)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("not-for-sale")) {
        setActiveCategory("NOT FOR SALE");
      } else if (hash.includes("not-an-artist")) {
        setActiveCategory("NOT AN ARTIST");
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filteredProjects = allProjects.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="relative bg-black text-white min-h-screen select-none">
      {/* CATEGORY TOGGLE BAR */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-3 py-3 sm:px-8 flex flex-row items-center justify-between gap-2">
        {/* Category Toggles */}
        <div className="flex items-center space-x-1 sm:space-x-2 bg-neutral-900 p-1 sm:p-1.5 rounded-full border border-white/10 shrink-0">
          <button
            onClick={() => {
              setActiveCategory("NOT AN ARTIST");
              window.location.hash = "not-an-artist";
            }}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${
              activeCategory === "NOT AN ARTIST"
                ? "bg-white text-black shadow-md"
                : "text-gray-400 hover:text-white"
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
                ? "bg-white text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            NOT FOR SALE
          </button>
        </div>

        {/* View All / Feed Switcher */}
        <button
          onClick={() => setViewMode(viewMode === "feed" ? "grid" : "feed")}
          className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] border border-white/20 p-2 sm:px-4 sm:py-2 rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center shrink-0"
          title={viewMode === "feed" ? "Switch to Grid View" : "Switch to Parallax Feed"}
        >
          {/* Icon view on small/mobile screens */}
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
        {/* SIDEBAR TITLE */}
        <div className="sticky top-14 md:top-20 h-10 md:h-[calc(100vh-80px)] w-full md:w-24 lg:w-28 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-black z-30 shrink-0">
          <h2 className="md:[writing-mode:vertical-rl] md:[text-orientation:upright] text-white uppercase tracking-[0.3em] font-bold text-xs md:text-lg">
            {activeCategory}
          </h2>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="flex-1 w-full">
          {viewMode === "feed" ? (
            /* FEED VIEW: Full Parallax list */
            <div>
              {filteredProjects.map((project) => (
                <ParallaxProjectItem
                  key={project.id}
                  project={project}
                  onOpenModal={setSelectedProject}
                />
              ))}

              {/* SEE ALL IMAGES BUTTON */}
              <div className="py-16 md:py-24 text-center border-t border-white/10 px-4">
                <button
                  onClick={() => setViewMode("grid")}
                  className="inline-flex items-center space-x-3 text-white border border-white/30 hover:border-white px-6 py-3.5 md:px-8 md:py-4 rounded-full uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm transition-all duration-300 hover:bg-white hover:text-black group active:scale-95"
                >
                  <span>See More Pictures From Here</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    &gt;
                  </span>
                </button>
              </div>
            </div>
          ) : (
            /* GRID VIEW: See All Images */
            <div className="p-6 md:p-12">
              <h3 className="text-xl md:text-2xl uppercase tracking-[0.2em] mb-8 text-neutral-400">
                All Pictures — {activeCategory}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative aspect-square bg-neutral-900 rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-white/40 transition-colors"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
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

      {/* FULLSCREEN MODAL */}
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