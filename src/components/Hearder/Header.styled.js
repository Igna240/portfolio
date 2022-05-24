import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  color: var(--letters);
  transition: 0.5s;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0em;
  background-color: var(--secundary);
  opacity: 0.7;

`;

export const Logo = styled.div`
    padding: 1rem;
`;

export const NavBarList = styled.ul`
    display: flex;
    padding-right: 1em;
    margin: 0;

    li{
        display: flex;
        padding: 0;
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