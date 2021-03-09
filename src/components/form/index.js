import React, { useState } from 'react'

import styled from 'styled-components'

import Button from '../common/button'

const FormStyled = styled.form`
  width: 100%;
`

const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: ${ ({ theme }) => theme.fontWeight.bold }
  }
`

const InputStyled = styled.input`
  padding: 10px 5px;
  margin-bottom: 20px;
  border: 1px solid ${ ({ theme }) => theme.color.support.black };
  outline: none;
  border-radius: 0;
  resize: vertical;
  transition: ${ ({ theme }) => theme.transition.fast };

  &:focus {
    border: 1px solid ${ ({ theme }) => theme.color.primary.dark };
    font-weight: ${ ({ theme }) => theme.fontWeight.bold };
    color: ${ ({ theme }) => theme.color.support.white };
    background-color: ${ ({ theme }) => theme.color.primary.dark };
  }

  &:not(:focus) {
    font-style: italic;
  }
`

function Form() {
  const [ contactInfo, setContactInfo ] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name')
    setContactInfo({
      ...contactInfo,
      [fieldName]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // const url = 'https://contact-form-api-jamstack.herokuapp.com/message'
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormGroupStyled>
        <label htmlFor='name'>Seu nome</label>
        <InputStyled
          type='text'
          id='name'
          name='name'
          value={contactInfo.name}
          onChange={handleChange}
        />
      </FormGroupStyled>
      <FormGroupStyled>
        <label htmlFor='email'>Seu email</label>
        <InputStyled
          type='email'
          id='email'
          name='email'
          value={contactInfo.email}
          onChange={handleChange}
        />
      </FormGroupStyled>
      <FormGroupStyled>
        <label htmlFor='message'>Sua mensagem</label>
        <InputStyled
          as='textarea'
          rows='3'
          id='message'
          name='message'
          value={contactInfo.message}
          onChange={handleChange}
        />
      </FormGroupStyled>
      <Button
        variant='primary'
        disabled={
          contactInfo.name.length === 0
          || contactInfo.email.length === 0
          || contactInfo.message.length === 0
        }
      >
        Enviar
      </Button>
    </FormStyled>
  )
}

export default Form
