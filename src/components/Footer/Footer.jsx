import React from "react";
import { StyledFooter, Logo } from "./Footer.styled";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter>
      <Logo>Page disigned and developed by Ignacio Brezan</Logo>
      <div>     
      <Logo>
        <p>Contact to me... brezanignacio@gmail.com </p>
        <div>
          <FaGithub />
        </div>
        <div>
          <FaLinkedin />
        </div>
      </Logo>
      </div>
    </StyledFooter>
  );
}

export default Footer;
