import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { openInstagramDm } from "../utils/instagramDm";
import na1 from "../assets/notanartist/na1.jpeg";
import na2 from "../assets/notanartist/na2.jpeg";
import na3 from "../assets/notanartist/na3.jpeg";
import na4 from "../assets/notanartist/na4.jpeg";
import na5 from "../assets/notanartist/na5.jpeg";
import na6 from "../assets/notanartist/na6.jpeg";
import na7 from "../assets/notanartist/na7.jpeg";
import na8 from "../assets/notanartist/na8.jpeg";
import na9 from "../assets/notanartist/na9.jpeg";
import na10 from "../assets/notanartist/na10.jpeg";
import na11 from "../assets/notanartist/na11.jpeg";
import na12 from "../assets/notanartist/na12.jpeg";
import na13 from "../assets/notanartist/na13.jpeg";
import na14 from "../assets/notanartist/na14.jpeg";
import na15 from "../assets/notanartist/na15.jpeg";
import na16 from "../assets/notanartist/na16.jpeg";
import na17 from "../assets/notanartist/na17.jpeg";
import na18 from "../assets/notanartist/na18.jpeg";
import na19 from "../assets/notanartist/na19.jpeg";
import na20 from "../assets/notanartist/na20.jpeg";
import na21 from "../assets/notanartist/na21.jpeg";
import na22 from "../assets/notanartist/na22.jpeg";
import na23 from "../assets/notanartist/na23.jpeg";
import na24 from "../assets/notanartist/na24.jpeg";
import nfs1 from "../assets/notforsale/nfs1.jpeg";
import nfs2 from "../assets/notforsale/nfs2.jpeg";
import nfs3 from "../assets/notforsale/nfs3.jpeg";
import nfs4 from "../assets/notforsale/nfs4.jpeg";
import nfs5 from "../assets/notforsale/nfs5.jpeg";
import nfs6 from "../assets/notforsale/nfs6.jpeg";
import nfs7 from "../assets/notforsale/nfs7.jpeg";
import nfs8 from "../assets/notforsale/nfs8.jpeg";
import nfs9 from "../assets/notforsale/nfs9.jpeg";
import nfs10 from "../assets/notforsale/nfs10.jpeg";

