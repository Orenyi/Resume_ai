import React from "react";
import { FiSearch, FiSliders } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const categories = ["All", "ATS", "Simple", "Modern", "Creative"];
const careers = ["All", "Engineering", "Design", "Marketing", "Finance"];

const colors = [
  {
    label: "All",
    value: "All",
    className: "bg-gradient-to-r from-blue-500 via-purple-500 to-red-500",
  },
  { label: "Blue", value: "Blue", className: "bg-blue-600" },
  { label: "Black", value: "Black", className: "bg-slate-900" },
  { label: "Green", value: "Green", className: "bg-emerald-600" },
  { label: "Purple", value: "Purple", className: "bg-purple-600" },
  { label: "Red", value: "Red", className: "bg-red-600" },
];

const TemplateFilters = ({ filters, setFilters, search, setSearch }) => {
  const updateFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <section className="bg-white border border-gray-200 rounded-[2rem] p-5 md:p-6 shadow-sm">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[var(--color-primary)] flex items-center justify-center">
                <FiSliders />
              </span>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Find your perfect template
                </h2>

                <p className="text-sm text-gray-500">
                  Filter by style, career path, and color.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              setFilters({
                category: "All",
                career: "All",
                color: "All",
              })
            }
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Reset filters
          </button>
        </div>

        <div className="relative w-full">
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search template by name, career, or style..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-14 pl-14 pr-5 rounded-2xl bg-gray-50 border border-gray-200
            outline-none focus:bg-white focus:border-[var(--color-primary)]
            transition-all duration-300 text-sm md:text-base"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_1.4fr] gap-5">
          <div>
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Template Style
            </p>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => updateFilter("category", category)}
                  className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300
                    ${
                      filters.category === category
                        ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md"
                        : "bg-white text-slate-700 border-gray-200 hover:border-[var(--color-primary)]"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700 mb-3">Career</p>

            <div className="relative">
              <HiOutlineSparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <select
                value={filters.career}
                onChange={(e) => updateFilter("career", e.target.value)}
                className="w-full h-12 pl-11 pr-5 rounded-2xl border border-gray-200 bg-white
                outline-none focus:border-[var(--color-primary)] text-sm font-medium"
              >
                {careers.map((career) => (
                  <option key={career} value={career}>
                    {career}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700 mb-3">Color</p>

            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateFilter("color", color.value)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full border transition-all duration-300
                    ${
                      filters.color === color.value
                        ? "border-[var(--color-primary)] bg-blue-50 shadow-sm"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full ${color.className}
                    ${
                      color.value === "Black" ? "border border-slate-300" : ""
                    }`}
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {color.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateFilters;
