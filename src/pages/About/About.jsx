import React from "react";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import WhatMakes from "./components/WhatMakes";
import HowWorks from "./components/HowWorks";
import MeetBuilder from "./components/MeetBuilder";
import CTA from "./components/CTA";

const About = () => {
  return (
    <section>
      <AboutHero />
      <OurStory />
      <WhatMakes />
      <HowWorks />
      <MeetBuilder />
      <CTA />
    </section>
  );
};

export default About;
