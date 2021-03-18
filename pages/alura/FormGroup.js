import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Input from './Input'
import Label from './Label'
import InputRadioWrapper from './InputRadioWrapper'
import InputRadioItem from './InputRadioItem'
import Icon from './Icon'
import theme from './theme'

const FormGroupStyled = styled.div`
  margin-bottom: 30px;
`

function FormGroup({ info, label, inputType, inputRadioInfos }) {
  function resolveInput() {
    if (inputType === 'text' || inputType === 'date') {
      return <Input type={inputType} id={info} name={info} />
    }
    if (inputType === 'radio') {
      const inputsRadioElements = inputRadioInfos.map(input => (
        <InputRadioItem>
          <Input
            type='radio'
            id={input.text}
            name={info}
            display='none'
            width='auto'
          />
          <Label
            htmlFor={input.text}
            display='flex'
            flexDirection='column'
            alignItems='center'
            border={`1px solid ${ theme.color.blue }`}
            userSelect='none'
            key={input.text}
          >
            <Icon type={input.image} />
            {input.text}
          </Label>
        </InputRadioItem>
      ))
      return (
        <InputRadioWrapper>
          {inputsRadioElements}
        </InputRadioWrapper>
      )
    }
    return undefined
  }

  return (
    <FormGroupStyled>
      {label && <Label htmlFor={info}>{label}</Label>}
      {resolveInput()}
    </FormGroupStyled>
  )
}

FormGroup.propTypes = {
  info: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputRadioInfos: PropTypes.arrayOf(PropTypes.object)
}

FormGroup.defaultProps = {
  label: null,
  inputRadioInfos: null
}

export default FormGroup
