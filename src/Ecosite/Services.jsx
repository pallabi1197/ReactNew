import React from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return (
    <Wrapper className="section">
      <h2 className="common-heading" style={{ fontSize: "3.4rem" }}>
        Our Services
      </h2>
      <div className="container grid grid-three-column" style={{ gap: "3rem" }}>
        {services.map((curEle) => {
          const { id, title, image } = curEle;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt="" />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>

                <NavLink to="/services">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin-top: 4rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem 1rem;
    }

    h3 {
      font-weight: 400;
      font-size: 1.1rem;
      text-align: center;
    }
    .btn {
      margin: auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;

      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      width: 200px;
      height: 180px;
      margin-top: 1.5rem;

      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
