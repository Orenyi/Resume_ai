import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";

const ResultDriven = () => {
  const { t } = useTranslation();

  const benefits = [
    t("resultDriven.benefit1"),
    t("resultDriven.benefit2"),
    t("resultDriven.benefit3"),
  ];

  const tips = [
    {
      text: t("resultDriven.tip1"),
      impact: "+24% impact",
    },
    {
      text: t("resultDriven.tip2"),
      impact: "+18% impact",
    },
    {
      text: t("resultDriven.tip3"),
      impact: "+12% impact",
    },
    {
      text: t("resultDriven.tip4"),
      impact: "+8% impact",
    },
  ];

  const scoreBars = [
    {
      name: t("resultDriven.content"),
      score: 92,
    },
    {
      name: t("resultDriven.structure"),
      score: 85,
    },
    {
      name: t("resultDriven.keywords"),
      score: 80,
    },
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[4px] text-[11px] md:text-[12px] font-semibold text-[var(--color-primary)]">
              {t("resultDriven.badge")}
            </p>

            <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug mt-3 max-w-xl">
              {t("resultDriven.title")}
            </h2>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-xl text-[var(--color-primary)] shrink-0" />
                  <p className="text-[15px] md:text-[16px] font-light text-muted-foreground">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* ATS Score Card */}
            <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] max-w-xl">
              <p className="text-sm font-semibold text-[#0f172a]">
                {t("resultDriven.atsScore")}
              </p>

              <div className="mt-6 grid sm:grid-cols-[160px_1fr] gap-8 items-center">
                <div className="relative w-32 h-32 mx-auto sm:mx-0">
                  <div className="absolute inset-0 rounded-full border-[12px] border-gray-100" />
                  <div className="absolute inset-0 rounded-full border-[12px] border-transparent border-l-emerald-400 border-t-emerald-400 border-b-emerald-400 rotate-45" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-[34px] font-semibold text-[#0f172a]">
                      87
                    </h3>
                    <p className="text-sm text-gray-500">/100</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {scoreBars.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-500">{item.name}</p>
                        <p className="text-sm font-semibold text-[var(--color-primary)]">
                          {item.score}
                        </p>
                      </div>

                      <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[var(--color-primary)]"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-6 lg:hidden w-full bg-[var(--color-primary)] text-white py-3 px-5 rounded-xl flex items-center justify-center gap-2">
                {t("resultDriven.viewTips")}
                <RiArrowRightLine />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-[#0f172a]">
                  {t("resultDriven.improvementTips")}
                </h4>

                <span className="bg-emerald-50 text-emerald-600 text-sm font-semibold px-4 py-2 rounded-full">
                  {t("resultDriven.overallImpact")}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 border border-gray-100 rounded-2xl px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <FiCheckCircle className="text-emerald-500 shrink-0" />
                      <p className="text-[15px] font-medium text-[#0f172a]">
                        {tip.text}
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-emerald-500 whitespace-nowrap">
                      {tip.impact}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-8 flex items-center gap-3 text-[var(--color-primary)] font-semibold">
                <FiCheckCircle />
                {t("resultDriven.applyAll")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultDriven;
