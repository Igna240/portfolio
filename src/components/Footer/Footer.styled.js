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
    top: 100vh;
    position: absolute;
    bottom: auto;

  }

`;

export const Logo = styled.div`
    padding: 1rem 2rem 1rem 1rem;
    display: flex;
    justify-content: center;
    p{
      text-align: center;
    }
    @media (max-width: ${size.tablet} ){
      padding: 1rem;
    }
   
`;
export const Logos = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    a{
        padding: 0 0 0 1rem;
        text-decoration: none;
        :link{
          text-decoration: none;
          color: var(--letters);
        }
        :visited{
          text-decoration: none;
          color: var(--letters);
        }
    }

    p{
      padding: 0 1rem 0 0;
    }
    @media (max-width: ${size.tablet} ){
      a{
        font-size: 1.5rem;
      }
  }
    
`;