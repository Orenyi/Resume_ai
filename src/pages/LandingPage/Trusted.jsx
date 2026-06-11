import React from "react";
import { useTranslation } from "react-i18next";
import Google from "../../images/logo/Google_logo.svg";
import Meta from "../../images/logo/Meta_logo.svg";
import Amazon from "../../images/logo/Amazon_logo.svg";
import Airbnb from "../../images/logo/Airbnblogo.svg";
import Microsoft from "../../images/logo/Microsoft_logo.svg";
import Spotify from "../../images/logo/Spotify_logo.svg";
import Slack from "../../images/logo/Slack_logo.svg";
import Netflix from "../../images/logo/Netflix_logo.svg";
import LinkedIn from "../../images/logo/LinkedIn_logo.svg";
import Uber from "../../images/logo/Uber_logo.png";
import Figma from "../../images/logo/Figma_logo.svg";

const logos = [
  { name: "Google", src: Google },
  { name: "Meta", src: Meta },
  { name: "Amazon", src: Amazon },
  { name: "Airbnb", src: Airbnb },
  { name: "Microsoft", src: Microsoft },
  { name: "Spotify", src: Spotify },
  { name: "Slack", src: Slack },
  { name: "Netflix", src: Netflix },
  { name: "LinkedIn", src: LinkedIn },
  { name: "Uber", src: Uber },
  { name: "Figma", src: Figma },
];

const Trusted = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[260px] md:w-[400px] h-[260px] md:h-[400px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      {/* Center Gradient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[500px] md:w-[700px]
        h-[250px] md:h-[350px]
        bg-gradient-to-r from-[#1E3A8A] to-[#0D9488]
        opacity-[0.05]
        blur-[160px]
        rounded-full"
      />

      {/* TEXT CONTAINER */}
      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <h4 className="mb-14 uppercase tracking-[4px] text-[11px] md:text-[12px] font-semibold text-[var(--color-primary)] text-center">
          {t("trusted.label")}
        </h4>
      </div>

      {/* MARQUEE */}
      <div className="relative z-10 w-screen overflow-hidden">
        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-32 z-20 pointer-events-none bg-gradient-to-r from-[#f2f4f6] to-transparent" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-32 z-20 pointer-events-none bg-gradient-to-l from-[#f2f4f6] to-transparent" />

        {/* TRACK */}
        <div className="z-10 flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="group flex items-center justify-center px-14 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain select-none grayscale opacity-30 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
