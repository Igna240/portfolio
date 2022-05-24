import React from "react";
import { NavBar, Logo, NavBarList, StyledLink } from "./Header.styled";
import { FaCode } from "react-icons/fa";

function Header() {
  return (
    <>
      <NavBar>
        <Logo>
          <FaCode />
        </Logo>
        <NavBarList>
          <li>
            <StyledLink to="/">About me</StyledLink>
          </li>
          <li>
            <StyledLink to="/skills">Skills</StyledLink>
          </li>
          <li>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
          </li>
        </NavBarList>
      </NavBar>
    </>
  );
}

export default Header;
