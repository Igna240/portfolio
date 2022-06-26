import React, { useEffect, useState } from 'react'
import { generalSkills, backendSkills, frontendSkills } from "../../DATA/skills";
import { Wrapper, Card, StyledSplide, StyledSplideSlide} from "./Skills.styled";
import "@splidejs/splide/dist/css/splide.min.css";

function Skills() {

  const [theGeneralSkills, setTheGeneralSkills] = useState([]);
  const [theBackendSkills, setTheBackendSkills] = useState([]);
  const [theFrontendSkills, setTheFrontendSkills] = useState([]);

  useEffect(()=>{
    setTheGeneralSkills(generalSkills)
    setTheBackendSkills(backendSkills)
    setTheFrontendSkills(frontendSkills)
  },[])

  return (
    <Wrapper>
      <div>
      <h2>General</h2>
      <StyledSplide options={{
        perPage:4,
        gap: '0rem',
        arrows: true,
        pagination: false,
        breakpoints:{
          768:{
            perPage:2
          }
        }
        
      }}>
        {theGeneralSkills.map((skill) => {
          return (
            <StyledSplideSlide key={skill.id}>
              <Card>
                <p>{skill.title}</p>
              </Card>
            </StyledSplideSlide>
          );
        })}
      </StyledSplide>
      </div>
      <div>
      <h2>BackEnd</h2>
      <StyledSplide options={{
        perPage:4,
        gap: '0rem',
        arrows: true,
        pagination: false,
        breakpoints:{
          768:{
            perPage:2
          }
        }
        
      }}>
        {theBackendSkills.map((skill) => {
          return (
            <StyledSplideSlide key={skill.id}>
              <Card>
                <p>{skill.title}</p>
              </Card>
            </StyledSplideSlide>
          );
        })}
      </StyledSplide>
      </div>
      <div>
      <h2>FrontEnd</h2>
      <StyledSplide options={{
        perPage:4,
        gap: '0rem',
        arrows: true,
        pagination: false,
        breakpoints:{
          768:{
            perPage:2
          }
        }
        
      }}>
        {theFrontendSkills.map((skill) => {
          return (
            <StyledSplideSlide key={skill.id}>
              <Card>
                <p>{skill.title}</p>
              </Card>
            </StyledSplideSlide>
          );
        })}
      </StyledSplide>
      </div>
    </Wrapper>
  )
}

export default Skills