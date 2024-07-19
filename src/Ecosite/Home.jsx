import React from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "./context";
import { useEffect } from "react";


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
    </div>
  );
};

export default Home;
