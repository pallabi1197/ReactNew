import React from "react";
import HeroSection from "./HeroSection";



const About = () => {
  const data = {
    name: "My Profile",
    image: "./images/about.png",
  };
  return (
    <div>
      < HeroSection {...data} />
    </div>
  );
};

export default About;
