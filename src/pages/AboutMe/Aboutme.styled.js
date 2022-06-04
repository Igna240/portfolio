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
    
    img{
        width: 20rem;
        border-radius: 50%;
    }
`;

export const StyledArticle = styled.article`
    color: var(--letters);
    padding: 7rem;
`;

