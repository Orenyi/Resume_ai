import React from "react";

const StatCard = ({ title, value, subtitle }) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>

      <h2 className="text-3xl font-bold mt-3 text-black">{value}</h2>

      <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
    </section>
  );
};

export default StatCard;
