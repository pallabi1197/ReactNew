import React from 'react'
import HeroSection from './HeroSection'

const Home = () => {
  const data = {
    name: "Creative Cloud",
    image: "",
  };
  return (
    <div>
     < HeroSection {...data}/>
    </div>
  )
}

export default Home
