import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import not1 from "../assets/notanartist/na1.jpeg";
import not2 from "../assets/notanartist/na2.jpeg";
import not3 from "../assets/notanartist/na3.jpeg";
import not4 from "../assets/notanartist/na4.jpeg";
import not5 from "../assets/notanartist/na5.jpeg";
import not6 from "../assets/notanartist/na6.jpeg";
import not7 from "../assets/notanartist/na7.jpeg";

const INSTAGRAM_URL = "https://ig.me/m/cashflowsteadysniping";

const projects = [
  {
    image: not1,
    title: "001",
    category: "NOT AN ARTIST",
  },
  {
    image: not2,
    title: "002",
    category: "NOT AN ARTIST",
  },
  {
    image: not3,
    title: "003",
    category: "NOT AN ARTIST",
  },
  {
    image: not4,
    title: "004",
    category: "NOT AN ARTIST",
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

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] md:min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-12 md:py-20"
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

          <div className="absolute inset-0 image-scrim opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="image-panel-text text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium border image-panel-border px-4 py-2.5 md:px-5 md:py-3 rounded-full backdrop-blur-md text-center">
              View Fullscreen
            </span>
          </div>
        </div>

        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          <div className="flex flex-row items-center justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold theme-text tracking-wide">
              {project.title}
            </h2>
            <BuyButton />
          </div>

          <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] theme-muted underline text-xs md:text-sm">
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
          className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />

        <div className="mt-4 md:mt-6 text-center space-y-3 md:space-y-4 px-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold image-panel-text">
              {project.title}
            </h3>
          </div>

          <BuyButton />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative bg-black select-none" id="not-an-artist">
      <div className="flex flex-col md:flex-row">
        {/* MOBILE TOP BANNER / DESKTOP SIDEBAR */}
        <div className="sticky top-0 h-12 md:h-screen w-full md:w-24 lg:w-28 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-black z-30 shrink-0">
          <h2 className="md:[writing-mode:vertical-rl] md:[text-orientation:upright] theme-text uppercase tracking-[0.3em] font-bold text-xs md:text-lg">
            NOT AN ARTIST
          </h2>
        </div>

        {/* MAIN PROJECTS CONTENT AREA */}
        <div className="flex-1 w-full">
          {projects.map((project, index) => (
            <ParallaxProjectItem
              key={index}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}

          {/* MORE PICTURES BUTTON */}
          <div className="py-16 md:py-24 text-center border-t border-white/10 px-4">
            <a
              href="#gallery"
              className="inline-flex items-center space-x-3 theme-text border theme-border-strong hover:border-[var(--color-border-strong)] px-6 py-3.5 md:px-8 md:py-4 rounded-full uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm transition-all duration-300 hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)] group active:scale-95"
            >
              <Link to='/works'><span>See More Pictures</span></Link>
              <span className="transform group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </a>
          </div>
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
