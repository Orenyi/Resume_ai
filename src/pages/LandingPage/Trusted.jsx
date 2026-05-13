import React from "react";
import Google from "../../images/logo/Google_logo.svg";
import Meta from "../../images/logo/Meta_logo.svg";
import Amazon from "../../images/logo/Amazon_logo.svg";
import Airbnb from "../../images/logo/Airbnb_logo.svg";
import Microsoft from "../../images/logo/Microsoft_logo.svg";
import Spotify from "../../images/logo/Spotify_logo.svg";
import Slack from "../../images/logo/Slack_logo.svg";
import Netflix from "../../images/logo/Netflix_logo.svg";
import LinkedIn from "../../images/logo/LinkedIn_logo.svg";
import Uber from "../../images/logo/Uber_logo.png";
import Figma from "../../images/logo/Figma_logo.svg";

const logos = [
  {
    name: "Google",
    src: Google,
  },
  {
    name: "Meta",
    src: Meta,
  },
  {
    name: "Amazon",
    src: Amazon,
  },
  {
    name: "Airbnb",
    src: Airbnb,
  },
  {
    name: "Microsoft",
    src: Microsoft,
  },
  {
    name: "Spotify",
    src: Spotify,
  },
  {
    name: "Slack",
    src: Slack,
  },
  {
    name: "Netflix",
    src: Netflix,
  },
  {
    name: "LinkedIn",
    src: LinkedIn,
  },
  {
    name: "Uber",
    src: Uber,
  },
  {
    name: "Figma",
    src: Figma,
  },
];

const Trusted = () => {
  return (
    <section className="bg-[#f2f4f6] py-16 lg:py-28 overflow-hidden">
      {/* TEXT CONTAINER ONLY */}
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <h4 className="text-center text-[14px] font-normal tracking-[0.25em] text-black uppercase mb-12">
          Trusted by employees at
        </h4>
      </div>

      {/* FULL WIDTH MARQUEE */}
      <div className="relative w-screen overflow-hidden">
        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-[#f2f4f6] to-transparent" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-[#f2f4f6] to-transparent" />

        {/* TRACK */}
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="group flex items-center justify-center px-14 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="
              h-8 
              w-auto
              object-contain
              select-none
              grayscale
              opacity-30
              transition-all
              duration-500
              group-hover:grayscale-0
              group-hover:opacity-100
              group-hover:cursor-pointer
            "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
