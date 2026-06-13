import React from "react";
import { useTranslation } from "react-i18next";
import {
  RiUploadCloud2Line,
  RiSparkling2Line,
  RiLayoutGridLine,
  RiEdit2Line,
  RiTeamLine,
  RiShieldCheckLine,
  RiFileList3Line,
  RiTimeLine,
} from "react-icons/ri";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <RiUploadCloud2Line />,
      title: t("howItWorks.step1Title"),
      text: t("howItWorks.step1Text"),
    },
    {
      icon: <RiSparkling2Line />,
      title: t("howItWorks.step2Title"),
      text: t("howItWorks.step2Text"),
    },
    {
      icon: <RiLayoutGridLine />,
      title: t("howItWorks.step3Title"),
      text: t("howItWorks.step3Text"),
    },
    {
      icon: <RiEdit2Line />,
      title: t("howItWorks.step4Title"),
      text: t("howItWorks.step4Text"),
    },
  ];

  const stats = [
    {
      icon: <RiTeamLine />,
      value: "10,000+",
      label: t("howItWorks.stat1"),
    },
    {
      icon: <RiShieldCheckLine />,
      value: "95%",
      label: t("howItWorks.stat2"),
    },
    {
      icon: <RiFileList3Line />,
      value: "13+",
      label: t("howItWorks.stat3"),
    },
    {
      icon: <RiTimeLine />,
      value: "24/7",
      label: t("howItWorks.stat4"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 lg:py-20">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[260px] md:w-[400px] h-[260px] md:h-[400px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-[11px] md:text-[12px] font-semibold text-[var(--color-primary)]">
            {t("howItWorks.badge")}
          </p>

          <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug mt-3">
            {t("howItWorks.title")}
          </h2>

          <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Desktop Steps */}
        <div className="hidden lg:grid grid-cols-4 items-start gap-10 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {index !== steps.length - 1 && (
                <div className="absolute top-11 left-[62%] w-[85%] border-t-2 border-dashed border-blue-200" />
              )}

              <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shadow-sm">
                <span className="text-4xl text-[var(--color-primary)]">
                  {step.icon}
                </span>
              </div>

              <div className="mx-auto mt-4 w-8 h-8 rounded-full bg-blue-100 text-[var(--color-primary)] flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>

              <h4 className="mt-6 text-[18px] font-semibold text-[#0f172a]">
                {step.title}
              </h4>

              <p className="mt-3 text-[15px] font-light text-muted-foreground leading-relaxed max-w-[230px] mx-auto">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Steps */}
        <div className="lg:hidden mt-10 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute left-7 top-8 bottom-8 border-l-2 border-dashed border-blue-200" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-2xl text-[var(--color-primary)]">
                      {step.icon}
                    </span>
                  </div>

                  <div>
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-[var(--color-primary)] flex items-center justify-center text-xs font-semibold mb-2">
                      {index + 1}
                    </div>

                    <h4 className="text-[17px] font-semibold text-[#0f172a]">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-[15px] font-light text-muted-foreground leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 bg-[var(--color-primary)] rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-xl">
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

                <h3 className="text-[24px] md:text-[30px] font-semibold">
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

export default HowItWorks;
