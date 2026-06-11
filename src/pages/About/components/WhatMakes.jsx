import React from "react";
import {
  RiRobot2Line,
  RiShieldCheckLine,
  RiFileUploadLine,
  RiFileList3Line,
  RiTimeLine,
} from "react-icons/ri";
import { FiUsers } from "react-icons/fi";

const features = [
  {
    icon: <RiRobot2Line />,
    title: "AI Resume Builder",
    text: "Create powerful, role-specific resumes with AI suggestions that highlight your strengths and achievements.",
    bg: "bg-blue-50",
    color: "text-[var(--color-primary)]",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "ATS Optimization",
    text: "Get ATS score, keyword suggestions, and formatting tips to pass applicant tracking systems.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: <RiFileUploadLine />,
    title: "Smart Resume Import",
    text: "Upload your existing resume and let AI extract and structure your information in seconds.",
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
];

const stats = [
  {
    icon: <FiUsers />,
    value: "10,000+",
    label: "Resumes Created",
  },
  {
    icon: <RiShieldCheckLine />,
    value: "95%",
    label: "ATS Success Rate",
  },
  {
    icon: <RiFileList3Line />,
    value: "13+",
    label: "Professional Templates",
  },
  {
    icon: <RiTimeLine />,
    value: "24/7",
    label: "AI Assistance",
  },
];

const WhatMakes = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[380px] h-[250px] md:h-[380px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <p className="uppercase tracking-[4px] text-[11px] md:text-[12px] font-semibold text-[var(--color-primary)] text-center">
          What Makes Resume AI Different
        </p>

        {/* Feature Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-11 h-11 rounded-2xl ${feature.bg} flex items-center justify-center`}
              >
                <span className={`text-2xl ${feature.color}`}>
                  {feature.icon}
                </span>
              </div>

              <h4 className="mt-6 text-[18px] font-semibold text-[#0f172a]">
                {feature.title}
              </h4>

              <p className="mt-3 text-[15px] md:text-[16px] font-light text-muted-foreground leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-10 bg-[var(--color-primary)] rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center text-white ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-white/20"
                    : ""
                }`}
              >
                <div className="flex justify-center text-2xl mb-3">
                  {stat.icon}
                </div>

                <h3 className="text-[24px] md:text-[28px] font-semibold">
                  {stat.value}
                </h3>

                <p className="text-[13px] md:text-[14px] text-white/80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakes;
