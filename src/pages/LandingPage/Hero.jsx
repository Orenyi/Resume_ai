import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#f8fafc]">
      {/* Blue Blur */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[#1E3A8A] opacity-30 blur-[120px] rounded-full"></div>

      {/* Teal Blur */}
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#0D9488] opacity-30 blur-[120px] rounded-full"></div>

      {/* Mixed Gradient Blur */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#1E3A8A] 
      to-[#0D9488] opacity-20 blur-[140px] rounded-full"
      ></div>

      <div className="relative z-10 mt-16 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[90rem] mx-auto">
        <div>ffff</div>
      </div>
    </section>
  );
};

export default Hero;
