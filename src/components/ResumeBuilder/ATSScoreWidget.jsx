import React from "react";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const ATSScoreWidget = ({ score, suggestions }) => {
  const isGood = score >= 75;
  const isAverage = score >= 50 && score < 75;

  return (
    <section className="rounded-2xl bg-white px-5 py-4 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className={`rounded-xl px-3 py-1 text-sm font-bold ${
            isGood
              ? "bg-green-100 text-green-700"
              : isAverage
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
          }`}
        >
          {score}%
        </span>

        <div>
          <h3 className="font-bold text-slate-900">Resume score</h3>
          <p className="text-xs text-slate-500">
            {isGood
              ? "Strong ATS-ready resume"
              : "Needs improvement for better ATS results"}
          </p>
        </div>

        {isGood ? (
          <FiCheckCircle className="ml-auto text-green-600" />
        ) : (
          <FiAlertCircle className="ml-auto text-red-500" />
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <p className="text-sm font-bold text-slate-800">
            Suggested improvements
          </p>

          <ul className="mt-2 space-y-1 text-sm text-slate-500">
            {suggestions.slice(0, 3).map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ATSScoreWidget;
