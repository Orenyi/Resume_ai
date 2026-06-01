import React from "react";
import AtsEngineeringTemplate from "./AtsEngineeringTemplate";
import SimpleMarketingTemplate from "./SimpleMarketingTemplate";
import ModernDesignGreenTemplate from "./ModernDesignGreenTemplate";
import CreativeBlueTemplate from "./CreativeBlueTemplate";
import AtsPurpleTemplate from "./AtsPurpleTemplate";
import ModernMarketingBlueTemplate from "./ModernMarketingBlueTemplate";
import SimpleFinanceTemplate from "./SimpleFinanceTemplate";
import ModernEngineeringTemplate from "./ModernEngineeringTemplate";
import CreativeEngineeringGreenTemplate from "./CreativeEngineeringGreenTemplate";
import AtsDesignBlueTemplate from "./AtsDesignBlueTemplate";

const TemplateRenderer = ({ template, resumeData }) => {
  const templates = {
    ats_engineering: AtsEngineeringTemplate,
    simple_marketing: SimpleMarketingTemplate,
    modern_design_green: ModernDesignGreenTemplate,
    creative_blue: CreativeBlueTemplate,
    ats_purple: AtsPurpleTemplate,
    modern_marketing_blue: ModernMarketingBlueTemplate,
    simple_finance: SimpleFinanceTemplate,
    modern_engineering: ModernEngineeringTemplate,
    creative_engineering_green: CreativeEngineeringGreenTemplate,
    ats_design_blue: AtsDesignBlueTemplate,
  };

  const SelectedTemplate =
    templates[template?.layout_key] || AtsEngineeringTemplate;

  return <SelectedTemplate resumeData={resumeData} />;
};

export default TemplateRenderer;
