import React from "react";
import Hero from "./Hero";
import Results from "./Results";
import ResumeSamples from "./ResumeSamples";
import Trusted from "./Trusted";

const LandingPage = () => {
  return (
    <section>
      <Hero />
      <Results />
      <ResumeSamples />
      <Trusted />
    </section>
  );
};

export default LandingPage;
