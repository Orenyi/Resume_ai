import React from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import {
  testimonialsRow1,
  testimonialsRow2,
} from "../../assets/testimonialsData";

const TestimonialCard = ({ name, role, text }) => {
  return (
    <div
      className="group w-[320px] md:w-[360px] shrink-0 rounded-3xl border border-gray-200 bg-white 
        p-7 shadow-sm transition-all duration-500 hover:cursor-pointer"
    >
      <div className="text-5xl leading-none text-[var(--color-primary)]">"</div>

      <p className="mt-3 text-[15px] leading-8 text-gray-600">{text}</p>

      <div className="mt-6 border-t border-gray-100 pt-5">
        <h4 className="text-[15px] font-semibold text-gray-900">{name}</h4>
        <p className="mt-1 text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
};

const MarqueeRow = ({ items, direction = "left", speed = "35s" }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f2f4f6] to-transparent pointer-events-none" />

      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f2f4f6] to-transparent pointer-events-none" />

      <div
        className={`flex w-max gap-6 py-3 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items].map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            role={item.role}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 lg:py-24">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[260px] md:w-[400px] h-[260px] md:h-[400px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[250px] md:h-[350px] bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] opacity-[0.05] blur-[160px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2 text-xs font-medium text-white shadow-lg shadow-blue-900/20">
            <FaStar className="text-[10px]" />
            {t("testimonials.badge")}
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug mt-3">
            {t("testimonials.heading")}
          </h2>

          <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-14 space-y-5">
        <MarqueeRow items={testimonialsRow1} direction="left" speed="35s" />
        <MarqueeRow items={testimonialsRow2} direction="right" speed="35s" />
      </div>
    </section>
  );
};

export default Testimonials;
