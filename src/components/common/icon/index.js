import React from 'react'
import styled from 'styled-components'

const IconStyled = styled.i`
  font-size: ${ ({ inline }) => (
    inline
      ? ({ theme }) => theme.fontSize.text
      : ({ theme }) => theme.fontSize.subTitle
  ) };

  color: ${ ({ theme }) => theme.color.primary.dark };
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

export default function Icon({ name, inline }) {
  switch (name) {
  case 'bars':
    return <IconStyled className='fas fa-bars' />
  case 'github':
    return <IconStyled className='fab fa-github' />
  case 'twitter':
    return <IconStyled className='fab fa-twitter' />
  case 'medium':
    return <IconStyled className='fab fa-medium' />
  case 'linkedin':
    return <IconStyled className='fab fa-linkedin' />
  case 'external':
    return <IconStyled className='fas fa-external-link-alt' inline={inline} />
  default:
    return <IconStyled className='fas fa-question-circle' />
  }
}
