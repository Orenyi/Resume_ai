import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const AboutCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] px-6 py-10 md:px-10 lg:px-16 text-center border border-gray-100">
          {/* Blue Blur */}
          <div className="absolute top-0 left-0 w-[260px] h-[260px] bg-[#1E3A8A] opacity-20 blur-[110px] rounded-full" />

          {/* Teal Blur */}
          <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#0D9488] opacity-20 blur-[110px] rounded-full" />

          {/* Dot Pattern Left */}
          <div className="absolute left-6 top-8 grid grid-cols-5 gap-2 opacity-20">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
              />
            ))}
          </div>

          {/* Dot Pattern Right */}
          <div className="absolute right-6 bottom-8 grid grid-cols-5 gap-2 opacity-20">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold leading-snug text-[#0f172a]">
              {t("aboutCTA.title")}
            </h2>

            <p className="text-[15px] md:text-[17px] font-light text-muted-foreground mt-3">
              {t("aboutCTA.description")}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink
                to="/auth"
                className="w-full sm:w-auto text-center bg-[var(--color-primary)] text-white py-3 px-7 rounded-lg hover:bg-[var(--color-secondary)] transition-colors duration-300"
              >
                {t("aboutCTA.primaryButton")}
              </NavLink>

              <NavLink
                to="/dashboard/templates"
                className="w-full sm:w-auto text-center bg-white text-black py-3 px-7 rounded-lg border border-black hover:bg-[var(--color-secondary)] hover:text-white hover:border-transparent transition-colors duration-300"
              >
                {t("aboutCTA.secondaryButton")}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
