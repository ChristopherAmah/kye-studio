import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F6] text-black flex flex-col px-5 sm:px-6 md:px-10 pt-8 md:pt-10 pb-8 md:pb-10 min-h-[70vh] md:min-h-screen">

      {/* Huge Title */}
      <div className="overflow-hidden">
        <h1
          className="
            uppercase
            font-black
            leading-none
            tracking-tighter
            text-[22vw]
            sm:text-[18vw]
            md:text-[15vw]
            lg:text-[13vw]
            text-transparent
            stroke-text
            whitespace-normal
            md:whitespace-nowrap
            wrap-break-word
            select-none
          "
        >
          UNMADES
        </h1>
      </div>

      {/* Space */}
      <div className="flex-1 py-10 md:py-16" />

      {/* Statement */}
      <a
        href="#"
        className="
          text-lg
          sm:text-2xl
          md:text-4xl
          underline
          underline-offset-4
          decoration-1
          w-fit
          mb-8
          md:mb-10
          leading-snug
        "
      >
        Building digital experiences people remember.
      </a>

      {/* Divider */}
      <div className="border-t border-black mb-8 md:mb-10" />

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Left */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 text-lg sm:text-2xl md:text-4xl">

          <div className="flex flex-col gap-3">
            <a href="#" className="underline">Projects</a>
            <a href="#" className="underline">Services</a>
            <a href="#" className="underline">Process</a>
            <a href="#" className="underline">Privacy</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="underline">Instagram</a>
            <a href="#" className="underline">LinkedIn</a>
            <a href="#" className="underline">Twitter</a>
            <a href="#" className="underline">Contact</a>
          </div>

        </div>

        {/* Newsletter */}
        <div className="w-full lg:flex lg:justify-end">

          <div className="w-full max-w-3xl">

            <form
              className="
                border
                border-black
                rounded-3xl
                md:rounded-full
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                gap-4
                px-5
                sm:px-6
                md:px-8
                py-5
              "
            >

              <input
                type="email"
                placeholder="Sign up for our newsletter"
                className="
                  bg-transparent
                  outline-none
                  w-full
                  flex-1
                  text-lg
                  sm:text-xl
                  md:text-3xl
                  placeholder:text-black
                "
              />

              <button
                type="submit"
                className="
                  uppercase
                  tracking-[0.25em]
                  underline
                  text-xs
                  sm:text-sm
                  md:text-base
                  whitespace-nowrap
                "
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>

    </footer>
  );
}