import React from "react";
import { useTranslation } from "react-i18next";
import { TbTopologyStar3 } from "react-icons/tb";
import hero_img from "../../../images/hero_img.webp";
import contributors from "../../../images/contributors.webp";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:-mt-16 relative overflow-hidden bg-[#f8fafc]">
      {/* Blue Blur */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[#1E3A8A] opacity-30 blur-[120px] rounded-full"></div>

      {/* Teal Blur */}
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#0D9488] opacity-30 blur-[120px] rounded-full"></div>

      {/* Mixed Gradient Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] opacity-20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 mt-16 lg:mt-32 xl:mt-16 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-10">
          {/* hero left */}
          <div className="flex flex-col">
            {/* badge */}
            <div className="flex items-center gap-[8px] bg-[#b5d9cd] py-1 px-3 rounded-full text-[10px] md:text-[11px] lg:text-[12px] w-fit">
              <TbTopologyStar3 />
              <p className="font-light">About Resume AI</p>
            </div>

            {/* title */}
            <div>
              <h2 className="text-[35px] md:text-[48px] lg:[60px] font-semibold leading-snug">
                Helping Job Seekers Build Better Careers{" "}
                <span className="text-[var(--color-primary)]">with AI</span>
              </h2>
              <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-6">
                Resume AI combines intelligent resume building, ATS
                optimization, and AI-powered career tools to help professionals
                land more interviews and get hired faster.
              </p>
            </div>

            {/* buttons */}
            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
              <button className="text-[18px] bg-[var(--color-primary)] text-white py-3 px-6 rounded-lg hover:bg-[var(--color-secondary)] transition-colors duration-300">
                Get Started
              </button>
              <button className="text-[18px] bg-transparent text-black py-3 px-6 rounded-lg border border-black hover:bg-[var(--color-secondary)] hover:text-white hover:border-none transition-colors duration-300">
                Browse Templates
              </button>
            </div>

            {/* social proof */}
            <div className="flex items-center gap-x-4 mt-8">
              <img
                src={contributors}
                alt="small image of professionals"
                className="w-16 md:w-20"
              />
              <p className="text-[11px] md:text-[12px] font-light">
                <span className="text-[13px] md:text-[14px] font-bold">
                  {t("hero.socialCount")}
                </span>{" "}
                {t("hero.social")}
              </p>
            </div>
          </div>

          {/* hero right */}
          <div>
            <img
              src={hero_img}
              alt="An hero image of resume"
              className="w-full md:w-[600px] lg:w-[1200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
