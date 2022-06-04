import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const size = {
  tablet: '768px'
}

export const Wrapper = styled.div`
  padding: 25vh 10rem;

  @media (max-width: ${size.tablet} ){
    padding: 30vh 1rem;
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
  
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    width: 80%;
    color: black;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
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