import React from "react";

const StatCard = ({ title, value, subtitle, icon, badge }) => {
  return (
    <section
      className="group bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm
      hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>

          <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-gray-950">
            {value}
          </h2>
        </div>

        {icon && (
          <div
            className="w-11 h-11 rounded-xl bg-[#1f3f95]/10 text-[#1f3f95]
            flex items-center justify-center text-xl shrink-0"
          >
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 mt-4">
        <p className="text-sm text-gray-500">{subtitle}</p>

        {badge && (
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full
            bg-green-50 text-green-700 border border-green-100 whitespace-nowrap"
          >
            {badge}
          </span>
        )}
      </div>
    </section>
  );
};

export default StatCard;
