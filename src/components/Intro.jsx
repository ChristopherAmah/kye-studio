import React from "react";

export default function IntroSection() {
  const categories = ["NOT AN ARTIST", "NOT FOR SALE"];

  return (
    <section
      className="
        bg-black
        text-white

        flex
        flex-col
        justify-between

        px-6
        py-16

        sm:px-8
        sm:py-20

        md:px-12
        md:py-24

        lg:min-h-screen
        lg:px-20
        lg:py-20

        xl:px-24
      "
    >
      {/* Main Content */}
      <div className="max-w-7xl">

        {/* Heading */}
        <h1
          className="
            max-w-6xl
            font-normal
            leading-[1.05]
            tracking-tight
            text-neutral-100

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          We're a global creative studio. From the thinking to the making,
          it all happens in-house.
        </h1>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-12 md:mt-20 lg:mt-24">
        <ul
          className="
            flex
            flex-wrap
            justify-center
            md:justify-start

            gap-x-6
            sm:gap-x-8
            md:gap-x-10

            gap-y-4

            uppercase
            font-mono
            tracking-[0.2em]

            text-[11px]
            sm:text-xs
            md:text-sm

            text-neutral-300
          "
        >
          {categories.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}