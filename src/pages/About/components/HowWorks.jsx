import React from "react";
import { useTranslation } from "react-i18next";
import {
  RiUploadCloud2Line,
  RiSparkling2Line,
  RiLayoutGridLine,
  RiEdit2Line,
  RiDownloadLine,
} from "react-icons/ri";

const HowWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <RiUploadCloud2Line />,
      title: t("howWorks.step1Title"),
      text: t("howWorks.step1Text"),
    },
    {
      icon: <RiSparkling2Line />,
      title: t("howWorks.step2Title"),
      text: t("howWorks.step2Text"),
    },
    {
      icon: <RiLayoutGridLine />,
      title: t("howWorks.step3Title"),
      text: t("howWorks.step3Text"),
    },
    {
      icon: <RiEdit2Line />,
      title: t("howWorks.step4Title"),
      text: t("howWorks.step4Text"),
    },
    {
      icon: <RiDownloadLine />,
      title: t("howWorks.step5Title"),
      text: t("howWorks.step5Text"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[380px] h-[250px] md:h-[380px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <p className="uppercase tracking-[4px] text-[11px] md:text-[12px] font-semibold text-[var(--color-primary)] text-center">
          {t("howWorks.badge")}
        </p>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-5 items-start gap-8 mt-14">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {index !== steps.length - 1 && (
                <div className="absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-blue-200" />
              )}

              <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
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

              <p className="mt-3 text-[15px] font-light text-muted-foreground leading-relaxed max-w-[190px] mx-auto">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden mt-10 max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute left-7 top-8 bottom-8 border-l-2 border-dashed border-blue-200" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-5">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="text-2xl text-[var(--color-primary)]">
                      {step.icon}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[var(--color-primary)] flex items-center justify-center text-sm font-semibold shrink-0 mt-3">
                    {index + 1}
                  </div>

                  <div>
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
      </div>
    </section>
  );
};

export default HowWorks;
