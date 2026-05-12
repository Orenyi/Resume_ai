import React from "react";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckboxOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";
import { LuEye } from "react-icons/lu";
import Ai_rewrite from "../../images/ai_rewrite.webp";
import Score_checker from "../../images/score_checker.webp";
import live_preview from "../../images/live_preview.webp";

const Results = () => {
  return (
    <section className=" bg-[#f2f4f6] py-16">
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-[90rem] mx-auto">
        <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug text-center">
          Engineered for Results
        </h2>
        <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
          Our specialized AI tools handle the complex parts of resume writing so
          you can focus on your next big opportunity.
        </p>
        {/* ---------- up grid ---------------- */}

        <div className="grid md:grid-cols-[2fr_1fr] gap-6 mt-10">
          {/* ------------ left side ------------- */}
          <div className="flex flex-col lg:flex-row gap-y-6 border border-gray-300 rounded-lg px-6 py-8  md:p-8 ">
            <div className="flex flex-col items-start">
              <div className="bg-[#e2e5ed] p-1 rounded-md">
                <MdOutlineSettingsSuggest className=" text-[var(--color-primary)] text-2xl" />
              </div>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6">
                AI Rewrite Suggestions
              </h4>
              <p className="text-[14px] md:text-[16px] font-light text-muted-foreground max-w-96 mt-2">
                Transform basic bullet points into high-impact professional
                achievements using industry-specific keywords.
              </p>

              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[var(--color-primary)] text-sm" />

                  <p className="font-light text-[14px] lg:text-[16px]">
                    Context-aware action verbs
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[var(--color-primary)] text-sm" />

                  <p className="font-light text-[14px]">
                    Quantifiable impact metrics
                  </p>
                </div>
              </div>
            </div>
            {/* -------- up grid image ------------ */}
            <div>
              <img src={Ai_rewrite} alt="AI Rewrite" className="w-[400px]" />
            </div>
          </div>

          {/* ------------ right side ------------- */}
          <div className="border border-gray-300 rounded-lg px-6 py-8 md:p-8">
            <div className="flex flex-col items-start">
              <div className="bg-[#e2f1ec] p-1 rounded-md">
                <IoCheckboxOutline className=" text-[var(--color-secondary)] text-2xl" />
              </div>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6">
                ATS Score Checker
              </h4>
              <p className="text-[14px] md:text-[16px] font-light text-muted-foreground max-w-96 mt-2">
                Instantly check if your resume passes the automated filters used
                by 99% of Fortune 500 companies and action verbs, optimized for
                ATS and recruiter appeal.
              </p>
              <img
                src={Score_checker}
                alt="ATS Score Checker"
                className="w-[200px] mt-4 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* ---------- down grid ---------------- */}

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 mt-10">
          {/* ------------ leftt side ------------- */}
          <div className="border border-gray-300 rounded-lg px-6 py-8 md:p-8">
            <div className="flex flex-col items-start">
              <div className="bg-[#e2f1ec] p-1 rounded-md">
                <LuEye className=" text-[var(--color-secondary)] text-2xl" />
              </div>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6">
                Live Preview
              </h4>
              <p className="text-[14px] md:text-[16px] font-light text-muted-foreground max-w-96 mt-2">
                See your changes in real-time on a pixel-perfect, professionally
                designed document.
              </p>
              <img
                src={live_preview}
                alt="ATS Score Checker"
                className="w-full mt-4 mx-auto"
              />
            </div>
          </div>

          {/* ------------ right side ------------- */}
          <div className="relative overflow-hidden rounded-2xl p-8 bg-[var(--color-primary)]">
            {/* Green Blur */}
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[var(--color-secondary)] opacity-30 blur-[100px] rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start">
              <div className="bg-[#e2e5ed] p-2 rounded-md">
                <GrDocumentPdf className="text-[var(--color-primary)] text-2xl" />
              </div>

              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6 text-white">
                Export to PDF
              </h4>

              <p className="text-[14px] md:text-[16px] font-light text-gray-200 max-w-xl mt-2">
                One-click export to a perfectly formatted PDF. No more margin
                errors or broken layouts when you send your application.
              </p>

              <button className="mt-8  py-3 px-6 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
                Try Export Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
