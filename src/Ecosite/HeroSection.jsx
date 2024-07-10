import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Styles/button";
import styled from "styled-components";
import cute from "./Assets/cute.jpg";

const HeroSection = (props) => {
  return (
    <div>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">Welcome to</p>
            <h1 className="hero-heading">{props.name}</h1>
            <p className="hero-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <Button className="btn hireme-btn">
              <NavLink to="/contact">Hire me</NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <img src={props.image} width={400} className="hero-img" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;

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
    margin-bottom: 3.4rem;
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
  }
`;

export default HeroSection;
