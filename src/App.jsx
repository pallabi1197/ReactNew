import React from "react";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Dedropdown from "./Components2/Dedropdown";
import ShowStateCity from "./Components2/ShowStateCity";
import Testing from "./Components2/Testing";
import Home from "./Ecowebsite/Home";
import About from "./Ecowebsite/About";
import Services from "./Ecowebsite/Services";
import Contact from "./Ecowebsite/Contact";

function App() {
  return (
    <>
      {/* <LoginSignup/> */}

      {/* <Dedropdown/> */}
       <Testing />
      <ShowStateCity/>
     
      {/* <Home/>
      <About/>
      <Services/>
      <Contact/> */}
    </>
  );
}

export default App;
