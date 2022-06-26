import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const size = {
  tablet: '768px'
}

export const Wrapper = styled.div`
  padding: 25vh 10rem;
  height: 100vh;

  @media (max-width: ${size.tablet} ){
    padding: 35vh 1rem 0 1rem;
  }
`;

export const StyledSplide = styled(Splide)`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  min-height: 16rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;     
    h4{
    z-index: 5;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    width: 80%;
    color: black;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    display: flex;
    font-weight: 600;
    color: var(--letters);
    background-color: var(--secundary);
    opacity: 0.9;
    width: 100%;
    justify-content: center;
    align-items: center;
    bottom: 0;
    height: 3rem;
    
    }
    p{
    }
    
  
  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${size.tablet} ){
    min-height: 13rem;
  }
  
`