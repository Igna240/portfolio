import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";


export const Wrapper = styled.div`
  padding: 20vh 11rem;
`;

export const StyledSplide = styled(Splide)`
    
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
    width: 80%;
    color: var(--letters);
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
`