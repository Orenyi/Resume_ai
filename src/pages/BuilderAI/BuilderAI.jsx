import React from "react";

const BuilderAI = () => {
  return (
    <div className="min-h-screen bg-[#f5f6f8] p-6">
      <div className="grid grid-cols-1 xl:grid-cols-[430px_1fr] gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl min-h-[calc(100vh-48px)]">
          Chat Panel
        </div>

        <div className="bg-[#e5e7eb] rounded-2xl min-h-[calc(100vh-48px)]">
          Resume Preview
        </div>
      </div>
    </div>
  );
};

export default BuilderAI;
