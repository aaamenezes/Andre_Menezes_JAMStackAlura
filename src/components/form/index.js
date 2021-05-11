import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Error from './error'
import Loading from './loading'
import Success from './success'
import LinkButton from '../common/linkButton'

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

function Form({ setModalDisplay }) {
  const [ contactInfo, setContactInfo ] = useState({
    name: '',
    email: '',
    message: ''
  })

  const formStates = [ 'WAITING', 'SENDING', 'DONE', 'ERROR' ]
  const [ formState, setFormState ] = useState(formStates[0])

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name')
    setContactInfo({
      ...contactInfo,
      [fieldName]: event.target.value
    })
  }

  function closeModal() {
    setTimeout(() => {
      setModalDisplay(false)
    }, 6000)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setFormState(formStates[1])
    const url = 'https://contact-form-api-jamstack.herokuapp.com/message'

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactInfo)
    })
      .then(serverResponse => {
        if (serverResponse.ok && serverResponse.status === 201) {
          setFormState(formStates[2])
          return serverResponse.json()
        }
        closeModal()
        throw new Error('Não foi possível cadastrar o usuário agora :(')
      })
      .then(convertedResponse => {
        setFormState(formStates[2])
        // eslint-disable-next-line no-console
        console.log(convertedResponse)
        closeModal()
      })
  }

  return (
    <>
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
          <label htmlFor='email'>
            Seu email
          </label>
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
        <LinkButton
          variant='primary'
          disabled={
            contactInfo.name.length === 0
          || contactInfo.email.length === 0
          || contactInfo.message.length === 0
          }
        >
          Enviar
        </LinkButton>
      </FormStyled>
      {formState === formStates[1] && <Loading />}
      {formState === formStates[2] && <Success />}
    </>
  )
}

Form.propTypes = {
  setModalDisplay: PropTypes.func.isRequired
}

export default Form
