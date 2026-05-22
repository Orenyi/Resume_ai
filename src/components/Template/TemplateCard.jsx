import React from "react";
import { useNavigate } from "react-router-dom";
import { FiStar } from "react-icons/fi";
const TemplateCard = ({ template }) => {
  const navigate = useNavigate();
  const handleSelectTemplate = () => {
    navigate(`/builder/${template.id}`);
  };
  return (
    <section
      onClick={handleSelectTemplate}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden
        border border-gray-200 hover:shadow-2xl hover:-translate-y-1
        transition-all duration-300"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={template.thumbnail_url}
          alt={template.name}
          className="w-full h-[420px] object-cover group-hover:scale-105
            transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadowmd">
          <FiStar className="text-gray-600" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#0f172a]">
            {template.name}
          </h3>
          <span
            className="text-xs bg-blue-100 text-blue-700
                px-3 py-1 rounded-full"
          >
            {template.category}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
            {template.career}
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
            {template.color}
          </span>
        </div>
      </div>
    </section>
  );
};
export default TemplateCard;
