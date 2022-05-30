import React from 'react'
import {StyledFooter, Logo} from './Footer.styled'
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter>
      <div>Page disigned and developed by Ignacio Brezan</div>
      <Logo><FaGithub/><FaLinkedin/></Logo>
    </StyledFooter>
  )
}

export default Footer