import React from 'react'
import HeroSection from './HeroSection';

const Services = () => {
  const data = {
    name: "Our Services",
    image: "./images/services.png",
  };
  return (
    <div>
      < HeroSection {...data} />
    </div>
  );
};

export default Services
