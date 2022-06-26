import styled from "styled-components";

const size = {
    tablet: '768px'
}

export const AboutMeContainer = styled.div`  
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (max-width: ${size.tablet} ){
    flex-direction: column;
  }

`;

export const ImageContainer = styled.div`
    display: block;
    margin: 0rem 4rem 0rem 0rem;
    
    img{
        width: 20rem;
        border-radius: 50%;
        pointer-events: none;        
    }
    @media (max-width: ${size.tablet} ){
    margin: 0;
  }
    
`;

export const StyledArticle = styled.article`
    color: var(--letters);
    margin: 0rem 0rem 0rem 4rem;
    padding: 1rem 2rem;
    width: 45%;
    text-align: center;
    background-color: rgba(var(--primary),0.5);
    //box-shadow: 0rem 0rem 0.3rem 0.5rem rgba(var(--primary),0.5);
    @media (max-width: ${size.tablet} ){
    padding: 1rem 0.5rem;
    margin: 4rem 0rem 0rem 0rem;
    width: 100%;
  }
`;

