import React from "react";
import { RiRobot2Line, RiSendPlaneFill } from "react-icons/ri";
import { FiCheck, FiMoreHorizontal } from "react-icons/fi";

const benefits = [
  "Analyze and review your resume",
  "Rewrite summaries and bullet points",
  "Improve skills and achievements",
  "Get ATS and keyword suggestions",
  "Answer career and resume questions",
];

const MeetBuilder = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[380px] h-[250px] md:h-[380px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Chat Mockup */}
          <div className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <RiRobot2Line className="text-xl text-[var(--color-primary)]" />
                </div>

                <h4 className="font-semibold text-[#0f172a]">Builder AI</h4>
              </div>

              <FiMoreHorizontal className="text-xl text-gray-500" />
            </div>

            <div className="mt-6 space-y-4">
              <div className="ml-auto max-w-[85%] bg-blue-50 text-[#0f172a] rounded-2xl rounded-tr-md px-4 py-3">
                <p className="text-sm font-medium">
                  How can I improve my professional summary?
                </p>
              </div>

              <div className="max-w-[85%] bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-md px-4 py-3">
                <p className="text-sm text-gray-600">
                  Here's an improved summary that highlights your skills and
                  experience:
                </p>
              </div>

              <div className="max-w-[90%] bg-blue-100 text-[var(--color-primary)] rounded-2xl rounded-tl-md px-4 py-4">
                <p className="text-sm font-medium leading-relaxed">
                  Results-driven Product Designer with 5+ years of experience
                  creating user-centered digital products that drive engagement
                  and business growth.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3">
                <p className="text-sm text-gray-400">
                  Ask Builder AI anything...
                </p>
              </div>

              <button className="w-11 h-11 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
                <RiSendPlaneFill className="text-white" />
              </button>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="uppercase tracking-[4px] text-[11px] md:text-[12px] font-semibold text-[var(--color-primary)]">
              Meet Builder AI
            </p>

            <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug mt-2">
              Your Personal <br className="hidden md:block" />
              Resume Assistant
            </h2>

            <div className="mt-6 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FiCheck className="text-[var(--color-primary)] shrink-0" />
                  <p className="text-[15px] md:text-[16px] text-[#0f172a]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-secondary)] transition-colors duration-300">
              Try Builder AI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBuilder;
