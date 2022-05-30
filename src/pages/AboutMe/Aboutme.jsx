import {useState, useEffect} from 'react'
import ProfileImage from '../../Assets/img/profile_image.jpg'
import {Container, ImageContainer, AboutMeContainer, StyledArticle} from './Aboutme.styled'

function Aboutme() {
  const [image, setImage] = useState();

  useEffect(()=>{
    setImage(ProfileImage)
  },[])

  return (
    <AboutMeContainer>
    <Container>
      <ImageContainer>
        <img src={image} alt="profile_image" />
      </ImageContainer>
      <StyledArticle>
        <p>Hola mi nombre es Ignacio Brezan</p>
      </StyledArticle>
    </Container>
    </AboutMeContainer>
  )
}

export default Aboutme