import React from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "./context";
import { useEffect } from "react";
import Services from "./Services";
import Contact from "./Contact";


const Home = () => {

const {updateHomepage} = useGlobalContext();

useEffect(() => {
  updateHomepage();
}, []);

  // const data = {
  //   name: "Creative Cloud",
  //   image: "./images/cat.jpg",
  // };
  return (
    <div>
      <HeroSection/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Home;
