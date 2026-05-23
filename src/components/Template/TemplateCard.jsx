import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiStar } from "react-icons/fi";
import { supabase } from "../../lib/supabaseClient";
import resumeService from "../../services/resumeService";

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSelectTemplate = async () => {
    try {
      setLoading(true);

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        navigate("/auth");
        return;
      }

      const resume = await resumeService.createResumeFromTemplate(
        template.id,
        user.id,
      );

      navigate(`/dashboard/resumes/${resume.id}/edit`);
    } catch (error) {
      console.log("Template selection error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      onClick={handleSelectTemplate}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={template.thumbnail_url}
          alt={template.name}
          className="w-full h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
        >
          <FiStar className="text-gray-600" />
        </button>

        {template.is_premium && (
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            PRO
          </span>
        )}

        {loading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Creating resume...</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#0f172a] capitalize">
            {template.name?.replaceAll("-", " ")}
          </h3>

          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {template.category}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
            {template.career}
          </span>

          <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
            {template.color || "Default"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TemplateCard;
