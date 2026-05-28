import React from "react";
import AtsEngineeringTemplate from "./AtsEngineeringTemplate";

const TemplateRenderer = ({ template, resumeData }) => {
  const templates = {
    ats_engineering: AtsEngineeringTemplate,
  };

  const SelectedTemplate =
    templates[template?.layout_key] || AtsEngineeringTemplate;

  return <SelectedTemplate resumeData={resumeData} />;
};

export default TemplateRenderer;
