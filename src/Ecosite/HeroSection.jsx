import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const HeroSection = () => {
  const { name, image,fname,age } = useGlobalContext();
  return (
    <div>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">Welcome to</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">
              {fname} his age is {age} is a Mean-Stack Developer has proficiency in technical skills
            </p>

           
              <NavLink to="/contact" className="btn-hero">Hire me</NavLink>
        
          </div>
          <div className="section-hero-image">
            <img src={image} width={400} className="hero-img" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  background: #cdeeff;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 8rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
  }

  .hero-para {
    margin-top: 1.5rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
    .btn-hero {
      width: 40rem;
    }

    .hero-para {font-size:2rem;
    font-family:arial;}
  }
`;

export default HeroSection;
