import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Assets/New_Project.png";
import Nav from "./Nav";
import styled from "styled-components";


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo"/>
      </NavLink>
    <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 100%;
  }
`;

export default Header;