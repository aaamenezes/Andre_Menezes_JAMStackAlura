import styled from "styled-components"
import ImageBg from "../imageBg"
import Avatar from "../avatar"

const background = ({theme}) => {
  const color = theme.color.primary.dark
  const level = theme.backGroundTransparent.strong
  return color + level
}

const Film = styled.section`
  position: relative;
  line-height: 0;
  background-color: ${background};
`

function Hero() {
  return (
    <Film tag='section'>
      <ImageBg imageUrl='/images/code.jpg' />
      <Avatar imageUrl='/images/avatar.jpg' />
    </Film>
  )
}

export default Hero