import styled, { css } from "styled-components"
import ImageBg from "../imageBg"
import Avatar from "../avatar"
import breakpointsMedia from "../../../utils/breakpointsMedia"

const background = ({theme}) => {
  const color = theme.color.primary.dark
  const transparency = theme.backGroundTransparent.strong
  return color + transparency
}

const HeroStyled = styled.section`
  position: relative;
  
  line-height: 0;
  background-color: ${background};

  ${breakpointsMedia({
    xs: css`
      margin-bottom: clamp(100px, 30%, 150px);
    `,
    md: css`
      margin-bottom: 0;
    `
  })}
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