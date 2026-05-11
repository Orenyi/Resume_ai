import React from "react";
import { TbTopologyStar3 } from "react-icons/tb";
import hero_img from "../../images/hero_img.webp";

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
        <div className="flex items-center justify-between gap-x-10">
          {/* ------- hero left -------------- */}
          <div className="flex flex-col ">
            {/* -------------next gen star ---------------- */}
            <div className="flex items-center gap-[8px] bg-[#b5d9cd] py-1 px-3 rounded-full text-[12px] w-fit">
              <TbTopologyStar3 className="" />
              <p className="font-light ">Next-Gen Career Intelligence</p>
            </div>

            {/* --------------- title --------------- */}
            <div>
              <h2 className="text-[60px] font-semibold  ">
                Build a Resume That Lands the Job in{" "}
                <span className="text-[var(--color-primary)]">Minutes</span>
              </h2>
              <p className="text-[18px] text-muted-foreground mt-4">
                Create a standout resume in minutes with our AI-powered platform
              </p>
            </div>
          </div>

          {/* ------------ hero right images -------------- */}
          <div>
            <img
              src={hero_img}
              alt="An hero image of resume"
              className="w-[1200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
