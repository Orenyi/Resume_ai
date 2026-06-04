import React from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckboxOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";
import { LuEye } from "react-icons/lu";
import Airewrite from "../../images/airewrite.webp";
import Scorechecker from "../../images/scorechecker.webp";
import livepreview from "../../images/livepreview.webp";

const Results = () => {
  const { t } = useTranslation();

  return (
    <section className=" bg-[#f2f4f6] py-16 lg:py-28">
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug text-center">
          {t("results.heading")}
        </h2>
        <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
          {t("results.subtitle")}
        </p>

        {/* up grid */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-6 mt-10">
          {/* left side */}
          <div className="flex flex-col lg:flex-row gap-y-6 border border-gray-300 rounded-lg px-6 py-8 md:p-8">
            <div className="flex flex-col items-start">
              <div className="bg-[#e2e5ed] p-1 rounded-md">
                <MdOutlineSettingsSuggest className="text-[var(--color-primary)] text-2xl" />
              </div>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6">
                {t("results.aiRewrite.title")}
              </h4>
              <p className="text-[14px] md:text-[16px] font-light text-muted-foreground max-w-96 mt-2">
                {t("results.aiRewrite.desc")}
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[var(--color-primary)] text-sm" />
                  <p className="font-light text-[14px] lg:text-[16px]">
                    {t("results.aiRewrite.check1")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[var(--color-primary)] text-sm" />
                  <p className="font-light text-[14px]">
                    {t("results.aiRewrite.check2")}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={Airewrite} alt="AI Rewrite" className="w-[400px]" />
            </div>
          </div>

          {/* right side */}
          <div className="border border-gray-300 rounded-lg px-6 py-8 md:p-8">
            <div className="flex flex-col items-start">
              <div className="bg-[#e2f1ec] p-1 rounded-md">
                <IoCheckboxOutline className="text-[var(--color-secondary)] text-2xl" />
              </div>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6">
                {t("results.ats.title")}
              </h4>
              <p className="text-[14px] md:text-[16px] font-light text-muted-foreground max-w-96 mt-2">
                {t("results.ats.desc")}
              </p>
              <img
                src={Scorechecker}
                alt="ATS Score Checker"
                className="w-[200px] mt-4 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* down grid */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 mt-10">
          {/* left side */}
          <div className="border border-gray-300 rounded-lg px-6 py-8 md:p-8">
            <div className="flex flex-col items-start">
              <div className="bg-[#e2f1ec] p-1 rounded-md">
                <LuEye className="text-[var(--color-secondary)] text-2xl" />
              </div>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6">
                {t("results.preview.title")}
              </h4>
              <p className="text-[14px] md:text-[16px] font-light text-muted-foreground max-w-96 mt-2">
                {t("results.preview.desc")}
              </p>
              <img
                src={livepreview}
                alt="Live Preview"
                className="w-full mt-4 mx-auto"
              />
            </div>
          </div>

          {/* right side */}
          <div className="relative overflow-hidden rounded-2xl p-8 bg-[var(--color-primary)]">
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[var(--color-secondary)] opacity-30 blur-[100px] rounded-full"></div>
            <div className="relative z-10 flex flex-col items-start">
              <div className="bg-[#e2e5ed] p-2 rounded-md">
                <GrDocumentPdf className="text-[var(--color-primary)] text-2xl" />
              </div>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mt-6 text-white">
                {t("results.pdf.title")}
              </h4>
              <p className="text-[14px] md:text-[16px] font-light text-gray-200 max-w-xl mt-2">
                {t("results.pdf.desc")}
              </p>
              <button className="mt-8 py-3 px-6 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
                {t("results.pdf.btn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
