import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const size = {
  tablet: '768px'
}

export const Wrapper = styled.div`
  padding: 20vh 11rem;
  height: 100vh;
  h2{
    color: var(--letters);
    padding: 0 0 0 0.5rem;
  }
  @media (max-width: ${size.tablet} ){
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledSplide = styled(Splide)`
    padding: 1rem 0;
`; 

export const StyledSplideSlide = styled(SplideSlide)`
`;

export const Card = styled.div`
  min-height: 5rem;
  overflow: hidden;
  position: relative;
  background-color: rgba(var(--primary), 0.3);
  
  p {
    position: absolute;
    z-index: 10;
    top: 30%;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: var(--letters);
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
  }
  
  @media (max-width: ${size.tablet} ){
    p{
      font-size: 1.7rem;
    }
  }

`