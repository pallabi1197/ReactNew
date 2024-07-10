import React from "react";
import HeroSection from "./HeroSection";



const About = () => {
  const data = {
    name: "Pallabi Das",
    image: "./assets/About.jpg",
  };
  return (
    <div>
      < HeroSection {...data} />
    </div>
  );
};

export default About;
