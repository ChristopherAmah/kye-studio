import React from "react";

export default function Footer() {
  return (
    <footer className="min-h-screen bg-[#F8F8F6] text-black flex flex-col px-5 md:px-10 pt-6 pb-10">

      {/* Huge Title */}
      <div className="overflow-hidden">
        <h1
          className="
            uppercase
            font-black
            leading-none
            tracking-[-0.05em]
            text-[20vw]
            md:text-[15vw]
            lg:text-[13vw]
            text-transparent
            stroke-text
            whitespace-nowrap
            select-none
          "
        >
          KYE STUDIOS
        </h1>
      </div>

      {/* Empty Space */}
      <div className="flex-1" />

      {/* Statement */}
      <a
        href="#"
        className="
          text-2xl
          md:text-4xl
          underline
          underline-offset-4
          decoration-[1px]
          w-fit
          mb-10
        "
      >
        Building digital experiences people remember.
      </a>

      {/* Divider */}
      <div className="border-t border-black mb-10" />

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="grid grid-cols-2 gap-y-5 text-2xl md:text-4xl">

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
        <div className="flex justify-end">

          <div className="w-full max-w-3xl">

            <form className="border border-black rounded-full flex items-center justify-between px-8 py-5">

              <input
                type="email"
                placeholder="Sign up for our newsletter"
                className="
                  bg-transparent
                  outline-none
                  text-2xl
                  md:text-4xl
                  placeholder:text-black
                  flex-1
                "
              />

              <button
                type="submit"
                className="
                  uppercase
                  tracking-[0.3em]
                  underline
                  text-sm
                  md:text-lg
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