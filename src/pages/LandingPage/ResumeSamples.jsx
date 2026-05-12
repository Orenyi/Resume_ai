import { useState, useRef } from "react";
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

const jobs = [
  {
    label: "Business Analyst",
    icon: <MdBusinessCenter />,
    img: BusinessAnalyst,
  },
  {
    label: "Data Scientist",
    icon: <LuDatabase />,
    img: DataScientist,
  },
  {
    label: "Product Manager",
    icon: <IoPersonSharp />,
    img: ProductManager,
  },
  {
    label: "Software Engineer",
    icon: <RiComputerLine />,
    img: SoftwareEngineer,
  },
  {
    label: "Sales",
    icon: <FaRegChartBar />,
    img: Sales,
  },
  {
    label: "Teacher",
    icon: <GiTeacher />,
    img: Teacher,
  },
  {
    label: "Engineer",
    icon: <BsAirplaneEngines />,
    img: Engineer,
  },
  {
    label: "Accounting",
    icon: <BsFiles />,
    img: Accounting,
  },
];

export default function ResumeSamples() {
  const [active, setActive] = useState(jobs[4]);
  const scrollRef = useRef(null);

  const scroll = (dir) =>
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden bg-[#f2f4f6] py-16 lg:py-28">
      <div className="w-full max-w-[1360px] mx-auto px-6 box-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 w-full">
          {/* LEFT */}
          <div className="flex flex-col min-w-0 w-full">
            {/* Heading */}
            <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold  text-gray-900 mb-5">
              Resume examples tailored for your job and experience
            </h2>
            <p className="text-base leading-8 text-gray-500 mb-5">
              Our expert career specialists have crafted over 1,200 detailed
              resume resources and analyzed 9,000+ applications across multiple
              industries and experience levels — each tailored to meet today's
              competitive job market.
            </p>
            <button
              className="inline-flex items-center gap-1.5 text-sm font-semibold w-fit"
              style={{ color: primary }}
            >
              Browse Examples{" "}
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
                  {jobs.map((job) => {
                    const isActive = active.label === job.label;
                    return (
                      <button
                        key={job.label}
                        onClick={() => setActive(job)}
                        className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium whitespace-nowrap border transition-all duration-200 cursor-pointer"
                        style={{
                          background: isActive ? primary : "#fff",
                          borderColor: isActive ? primary : "#e5e7eb",
                          color: isActive ? "#fff" : "#374151",
                        }}
                      >
                        <span>{job.icon}</span>
                        {job.label}
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
                    key={active.label}
                    src={active.img}
                    alt={active.label}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* DESKTOP pills */}
            <div className="hidden lg:grid grid-cols-2 gap-3 mt-8 w-full">
              {jobs.map((job) => {
                const isActive = active.label === job.label;
                return (
                  <button
                    key={job.label}
                    onClick={() => setActive(job)}
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
                    {job.label}
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
                key={active.label}
                src={active.img}
                alt={active.label}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
