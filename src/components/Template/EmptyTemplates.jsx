import React from "react";
const EmptyTemplates = () => {
  return (
    <section className="bg-white rounded-3xl p-12 text-center border border-gray-200">
      <h2 className="text-2xl font-bold text-[#0f172a]">No templates found</h2>
      <p className="mt-3 text-gray-500">
        Try adjusting your filters or search.
      </p>
    </section>
  );
};
export default EmptyTemplates;
