import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";

import template1 from "../../images/template1.jpg";
import template2 from "../../images/template2.jpg";
import template3 from "../../images/template3.jpg";
import template4 from "../../images/template4.jpg";
import template5 from "../../images/template5.jpg";
import template6 from "../../images/template6.jpg";
import template7 from "../../images/template7.jpg";
import template8 from "../../images/template8.jpg";

const TemplateStyle = () => {
  const { t } = useTranslation();

  const templates = [
    { name: t("templateStyle.templateModern"), image: template1, active: true },
    { name: t("templateStyle.templateProfessional"), image: template2 },
    { name: t("templateStyle.templateCreative"), image: template3 },
    { name: t("templateStyle.templateMinimal"), image: template4 },
    { name: t("templateStyle.templateExecutive"), image: template5 },
    { name: t("templateStyle.templateSimple"), image: template6 },
    { name: t("templateStyle.templateClassic"), image: template7 },
    { name: t("templateStyle.templateElegant"), image: template8 },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 lg:py-28">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[260px] md:w-[400px] h-[260px] md:h-[400px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[250px] md:h-[350px] bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] opacity-[0.05] blur-[160px] rounded-full" />

      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-[11px] md:text-[12px] font-semibold text-[var(--color-primary)]">
            {t("templateStyle.badge")}
          </p>

          <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug mt-3">
            {t("templateStyle.title")}
          </h2>

          <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
            {t("templateStyle.subtitle")}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {templates.map((template, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl border p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 ${
                template.active
                  ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                  : "border-gray-200"
              }`}
            >
              {template.active && (
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shadow-md z-10">
                  <FiCheckCircle />
                </div>
              )}

              <div className="bg-[#f8fafc] rounded-2xl overflow-hidden h-[230px] flex items-start justify-center">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h4 className="text-center mt-5 text-[16px] font-semibold text-[#0f172a]">
                {template.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="relative z-20 md:hidden mt-10 -mx-4 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-5 px-6 pb-3 w-max">
              {templates.slice(0, 6).map((template, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-3xl border border-gray-200 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] w-[170px] shrink-0"
                >
                  {index === 0 && (
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shadow-md z-10">
                      <FiCheckCircle className="text-sm" />
                    </div>
                  )}

                  <div className="bg-[#f8fafc] rounded-2xl overflow-hidden h-[185px] flex items-start justify-center">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <h4 className="text-center mt-4 text-[14px] font-semibold text-[#0f172a]">
                    {template.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <NavLink
            to="/dashboard/templates"
            className="bg-[var(--color-primary)] text-white py-3 px-8 rounded-xl hover:bg-[var(--color-secondary)] transition-colors duration-300 flex items-center gap-3"
          >
            {t("templateStyle.cta")}
            <RiArrowRightLine />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TemplateStyle;
