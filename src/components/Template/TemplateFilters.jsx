import React from "react";
import { FiSearch } from "react-icons/fi";
const categories = ["All", "Simple", "Modern", "Creative", "ATS"];
const careers = ["All", "Engineering", "Design", "Marketing", "Finance"];
const colors = ["All", "Blue", "Black", "Green", "Purple"];
const TemplateFilters = ({ filters, setFilters, search, setSearch }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="relative max-w-md w-full">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search templates"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200
            bg-white outline-none focus:border-[var(--color-primary)]"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 flex-wrap">
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="px-5 py-3 rounded-2xl border border-gray-200 bg-white"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={filters.career}
          onChange={(e) => setFilters({ ...filters, career: e.target.value })}
          className="px-5 py-3 rounded-2xl border border-gray-200 bg-white"
        >
          {careers.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={filters.color}
          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          className="px-5 py-3 rounded-2xl border border-gray-200 bg-white"
        >
          {colors.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default TemplateFilters;