const wallImageModules = import.meta.glob(
  "../assets/thewall/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

const wallProjects = Object.entries(wallImageModules)
  .sort(([pathA], [pathB]) => {
    const getSortKey = (path) => {
      const fileName = path.split("/").pop() || "";
      const match = fileName.match(/^(\d+)/);
      return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
    };

    return getSortKey(pathA) - getSortKey(pathB);
  })
  .map(([path, image], index) => ({
    id: index + 1,
    image,
    path,
    title: `THE WALL ${String(index + 1).padStart(2, "0")}`,
    category: "THE WALL",
    showMeta: false,
  }));

const notAnArtistProjects = [
  { id: 1, image: na1, title: "001", category: "NOT AN ARTIST", price: "$75" },
  { id: 2, image: na2, title: "002", category: "NOT AN ARTIST", price: "$75" },
  { id: 3, image: na3, title: "003", category: "NOT AN ARTIST", price: "$75" },
  { id: 4, image: na4, title: "004", category: "NOT AN ARTIST", price: "$75" },
  { id: 5, image: na5, title: "005", category: "NOT AN ARTIST", price: "$75" },
  { id: 6, image: na6, title: "006", category: "NOT AN ARTIST", price: "$75" },
  { id: 7, image: na7, title: "007", category: "NOT AN ARTIST", price: "$75" },
  { id: 8, image: na8, title: "008", category: "NOT AN ARTIST", price: "$75" },
  { id: 9, image: na9, title: "009", category: "NOT AN ARTIST", price: "$75" },
  { id: 10, image: na10, title: "010", category: "NOT AN ARTIST", price: "$100" },
  { id: 11, image: na11, title: "011", category: "NOT AN ARTIST", price: "$100" },
  { id: 12, image: na12, title: "012", category: "NOT AN ARTIST", price: "$75" },
  { id: 13, image: na13, title: "013", category: "NOT AN ARTIST", price: "$100" },
  { id: 14, image: na14, title: "014", category: "NOT AN ARTIST", price: "$100" },
  { id: 15, image: na15, title: "015", category: "NOT AN ARTIST", price: "$100" },
  { id: 16, image: na16, title: "016", category: "NOT AN ARTIST", price: "$75" },
  { id: 17, image: na17, title: "017", category: "NOT AN ARTIST", price: "$75" },
  { id: 18, image: na18, title: "018", category: "NOT AN ARTIST", price: "$100" },
  { id: 19, image: na19, title: "019", category: "NOT AN ARTIST", price: "$100" },
  { id: 20, image: na20, title: "020", category: "NOT AN ARTIST", price: "$100" },
  { id: 21, image: na21, title: "021", category: "NOT AN ARTIST", price: "$75" },
  { id: 22, image: na22, title: "022", category: "NOT AN ARTIST", price: "$85" },
  { id: 23, image: na23, title: "023", category: "NOT AN ARTIST", price: "$120" },
  { id: 24, image: na24, title: "024", category: "NOT AN ARTIST", price: "$75" },
];

const notForSaleProjects = [
  { id: 1, image: nfs1, title: "001", category: "NOT FOR SALE", price: "$800" },
  { id: 2, image: nfs2, title: "002", category: "NOT FOR SALE", price: "$800" },
  { id: 3, image: nfs3, title: "003", category: "NOT FOR SALE", price: "$800" },
  { id: 4, image: nfs4, title: "004", category: "NOT FOR SALE", price: "$1500" },
  { id: 5, image: nfs5, title: "005", category: "NOT FOR SALE", price: "$800" },
  { id: 6, image: nfs6, title: "006", category: "NOT FOR SALE", price: "$800" },
  { id: 7, image: nfs7, title: "007", category: "NOT FOR SALE", price: "$1200" },
  { id: 8, image: nfs8, title: "008", category: "NOT FOR SALE", price: "$1200" },
  { id: 9, image: nfs9, title: "009", category: "NOT FOR SALE", price: "$1000" },
  { id: 10, image: nfs10, title: "010", category: "NOT FOR SALE", price: "$800" },
];

const allProjects = [...notAnArtistProjects, ...notForSaleProjects];

function BuyButton({ project }) {
  return (
    <button
      type="button"
      onClick={() => openInstagramDm(project)}
      className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-white text-black font-semibold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-200 active:bg-gray-300 transition-colors shadow-lg focus:outline-none"
    >
      i want this piece
    </button>
  );
}

function WallGalleryItem({ project, onOpenModal }) {
  return (
    <motion.button
      type="button"
      layout
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onOpenModal(project)}
      className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 break-inside-avoid focus:outline-none focus:ring-2 focus:ring-white/40"
      aria-label="Open THE WALL image"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </motion.button>
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
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">
                {project.title}
              </h2>
              <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400">
                {project.price}
              </p>
            </div>
            <BuyButton project={project} />
          </div>

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

        {project.showMeta !== false && (
          <div className="mt-4 md:mt-6 text-center space-y-1 px-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-400">
              {project.price}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("NOT AN ARTIST");
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("feed");
  const [wallOffset, setWallOffset] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("not-for-sale")) {
        setActiveCategory("NOT FOR SALE");
      } else if (hash.includes("not-an-artist")) {
        setActiveCategory("NOT AN ARTIST");
      } else if (hash.includes("the-wall")) {
        setActiveCategory("THE WALL");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (activeCategory !== "THE WALL" || wallProjects.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setWallOffset((currentOffset) => (currentOffset + 1) % wallProjects.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [activeCategory]);

  const filteredProjects = allProjects.filter(
    (item) => item.category === activeCategory
  );

  const wallDisplayProjects =
    wallProjects.length > 0
      ? [...wallProjects.slice(wallOffset), ...wallProjects.slice(0, wallOffset)]
      : [];

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

          <button
            onClick={() => {
              setActiveCategory("THE WALL");
              window.location.hash = "the-wall";
            }}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${
              activeCategory === "THE WALL"
                ? "bg-[var(--color-text)] text-[var(--color-bg)] shadow-md"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            THE WALL
          </button>
        </div>

        {activeCategory !== "THE WALL" && (
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
        )}
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="sticky top-14 md:top-20 h-10 md:h-[calc(100vh-80px)] w-full md:w-24 lg:w-28 flex items-center justify-center border-b md:border-b-0 md:border-r theme-border bg-[var(--color-bg)] z-30 shrink-0">
          <h2 className="md:[writing-mode:vertical-rl] md:[text-orientation:upright] theme-text uppercase tracking-[0.3em] font-bold text-xs md:text-lg">
            {activeCategory}
          </h2>
        </div>

        <div className="flex-1 w-full">
          {activeCategory === "THE WALL" ? (
            <div className="p-4 sm:p-6 md:p-8">
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5 space-y-4 md:space-y-5">
                {wallDisplayProjects.map((project) => (
                  <WallGalleryItem
                    key={project.path}
                    project={project}
                    onOpenModal={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          ) : viewMode === "feed" ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 sm:p-6">
                {filteredProjects.map((project) => (
                  <ParallaxProjectItem
                    key={`${project.category}-${project.id}`}
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
                All Pictures - {activeCategory}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={`${project.category}-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="group relative aspect-square bg-neutral-900 rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-white/40 transition-colors p-2 flex items-center justify-center"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                      <h4 className="text-white font-bold text-base">
                        {project.title}
                      </h4>
                      <p className="text-neutral-300 text-xs uppercase tracking-[0.2em] mt-1">
                        {project.price}
                      </p>
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
