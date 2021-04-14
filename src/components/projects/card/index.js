import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from '../../common/container'
import breakpointsMedia from '../../../utils/breakpointsMedia'
import Title from '../../title'

const CardStyled = styled.article`
  ${ breakpointsMedia({
    xs: ({ highLight }) => highLight && 'grid-column: initial;',
    md: ({ highLight }) => highLight && 'grid-column: 1 / 3;'
  }) }

  text-align: center;
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
  }

  img {
    ${ breakpointsMedia({
    xs: ({ highLight }) => (highLight ? 'width: 100%;' : 'width: 50%;'),
    md: ({ highLight }) => (highLight ? 'width: 50%;' : 'width: 100%;')
  }) }
  }
`

CardStyled.TextWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;

  p {
    margin: 0;
  }
`

function Card({ cover, title, text, url, highLight }) {
  return (
    <CardStyled highLight={highLight}>
      <Link href={url}>
        <a href={url}>
          <img src={cover} alt={`${ title } - ${ text }`} />
          <CardStyled.TextWrapper>
            <Title margin='0'>
              {title}
            </Title>
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
