import React from "react";
import { useTranslation } from "react-i18next";
import { TbTopologyStar3 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import hero_about_img from "../../../images/hero_about_img.webp";
import contributors from "../../../images/contributors.webp";

const AboutHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 lg:py-24 xl:py-28">
      {/* Blue Blur */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[#1E3A8A] opacity-30 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#0D9488] opacity-30 blur-[120px] rounded-full" />

      {/* Center Gradient Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] opacity-20 blur-[140px] rounded-full" />

      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="flex flex-col flex-1">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-[#b5d9cd] py-2 px-4 rounded-full text-[11px] md:text-[12px] w-fit">
              <TbTopologyStar3 />
              <p className="font-light">About Resume AI</p>
            </div>

            {/* Heading */}
            <div className="mt-1">
              <h2 className="text-[35px] md:text-[48px] lg:[60px] font-semibold leading-snug">
                Helping Job Seekers Build Better Careers{" "}
                <span className="text-[var(--color-primary)]">with AI</span>
              </h2>

              <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-5 max-w-3xl leading-relaxed">
                Resume AI combines intelligent resume building, ATS
                optimization, and AI-powered career tools to help professionals
                land more interviews and get hired faster.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <button
                onClick={() => navigate("/auth")}
                className="text-[18px] bg-[var(--color-primary)] text-white py-3.5 px-8 rounded-xl hover:bg-[var(--color-secondary)] transition-colors duration-300"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/templates")}
                className="text-[18px] bg-transparent text-black py-3.5 px-8 rounded-xl border border-black hover:bg-[var(--color-secondary)] hover:text-white hover:border-transparent transition-colors duration-300"
              >
                Browse Templates
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-x-4 mt-5 mb-6 lg:mb-0">
              <img
                src={contributors}
                alt="Professionals"
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

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={hero_about_img}
              alt="Resume AI About"
              className="w-full max-w-[800px] xl:max-w-[800px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
