import React from "react";
import TemplateCard from "./TemplateCard";
import TemplateSkeleton from "./TemplateSkeleton";
import EmptyTemplates from "./EmptyTemplates";
const TemplateGrid = ({ templates, loading }) => {
  if (loading) {
    return <TemplateSkeleton />;
  }
  if (!templates.length) {
    return <EmptyTemplates />;
  }
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 gap-6"
    >
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </section>
  );
};
export default TemplateGrid;
