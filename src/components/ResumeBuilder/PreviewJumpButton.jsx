import React from "react";
import { FiArrowDown } from "react-icons/fi";

const PreviewJumpButton = () => {
  const scrollToPreview = () => {
    const preview = document.getElementById("live-preview-section");

    if (!preview) return;

    preview.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToPreview}
      className="hidden md:flex fixed right-6 bottom-28 z-40 h-14 w-14 items-center
       justify-center rounded-full bg-[var(--color-primary)] text-white shadow-2xl
        transition hover:scale-105 hover:bg-[var(--color-secondary)]"
      aria-label="Go to live preview"
    >
      <FiArrowDown className="animate-bounce text-2xl" />
    </button>
  );
};

export default PreviewJumpButton;
