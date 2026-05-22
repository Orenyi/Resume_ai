import React from "react";
const TemplateSkeleton = () => {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
 xl:grid-cols-4 gap-6"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-white rounded-3xl overflow-hidden"
        >
          <div className="h-[420px] bg-gray-200" />
          <div className="p-5">
            <div className="h-4 bg-gray-200 rounded w-2/3" />
            <div className="mt-4 flex gap-2">
              <div className="h-8 w-20 bg-gray-200 rounded-full" />
              <div className="h-8 w-20 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default TemplateSkeleton;
