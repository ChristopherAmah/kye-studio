import React, { useState, useEffect } from "react";

const BACKGROUND_IMAGES = Object.entries(
  import.meta.glob("../assets/heroart/*.JPG", {
    eager: true,
    import: "default",
    query: "?url",
  })
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, src]) => src);

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 3500); // Slower transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen h-[100dvh] overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        {BACKGROUND_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
      </div>

      {/* Hero Title */}
      <div className="absolute inset-0 z-20 flex items-start justify-center pt-6 sm:pt-8 md:pt-5 pointer-events-none select-none">
        <div className="glitch-container w-full">
          <h1
            className="
              glitch
              glass-text
              w-full
              text-center
              uppercase
              font-black
              leading-[0.78]
              tracking-[-0.06em]

              text-[24vw]
              sm:text-[20vw]
              md:text-[18vw]
              lg:text-[16vw]
              xl:text-[15vw]
            "
            data-text="KYE STUDIO"
          >
            KYE STUDIO
          </h1>
        </div>
      </div>
    </section>
  );
}
