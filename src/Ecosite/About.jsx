import React from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "./context";
import { useEffect } from "react";



const About = () => {
  const {updateAboutpage} = useGlobalContext();

  useEffect(() => {
    updateAboutpage();
  }, []);

  // const data = {
  //   name: "My Profile",
  //   image: "./images/about.png",
  // };
  return (
    <div>
      < HeroSection/>
    </div>
  );
};

export default About;
