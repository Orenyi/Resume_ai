import React from "react";

import AtsEngineeringTemplate from "./AtsEngineeringTemplate";

const TemplateRenderer = ({ template, resumeData }) => {
  const layoutKey = template?.layout_key;

  const templates = {
    ats_engineering: AtsEngineeringTemplate,
  };

  const SelectedTemplate = templates[layoutKey] || AtsEngineeringTemplate;

  return <SelectedTemplate resumeData={resumeData} />;
};

export default TemplateRenderer;
