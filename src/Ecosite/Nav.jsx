import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {

    const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
`; 

  return (
    <Nav>
      <div className="menu-icon">
        <ul className="nabvar-list">
          <li>
            <NavLink to="/" className="navbar-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/services" className="navbar-link">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );

 

};

export default Nav;
