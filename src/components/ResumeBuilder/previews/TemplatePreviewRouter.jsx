import React from "react";
import ATSClassicPreview from "./ATSClassicPreview";
import SimpleCleanPreview from "./SimpleCleanPreview";
import ModernSplitPreview from "./ModernSplitPreview";
import CreativeSidebarPreview from "./CreativeSidebarPreview";

const TemplatePreviewRouter = ({ template, resumeData }) => {
  const layoutKey = template?.layout_key || "ats_classic";

  if (layoutKey === "simple_clean") {
    return <SimpleCleanPreview resumeData={resumeData} />;
  }

  if (layoutKey === "modern_split") {
    return <ModernSplitPreview resumeData={resumeData} />;
  }

  if (layoutKey === "creative_sidebar") {
    return <CreativeSidebarPreview resumeData={resumeData} />;
  }

  return <ATSClassicPreview resumeData={resumeData} />;
};

export default TemplatePreviewRouter;
