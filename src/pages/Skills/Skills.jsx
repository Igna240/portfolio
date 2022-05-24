import React, { useEffect, useState } from 'react'
import { meSkills } from "../../DATA/skills";
import { Wrapper, Card, StyledSplide, StyledSplideSlide} from "./Skills.styled";
import "@splidejs/splide/dist/css/splide.min.css";

function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    setSkills(meSkills)
  },[])

  return (
    <Wrapper>
      <StyledSplide options={{
        perPage:4,
        gap: '0rem',
        arrows: false,
        pagination: false
        
      }}>
        {skills.map((skill) => {
          return (
            <StyledSplideSlide key={skill.id}>
              <Card>
                <p>{skill.title}</p>
              </Card>
            </StyledSplideSlide>
          );
        })}
      </StyledSplide>

    </Wrapper>
  )
}

export default Skills