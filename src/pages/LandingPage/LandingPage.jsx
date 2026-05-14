import React from "react";
import Hero from "./Hero";
import Results from "./Results";
import ResumeSamples from "./ResumeSamples";
import Trusted from "./Trusted";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

const LandingPage = () => {
  return (
    <section>
      <Hero />
      <Results />
      <Trusted />
      <ResumeSamples />
      <Testimonials />
      <Faq />
    </section>
  );
};

export default LandingPage;
