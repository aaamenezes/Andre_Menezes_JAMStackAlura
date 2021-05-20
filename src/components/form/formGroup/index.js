import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import Input from '../input'

const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: ${ ({ theme }) => theme.fontWeight.bold }
  }
`

export default function FormGroup({ info, label, inputType }) {
  return (
    <FormGroupStyled>
      <label htmlFor={info}>
        { label }
      </label>
      <Input inputType={inputType} info={info} />
    </FormGroupStyled>
  )
}

FormGroup.propTypes = {
  info: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string
}

FormGroup.defaultProps = {
  inputType: 'text'
}
