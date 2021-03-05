import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const InputStyled = styled.input`
  padding: 10px 5px;
  margin-bottom: 20px;
  border: 1px solid ${ ({ theme }) => theme.color.support.black };
  outline: none;
  border-radius: 0;
  resize: vertical;

  &:focus {
    border: none;
    font-weight: ${ ({ theme }) => theme.fontWeight.bold };
    color: ${ ({ theme }) => theme.color.support.white };
    background-color: ${ ({ theme }) => theme.color.primary.dark };
  }

  &:not(:focus) {
    font-style: italic;
  }
`

function Input({ inputType, info }) {
  if (inputType === 'textarea') {
    return <InputStyled as='textarea' rows='3' id={info} name={info} />
  }

  return (
    <InputStyled type={inputType} id={info} name={info} />
  )
}

Input.propTypes = {
  inputType: PropTypes.string,
  info: PropTypes.string.isRequired
}

Input.defaultProps = {
  inputType: 'text'
}

export default Input
