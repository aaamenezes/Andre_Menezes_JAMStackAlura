import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Title from '../../title'
import ImageBg from '../imageBg'
import Avatar from '../avatar'

import breakpointsMedia from '../../../utils/breakpointsMedia'
import propToStyle from '../../../utils/propToStyle'
import Container from '../container'

const background = ({ theme }) => {
  const color = theme.color.primary.dark
  const transparency = theme.backGroundTransparent.strong
  return color + transparency
}

const HeroStyled = styled.section`
  position: relative;
  line-height: ${ ({ phrase }) => (phrase ? 'inherit' : '0') };
  height: ${ ({ fullHeight }) => (fullHeight ? 'calc(100vh - 60px)' : '50vh') };
  background-color: ${ background };

  margin-bottom: ${ ({ fullHeight }) => (fullHeight
    ? '0'
    : breakpointsMedia({
      xs: '30%',
      md: 'margin-bottom: 0'
    })
  ) };

  ${ propToStyle('height') }
`

const TitleWrapper = styled(Container)`
  position: absolute;
  max-width: initial;
  bottom: 0;
  color: ${ ({ theme }) => theme.color.support.white };
`

function Hero({ imageURL, avatarURL, fullHeight, phrase }) {
  return (
    <HeroStyled
      tag='section'
      fullHeight={fullHeight}
    >
      <ImageBg imageURL={imageURL} fullHeight />
      {phrase && (
        <TitleWrapper>
          <Title textAlign='right'>{phrase}</Title>
        </TitleWrapper>
      )}
      {avatarURL && (
        <Avatar
          imageUrl={avatarURL}
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
      )}
    </HeroStyled>
  )
}

Hero.propTypes = {
  imageURL: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
  fullHeight: PropTypes.bool,
  phrase: PropTypes.string
}

Hero.defaultProps = {
  avatarURL: undefined,
  fullHeight: false,
  phrase: ''
}

export default Hero
