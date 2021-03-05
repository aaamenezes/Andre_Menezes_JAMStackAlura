import React from 'react'
import Link from 'next/link'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import Container from '../../common/container'
import SubTitle from '../../text/subtitle'

import breakpointsMedia from '../../../utils/breakpointsMedia'

const CardStyled = styled.article`
  ${ breakpointsMedia({
    xs: ({ highLight }) => (highLight ? 'width: 100%;' : 'width: 100%;'),
    md: ({ highLight }) => (
      highLight
        ? css`width: 100%;`
        : css`width: 50%; margin-left: auto; margin-right: auto;`
    )
  }) };

  margin: clamp(30px, 10%, 60px) 0;
  background-color: ${ ({ theme }) => theme.color.support.white };
  box-shadow: ${ ({ theme }) => theme.boxShadow.low };
  transition: ${ ({ theme }) => theme.transition.medium };

  &:hover {
    box-shadow: ${ ({ theme }) => theme.boxShadow.high };
  }

  a {
    ${ breakpointsMedia({
    xs: ({ highLight }) => (highLight ? 'display: block;' : 'display: flex;'),
    md: ({ highLight }) => (highLight ? 'display: flex;' : 'display: block;')
  }) };

    img {
      ${ breakpointsMedia({
    xs: ({ highLight }) => (highLight ? 'width: 100%;' : 'width: 50%;'),
    md: ({ highLight }) => (highLight ? 'width: 50%;' : 'width: 100%;')
  }) }
    }
  }
`

CardStyled.TextWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${ ({ highLight }) => (!highLight ? 'center' : false) };
  width: ${ ({ highLight }) => (!highLight ? '50%' : false) };
  padding: 5%;
`

function Card({
  cover, title, text, url, highLight
}) {
  return (
    <CardStyled highLight={highLight}>
      <Link href={url}>
        <a href={url}>
          <img src={cover} alt={`${ title } - ${ text }`} />
          <CardStyled.TextWrapper highLight={highLight}>
            <SubTitle margin='0'>
              {title}
            </SubTitle>
            {highLight && <p>{text}</p>}
          </CardStyled.TextWrapper>
        </a>
      </Link>
    </CardStyled>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  highLight: PropTypes.bool.isRequired
}

export default Card
