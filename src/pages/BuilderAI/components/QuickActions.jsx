import React from "react";

const QuickActions = () => {
  const actions = [
    "Add Work Experience",
    "Improve Summary",
    "Check ATS Score",
    "Add Skills",
  ];

  return (
    <div className="border-t border-gray-200 px-4 pt-4">
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-2 rounded-xl transition"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
