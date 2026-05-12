import { useState } from "react";

const primary = "#1e3a8a";

const jobs = [
  {
    label: "Business Analyst",
    icon: "📊",
    img: "https://picsum.photos/seed/analyst/600/800",
  },
  {
    label: "Data Scientist",
    icon: "🧬",
    img: "https://picsum.photos/seed/datascience/600/800",
  },
  {
    label: "Product Manager",
    icon: "👤",
    img: "https://picsum.photos/seed/product/600/800",
  },
  {
    label: "Software Engineer",
    icon: "💻",
    img: "https://picsum.photos/seed/software/600/800",
  },
  {
    label: "Sales",
    icon: "💼",
    img: "https://picsum.photos/seed/sales/600/800",
  },
  {
    label: "Teacher",
    icon: "✏️",
    img: "https://picsum.photos/seed/teacher/600/800",
  },
  {
    label: "Engineer",
    icon: "⚙️",
    img: "https://picsum.photos/seed/engineer/600/800",
  },
  {
    label: "Accounting",
    icon: "📁",
    img: "https://picsum.photos/seed/accounting/600/800",
  },
];

export default function ResumeSamples() {
  const [active, setActive] = useState(jobs[4]);

  return (
    <section className="bg-[#f2f4f6] py-16">
      <div className="px-4 md:px-6 xl:px-10 max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left */}
          <div className="w-full lg:w-[42%] flex flex-col gap-6">
            <div>
              <h2 className="text-[30px] md:text-[36px] font-bold text-gray-900 leading-tight mb-4">
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
          <div className="w-full lg:w-[58%] lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                key={active.label}
                src={active.img}
                alt={`${active.label} resume example`}
                className="w-full h-auto object-cover"
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
