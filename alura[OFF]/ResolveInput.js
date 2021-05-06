import React from 'react'

import Input from './Input'
import InputRadioWrapper from './InputRadioWrapper'
import InputRadioItem from './InputRadioItem'
import Icon from './Icon'
import { theme } from './theme'
import Label from './Label'
import countries from './countries'

function ResolveInput(info, inputType, inputRadioInfos, onChange) {
  const primitiveTypes = [ 'text', 'date', 'number', 'email' ]
  const arrayBool = primitiveTypes.map(type => inputType === type)
  const isPrimitive = arrayBool.reduce((total, current) => total || current)

  if (isPrimitive) {
    return (
      <Input
        type={inputType}
        id={info}
        name={info}
        onChange={onChange}
        required
      />
    )
  }

  if (inputType === 'select') {
    const optionsElements = countries.map(country => (
      <option key={country.value}>
        {country.text}
      </option>
    ))
    return (
      <Input
        id={info}
        name={info}
        as='select'
        defaultValue='Brazil'
        backgroundColor='transparent'
        required
      >
        {optionsElements}
      </Input>
    )
  }

  if (inputType === 'radio') {
    const inputRadioElements = inputRadioInfos.map(input => (
      <InputRadioItem key={input.text}>
        <Input
          type='radio'
          id={input.text}
          name={info}
          value={input.image}
          display='none'
          width='auto'
        />
        <Label
          htmlFor={input.text}
          display='flex'
          flexDirection='column'
          alignItems='center'
          border={`1px solid ${ theme.color.blue }`}
          borderCollapse='collapse'
          fontSize={`${ theme.fontSize.small }`}
          cursor='pointer'
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
        {inputRadioElements}
      </InputRadioWrapper>
    )
  }
  return undefined
}

export default ResolveInput