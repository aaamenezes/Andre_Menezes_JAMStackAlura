import React, { useState } from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import FormGroup from './formGroup'
import Button from '../common/button'

const FormStyled = styled.form`
  width: 100%;
`

function Form({ formData }) {
  const [ formEmpty = setFormEmpty ] = useState(true)
  const formGroups = formData.map(group => (
    <FormGroup
      info={group.info}
      label={group.label}
      inputType={group.inputType}
      key={group.label}
    />
  ))

  return (
    <FormStyled>
      {formGroups}
      <Button
        variant='primary'
        disabled={formEmpty}
      >
        Enviar
      </Button>
    </FormStyled>
  )
}

Form.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Form
