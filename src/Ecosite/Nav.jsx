import React, { useState } from "react";
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
            font-size: 0.8rem;
            font-weight:600;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
     
  `;

  return (
    <Nav>
      <ul className="navbar-list">
        <li>
          <NavLink className="navbar-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Nav;
