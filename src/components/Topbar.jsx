import React from "react";
import { FiBell, FiSearch, FiMenu } from "react-icons/fi";
import useDashboardStore from "../store/dashboardStore";

const Topbar = () => {
  const { openMobileSidebar } = useDashboardStore();

  return (
    <section className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-4 shadow-sm">
      <div className="flex items-center gap-3 flex-1">
        <button onClick={openMobileSidebar} className="lg:hidden">
          <FiMenu className="text-2xl" />
        </button>

        <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 w-full max-w-[450px]">
          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search resumes..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
          <FiBell className="text-lg" />
        </button>

        <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
          O
        </div>
      </div>
    </section>
  );
};

export default Topbar;
