import styled from "styled-components";


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

`;

export const Logo = styled.div`
    padding: 1rem 2rem 1rem 1rem;
    display: flex;
    div{
        padding: 0 0.5rem;
    }
`;