import React from 'react'
import styled from 'styled-components'

const IconItem = styled.i`
  font-size: ${ ({ inline }) => (
    inline
      ? ({ theme }) => theme.fontSize.text
      : ({ theme }) => theme.fontSize.subTitle
  ) };

  color: ${ ({ theme }) => theme.color.primary.normal };
  transition: ${ ({ theme }) => theme.transition.medium };
  cursor: pointer;

  &:hover {
    transform: ${ ({ inline }) => (
    inline
      ? 'initial'
      : 'scale(1.5)'
  ) };
  }
`

function Icon({ name, inline }) {
  switch (name) {
  case 'bars':
    return <IconItem className='fas fa-bars' />
  case 'github':
    return <IconItem className='fab fa-github' />
  case 'twitter':
    return <IconItem className='fab fa-twitter' />
  case 'medium':
    return <IconItem className='fab fa-medium' />
  case 'external':
    return <IconItem className='fas fa-external-link-alt' inline={inline} />
  default:
    return undefined
  }
}

export default Icon
