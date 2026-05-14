import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdBusinessCenter } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsAirplaneEngines, BsFiles } from "react-icons/bs";

import BusinessAnalyst from "../../images/BusinessAnalyst.webp";
import DataScientist from "../../images/DataScientist.webp";
import ProductManager from "../../images/ProductManager.webp";
import SoftwareEngineer from "../../images/SoftwareEngineer.webp";
import Sales from "../../images/Sales.webp";
import Teacher from "../../images/Teacher.webp";
import Engineer from "../../images/Engineer.webp";
import Accounting from "../../images/Accounting.webp";

const primary = "#1e3a8a";

const jobKeys = [
  { key: "businessAnalyst", icon: <MdBusinessCenter />, img: BusinessAnalyst },
  { key: "dataScientist", icon: <LuDatabase />, img: DataScientist },
  { key: "productManager", icon: <IoPersonSharp />, img: ProductManager },
  { key: "softwareEngineer", icon: <RiComputerLine />, img: SoftwareEngineer },
  { key: "sales", icon: <FaRegChartBar />, img: Sales },
  { key: "teacher", icon: <GiTeacher />, img: Teacher },
  { key: "engineer", icon: <BsAirplaneEngines />, img: Engineer },
  { key: "accounting", icon: <BsFiles />, img: Accounting },
];

export default function ResumeSamples() {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState("sales");
  const scrollRef = useRef(null);

  const scroll = (dir) =>
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });

  const activeJob = jobKeys.find((j) => j.key === activeKey);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden bg-[#f2f4f6] py-16 lg:py-28">
      <div className="w-full max-w-[85rem] mx-auto px-6 box-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 w-full">
          {/* LEFT */}
          <div className="flex flex-col min-w-0 w-full">
            <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold text-gray-900 mb-5">
              {t("samples.heading")}
            </h2>
            <p className="text-base leading-8 text-gray-500 mb-5">
              {t("samples.subtitle")}
            </p>
            <button
              className="inline-flex items-center gap-1.5 text-sm font-semibold w-fit"
              style={{ color: primary }}
            >
              {t("samples.browse")}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* MOBILE / TABLET scroll row */}
            <div className="mt-8 w-full lg:hidden">
              <div className="flex items-center gap-2 w-full min-w-0">
                <button
                  onClick={() => scroll("left")}
                  className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 text-lg cursor-pointer hover:border-gray-400 transition-colors"
                >
                  ‹
                </button>

                <div
                  ref={scrollRef}
                  className="flex-1 min-w-0 flex gap-2 overflow-x-auto overflow-y-hidden pb-1.5 [scroll-behavior:smooth] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {jobKeys.map((job) => {
                    const isActive = activeKey === job.key;
                    return (
                      <button
                        key={job.key}
                        onClick={() => setActiveKey(job.key)}
                        className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium whitespace-nowrap border transition-all duration-200 cursor-pointer"
                        style={{
                          background: isActive ? primary : "#fff",
                          borderColor: isActive ? primary : "#e5e7eb",
                          color: isActive ? "#fff" : "#374151",
                        }}
                      >
                        <span>{job.icon}</span>
                        {t(`samples.jobs.${job.key}`)}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => scroll("right")}
                  className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 text-lg cursor-pointer hover:border-gray-400 transition-colors"
                >
                  ›
                </button>
              </div>

              {/* Mobile image */}
              <div className="relative mt-6">
                <div
                  className="absolute -top-5 -right-5 w-36 h-36 rounded-full opacity-10 pointer-events-none"
                  style={{ background: primary, filter: "blur(60px)" }}
                />
                <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
                  <img
                    key={activeKey}
                    src={activeJob.img}
                    alt={t(`samples.jobs.${activeKey}`)}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* DESKTOP pills */}
            <div className="hidden lg:grid grid-cols-2 gap-3 mt-8 w-full">
              {jobKeys.map((job) => {
                const isActive = activeKey === job.key;
                return (
                  <button
                    key={job.key}
                    onClick={() => setActiveKey(job.key)}
                    className="flex items-center gap-3.5 px-[18px] py-3.5 rounded-2xl border text-sm font-medium text-left cursor-pointer transition-all duration-200"
                    style={{
                      background: isActive ? primary : "#fff",
                      borderColor: isActive ? primary : "#e5e7eb",
                      color: isActive ? "#fff" : "#374151",
                      boxShadow: isActive
                        ? "0 8px 24px rgba(30,58,138,0.18)"
                        : "none",
                    }}
                  >
                    <span className="text-xl">{job.icon}</span>
                    {t(`samples.jobs.${job.key}`)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — desktop image */}
          <div className="hidden lg:block sticky top-10 min-w-0">
            <div
              className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-10 pointer-events-none"
              style={{ background: primary, filter: "blur(90px)" }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <img
                key={activeKey}
                src={activeJob.img}
                alt={t(`samples.jobs.${activeKey}`)}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
