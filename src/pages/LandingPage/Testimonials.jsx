import React from "react";
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
      {/* QUOTE */}
      <div className="text-5xl leading-none text-[var(--color-primary)]">“</div>

      {/* TEXT */}
      <p className="mt-3 text-[15px] leading-8 text-gray-600">{text}</p>

      {/* USER */}
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
      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f2f4f6] to-transparent pointer-events-none" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f2f4f6] to-transparent pointer-events-none" />

      {/* TRACK */}
      <div
        className={`flex w-max gap-6 py-3 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{
          animationDuration: speed,
        }}
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
  return (
    <section className="overflow-hidden bg-[#f2f4f6] py-16 lg:py-24">
      {/* TOP CONTENT */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* BADGE */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2 text-xs font-medium text-white shadow-lg shadow-blue-900/20">
            <FaStar className="text-[10px]" />
            Rated 4/5 by over 1k+ users
          </div>
        </div>

        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[32px] font-bold leading-tight tracking-tight text-gray-900 md:text-[42px] lg:text-[52px]">
            Words of praise from others about our presence.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500">
            Discover why teams, founders, and professionals trust our creative
            expertise to elevate their brands and digital experiences.
          </p>
        </div>
      </div>

      {/* TESTIMONIAL ROWS */}
      <div className="mt-14 space-y-5">
        <MarqueeRow items={testimonialsRow1} direction="left" speed="35s" />

        <MarqueeRow items={testimonialsRow2} direction="right" speed="35s" />
      </div>
    </section>
  );
};

export default Testimonials;
