// import React from "react";
// import useResumeBuilderStore from "../../store/resumeBuilderStore";
// import TemplateRenderer from "./templates/TemplateRenderer";

// const LivePreview = ({ template }) => {
//   const { resumeData } = useResumeBuilderStore();

//   return (
//     <section className="sticky top-6">
//       <div className="h-[100vh] overflow-y-auto overflow-x-hidden bg-transparent pr-2">
//         <div className="mx-auto w-full max-w-[794px]">
//           <div className="bg-white shadow-2xl">
//             <TemplateRenderer template={template} resumeData={resumeData} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LivePreview;

import React, { forwardRef } from "react";
import useResumeBuilderStore from "../../store/resumeBuilderStore";
import TemplateRenderer from "./templates/TemplateRenderer";

const LivePreview = forwardRef(({ template }, ref) => {
  const { resumeData } = useResumeBuilderStore();

  return (
    <section className="xl:sticky xl:top-6">
      <div className=" overflow-x-auto pb-4">
        <div
          ref={ref}
          className="resume-print-area mx-auto w-[210mm] min-h-[297mm] bg-white shadow-2xl"
        >
          <TemplateRenderer template={template} resumeData={resumeData} />
        </div>
      </div>
    </section>
  );
});

LivePreview.displayName = "LivePreview";

export default LivePreview;
