import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from './theme'

const ButtonStyled = styled.button`
  position: relative;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  font-weight: ${ theme.fontWeight.bold };
  border-radius: ${ theme.borderRadius };
  color: ${ theme.color.white };
  overflow: hidden;
  background-color: ${ theme.color.blue };

  span {
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: ${ theme.color.darkBlue };
    transition: ${ theme.transition.slow };
  }

  &:hover, &:focus {
    &::before {
      width: 100%;
    }
  }
`

function Button({ text }) {
  return (
    <ButtonStyled type='submit'>
      <span>
        {text}
      </span>
    </ButtonStyled>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

Button.defaultProps = {
  text: 'ENVIAR'
}

export default Button
