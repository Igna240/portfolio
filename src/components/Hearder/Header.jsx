import React, { useState } from "react";
import {
  NavBar,
  Logo,
  NavBarList,
  StyledLink,
  StyledButton,
  NavBarListExtended,
  NavBarInner,
  StyledLinkExtended
} from "./Header.styled";
import { FaCode } from "react-icons/fa";
import { HiCode, HiMenu, HiOutlineX} from "react-icons/hi";

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <>
      <NavBar extendNavbar={extendNavbar}>
        <NavBarInner>

        <Logo>
          <HiCode />
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
        <StyledButton
          onClick={() => {
            setExtendNavbar((curt) => !curt);
          }}
          >
          {extendNavbar ? <HiOutlineX/> : <HiMenu/>}
        </StyledButton>
        </NavBarInner>
        {extendNavbar && (
          <NavBarListExtended>
            <li>
              <StyledLinkExtended onClick={() => {setExtendNavbar((curt) => !curt);}} to="/">About me</StyledLinkExtended>
            </li>
            <li>
              <StyledLinkExtended onClick={() => {setExtendNavbar((curt) => !curt);}} to="/skills">Skills</StyledLinkExtended>
            </li>
            <li>
              <StyledLinkExtended onClick={() => {setExtendNavbar((curt) => !curt);}} to="/portfolio">Portfolio</StyledLinkExtended>
            </li>
          </NavBarListExtended>
        )}
      </NavBar>
    </>
  );
}

export default Header;
