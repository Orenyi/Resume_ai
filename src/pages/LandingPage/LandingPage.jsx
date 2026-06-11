import React from "react";
import Hero from "./Hero";
import Trusted from "./Trusted";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import HowItWorks from "./HowItWorks";
import ResultDriven from "./ResultDriven";
import TemplateStyle from "./TemplateStyle";
import CTA from "../About/components/CTA";

const LandingPage = () => {
  return (
    <section>
      <Hero />
      <HowItWorks />
      <ResultDriven />
      <Trusted />
      <TemplateStyle />
      <Testimonials />
      <Faq />
      <CTA />
    </section>
  );
};

export default LandingPage;
