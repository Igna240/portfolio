import React from "react";
import { StyledFooter, Logo, Logos } from "./Footer.styled";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter>
      <Logo>
        <p>Page disigned and developed by Ignacio Brezan</p>
      </Logo>
      <div>
        <Logos>
          <p>Contact to me... brezanignacio@gmail.com </p>
          <a href="https://github.com/Igna240" target="_blank"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/ignacio-brezan/" target="_blank" ><FaLinkedin /></a>
        </Logos>
      </div>
    </StyledFooter>
  );
}

export default Footer;
