import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";

import { faqData } from "../../assets/faqData";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        transition-all
        duration-300
        hover:shadow-xl
        hover:border-gray-300
        cursor-pointer
      "
    >
      {/* TOP */}
      <div className="flex items-center justify-between gap-5 px-6 py-5 md:px-8 md:py-6">
        <h3 className="text-left text-[15px] md:text-[17px] font-semibold leading-relaxed text-gray-900">
          {question}
        </h3>

        {/* ICON */}
        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300
            ${
              isOpen
                ? "rotate-45 border-blue-900 bg-blue-900 text-white"
                : "border-gray-300 bg-white text-gray-500"
            }
          `}
        >
          <FiPlus className="text-lg" />
        </div>
      </div>

      {/* ANSWER */}
      <div
        className={`
          grid
          transition-all
          duration-500
          ease-in-out
          ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 md:px-8 md:pb-8 text-[15px] leading-8 text-gray-500">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const { t } = useTranslation();

  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="overflow-hidden bg-[#f2f4f6] py-16 lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 lg:px-8">
        {/* HEADING */}
        <div className="max-w-3xl text-center">
          <h2 className="mt-6 text-[32px] font-bold leading-tight tracking-tight text-gray-900 md:text-[44px] lg:text-[56px]">
            {t("faq.heading")}
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500 md:text-lg">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-14 flex w-full flex-col gap-4">
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              question={t(item.question)}
              answer={t(item.answer)}
              isOpen={openId === item.id}
              onToggle={() => toggleFaq(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
