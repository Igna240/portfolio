import styled from "styled-components";

const size = {
  tablet: '768px'
}

export const StyledFooter = styled.footer`
  color: var(--letters);
  transition: 0.5s;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0em;
  background-color: var(--secundary);
  opacity: 0.7;
  bottom: 0;
  @media (max-width: ${size.tablet} ){
    flex-direction: column-reverse;
  }

`;

export const Logo = styled.div`
    padding: 1rem 2rem 1rem 1rem;
    display: flex;
    div{
        padding: 0 0.5rem;
    }
`;