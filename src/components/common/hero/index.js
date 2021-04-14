import React from 'react'
import styled, { css } from 'styled-components'
import ImageBg from '../imageBg'
import Avatar from '../avatar'
import breakpointsMedia from '../../../utils/breakpointsMedia'

const background = ({ theme }) => {
  const color = theme.color.primary.dark
  const transparency = theme.backGroundTransparent.strong
  return color + transparency
}

const HeroStyled = styled.section`
  position: relative;
  
  line-height: 0;
  background-color: ${ background };

  ${ breakpointsMedia({
    xs: css`
      margin-bottom: clamp(100px, 30%, 150px);
    `,
    md: css`
      margin-bottom: 0;
    `
  }) }
`

function Hero() {
  return (
    <HeroStyled tag='section'>
      <ImageBg imageUrl='/images/code.jpg' />
      <Avatar
        imageUrl='/images/avatar.jpeg'
        position='absolute'
        transform={{
          xs: 'translate(-50%, -50%)',
          md: 'translate(0, -50%)'
        }}
        top={{
          xs: '100%',
          md: 'initial'
        }}
        left={{
          xs: '50%',
          md: '10%'
        }}
      />
    </HeroStyled>
  )
}

export default Hero
