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
import SimpleDesignTemplate from "./SimpleDesignTemplate";
import AtsEngineeringBlackTemplate from "./AtsEngineeringBlackTemplate";
import CreativeMarketingTemplate from "./CreativeMarketingTemplate";
import CreativeEngineeringBlackTemplate from "./CreativeEngineeringBlackTemplate";

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
    simple_design: SimpleDesignTemplate,
    ats_engineering_black: AtsEngineeringBlackTemplate,
    creative_marketing: CreativeMarketingTemplate,
    creative_engineering_black: CreativeEngineeringBlackTemplate,
  };

  const SelectedTemplate =
    templates[template?.layout_key] || AtsEngineeringTemplate;

  return <SelectedTemplate resumeData={resumeData} />;
};

export default TemplateRenderer;
