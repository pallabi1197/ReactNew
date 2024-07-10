import React from "react";
import HeroSection from "./HeroSection";
import aboutimg from "./Assets/About.jpg";

const About = () => {
  const data = {
    name: "Pallabi Das",
    image: { aboutimg },
  };
  return (
    <div>
      <HeroSection {...data} />
    </div>
  );
};

export default About;
