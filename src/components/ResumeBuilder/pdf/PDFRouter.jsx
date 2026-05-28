import React from "react";
import AtsEngineeringPDF from "./AtsEngineeringPDF";

const PDFRouter = ({ template, resumeData }) => {
  const pdfTemplates = {
    ats_engineering: AtsEngineeringPDF,
  };

  const SelectedPDF = pdfTemplates[template?.layout_key] || AtsEngineeringPDF;

  return <SelectedPDF resumeData={resumeData} />;
};

export default PDFRouter;
