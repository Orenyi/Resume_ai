import React from "react";
import Hero from "./Hero";
import Results from "./Results";
import ResumeSamples from "./ResumeSamples";
import Trusted from "./Trusted";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <section>
      <Hero />
      <Results />
      <Trusted />
      <ResumeSamples />
      <Testimonials />
    </section>
  );
};

export default LandingPage;
