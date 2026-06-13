import React from "react";
import { useTranslation } from "react-i18next";
import { RiFocus3Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import about from "../../../images/about_img.webp";

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Blue Blur */}
      <div className="absolute top-20 left-0 w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-[#1E3A8A] opacity-15 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-10 right-10 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#0D9488] opacity-15 blur-[120px] rounded-full" />

      {/* Center Gradient Blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[250px] md:h-[350px] bg-gradient-to-r from-[#1E3A8A]
        to-[#0D9488] opacity-[0.06] blur-[160px] rounded-full"
      />
      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="relative">
            <img
              src={about}
              alt={t("ourStory.imageAlt")}
              className="w-full rounded-[32px] object-cover"
            />

            <div
              className="absolute -bottom-6 left-4 md:left-8
              bg-white rounded-3xl shadow-lg border border-gray-100
              p-5 max-w-[220px]"
            >
              <div className="flex items-center gap-2">
                <RiFocus3Line className="text-[var(--color-primary)]" />
                <h4 className="font-semibold text-sm">
                  {t("ourStory.mission")}
                </h4>
              </div>

              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                {t("ourStory.missionCard")}
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="uppercase tracking-[4px] text-[12px] font-semibold text-[var(--color-primary)]">
              {t("ourStory.badge")}
            </p>

            <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-snug mt-2">
              {t("ourStory.title")}
            </h2>

            <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-6">
              {t("ourStory.paragraph1")}
            </p>

            <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-4">
              {t("ourStory.paragraph2")}
            </p>

            <div className="mt-10 space-y-6">
              {/* Mission */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-blue-50
                  flex items-center justify-center shrink-0"
                >
                  <RiFocus3Line className="text-xl text-[var(--color-primary)]" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    {t("ourStory.mission")}
                  </h4>

                  <p className="text-gray-500 mt-2 leading-relaxed">
                    {t("ourStory.missionText")}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-blue-50
                  flex items-center justify-center shrink-0"
                >
                  <FiEye className="text-xl text-[var(--color-primary)]" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    {t("ourStory.vision")}
                  </h4>

                  <p className="text-gray-500 mt-2 leading-relaxed">
                    {t("ourStory.visionText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
