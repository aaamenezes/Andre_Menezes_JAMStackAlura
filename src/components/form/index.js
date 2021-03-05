import React from 'react'
import styled from 'styled-components'

import FormGroup from './formGroup'
import Button from '../common/button'

const FormStyled = styled.form`
  width: 100%;
`

function Form() {
  return (
    <FormStyled>
      <FormGroup info='name' label='Seu nome' inputType='text' />
      <FormGroup info='email' label='Seu email' inputType='email' />
      <FormGroup info='message' label='Sua mensagem' inputType='textarea' />
      <Button variant='primary'>
        Enviar
      </Button>
    </FormStyled>
  )
}

export default Form
