import styled from 'styled-components'
import {Link} from 'react-router-dom'

const size = {
    tablet: '768px'
}

export const NavBar = styled.nav`
  color: var(--letters);
  transition: 0.5s;
  position: fixed;
  width: 100vw;
  height: ${(props)=>(props.extendNavbar ? "100vh": "auto")};
  padding: 0em;
  background-color: var(--secundary);
  opacity: ${(props)=>(props.extendNavbar ? "1" : "0.7")};
  z-index: 10;
`;

export const NavBarInner = styled.div`
display: flex;
justify-content: space-between;
`;

export const Logo = styled.div`
    padding: 1rem;
    @media (max-width: ${size.tablet} ){
    font-size: 2rem;
  }

`;

export const NavBarList = styled.ul`
    display: flex;
    padding-right: 1em;
    margin: 0;

    li{
        display: flex;
        padding: 0;
    }
    @media (max-width: ${size.tablet} ){
    display: none;
  }
`;

export const NavBarListExtended = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 0 0;
    li{
      padding: 2rem;
    }

`;

export const StyledLink = styled(Link)`
    padding: 1em 0.5em;
    text-decoration: none;
    color: var(--letters);

    &:hover{
        transition: 0.2s;
        color: var(--secundary);
        background-color: var(--letters);
    }
`;
export const StyledLinkExtended = styled(Link)`
    padding: 1rem 2rem;
    text-decoration: none;
    color: var(--letters);
    font-size: 2rem;

    &:hover{
        transition: 0.2s;
        color: var(--secundary);
        background-color: var(--letters);
    }
`;

export const StyledButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  color: var(--letters);
  font-size: 3rem;
  
  @media (max-width: ${size.tablet} ){
    display: block;
    position: absolute;
    top:0.5rem;
    right: 0.5rem;
  }
`;

