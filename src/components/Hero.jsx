import React, { useState, useEffect } from "react";

// A collection of 15 dark, cinematic, and architectural images
const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1436891620584-37651490b440?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1507508032649-15822f5a0248?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1600&q=80",
];

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
              w-full
              text-center
              uppercase
              text-[#EFE5D8]
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