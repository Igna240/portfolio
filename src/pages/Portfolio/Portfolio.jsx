import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { mePortfolio } from "../../DATA/portfolio";
import { Wrapper, Card,Styled} from "./Portfolio.styled";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    setPortfolio(mePortfolio);
  }, []);

  return (
    <Wrapper>
      <Splide options={{
        perPage:2,
        gap: '5rem',
        arrows: false,
        pagination: true
        
      }}>
        {portfolio.map((proyect) => {
          return (
            <SplideSlide key={proyect.id}>
              <Card>
                <p>{proyect.title}</p>
                <img src={proyect.image} alt={proyect.title} />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default Portfolio;
