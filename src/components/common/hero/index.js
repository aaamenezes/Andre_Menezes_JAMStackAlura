import styled from "styled-components"
import ImageBg from "../imageBg"
import Avatar from "../avatar"

const background = ({theme}) => {
  const color = theme.color.primary.dark
  const transparency = theme.backGroundTransparent.strong
  return color + transparency
}

const Film = styled.section`
  position: relative;
  margin-bottom: 30%;
  line-height: 0;
  background-color: ${background};
`

function Hero() {
  return (
    <Film tag='section'>
      <ImageBg imageUrl='/images/code.jpg' />
      <Avatar imageUrl='/images/avatar.jpeg' />
    </Film>
  )
}

export default Hero