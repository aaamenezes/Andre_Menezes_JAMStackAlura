import styled from "styled-components"
import ImageBg from "../imageBg"
import Avatar from "../avatar"

const background = ({theme}) => {
  const color = theme.color.primary.dark
  const transparency = theme.backGroundTransparent.strong
  return color + transparency
}

const HeroStyled = styled.section`
  position: relative;
  margin-bottom: clamp(100px, 30%, 150px);
  line-height: 0;
  background-color: ${background};
`

function Hero() {
  return (
    <HeroStyled tag='section'>
      <ImageBg imageUrl='/images/code.jpg' />
      <Avatar imageUrl='/images/avatar.jpeg' />
    </HeroStyled>
  )
}

export default Hero