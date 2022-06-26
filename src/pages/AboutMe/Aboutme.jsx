import { useState, useEffect } from "react";
import ProfileImage from "../../Assets/img/profile_image.jpg";
import Typewriter from "typewriter-effect";
import {
  Container,
  ImageContainer,
  AboutMeContainer,
  StyledArticle,
} from "./Aboutme.styled";

function Aboutme() {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(ProfileImage);
  }, []);

  return (
    <AboutMeContainer>
      <Container>
        <ImageContainer>
          <img src={image} alt="profile_image" />
        </ImageContainer>
        <StyledArticle>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hey there! I'm Ignacio")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Software developer student")
                .pauseFor(1000)
                .start();
            }}
          />
          <br></br>
          <p>
            I started in the software development world in July 2021, and I have
            made a lot of projects in my institute, about Front-End, Back-End,
            and Infrastructure development. In the second quarter of 2022, I
            made a full work experience simulation with a team, and our
            performance was excellent. That gave me a lot of experience in
            teamwork and soft skills, so I'm really excited to show my abilities
            in a real job.
          </p>
        </StyledArticle>
      </Container>
    </AboutMeContainer>
  );
}

export default Aboutme;
