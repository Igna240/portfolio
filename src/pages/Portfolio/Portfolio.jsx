import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { mePortfolio } from "../../DATA/portfolio";
import { Wrapper, Card, Styled } from "./Portfolio.styled";
import { FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    setPortfolio(mePortfolio);
  }, []);

  return (
    <Wrapper>
      <Splide
        options={{
          perPage: 2,
          gap: "5rem",
          arrows: true,
          pagination: true,
          breakpoints: {
            768: {
              perPage: 1,
              pagination: false
            },
          },
        }}
      >
        {portfolio.map((proyect) => {
          return (
            <SplideSlide key={proyect.id}>
              <Card>
                <a href={proyect.url} target="_blank">
                  <h4>
                    <p>{proyect.title}</p>
                  </h4>
                <img src={proyect.image} alt={proyect.title} />
                </a>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default Portfolio;
