import { useState } from "react";
import { MdBusinessCenter } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsAirplaneEngines } from "react-icons/bs";
import { BsFiles } from "react-icons/bs";
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

  return (
    <section className="bg-[#f2f4f6] py-28">
      <div className="px-4 md:px-6 xl:px-10 max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left */}
          <div className="w-full lg:w-[42%] flex flex-col gap-6">
            <div>
              <h2 className="text-[30px] md:text-[36px] lg:text-[40px] font-bold text-gray-900 leading-tight mb-6">
                Resume examples tailored for your job and experience
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                Our Certified Professional Résumé Writers have created over
                1,400 in-depth guides and reviewed 10,000+ resumes across U.S.
                industries and career levels — each reflecting today's job
                market.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 mt-4 font-medium text-sm"
                style={{ color: primary }}
              >
                Browse Examples <span>→</span>
              </a>
            </div>

            <div className="flex flex-col gap-5">
              {jobs.map((job) => {
                const isActive = active.label === job.label;
                return (
                  <button
                    key={job.label}
                    onClick={() => setActive(job)}
                    className="flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium transition-all text-left"
                    style={
                      isActive
                        ? { backgroundColor: primary, color: "#fff" }
                        : { backgroundColor: "#fff", color: "#374151" }
                    }
                  >
                    <span className="text-[20px] w-7 text-center">
                      {job.icon}
                    </span>
                    {job.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — image preview */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                key={active.label}
                src={active.img}
                alt={`${active.label} resume example`}
                className="w-full object-cover"
                style={{ animation: "fadeIn 0.3s ease" }}
              />
              <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
