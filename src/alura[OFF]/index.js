import React from 'react'

import { theme } from './theme'
import Container from '../components/common/container'
import GlobalStyle from './GlobalStyle'
import Legend from './Legend'
import Fieldset from './Fieldset'
import FormGroup from './FormGroup'
import Title from './Title'
import Button from './Button'

function AluraViagens() {
  const inputRadioInfos = [
    {
      text: 'Transferência',
      image: 'money'
    },
    {
      text: 'Cartão',
      image: 'card'
    },
    {
      text: 'Paypal',
      image: 'paypal'
    }
  ]

  // function handleChangeCPF(event) {
  //   console.log(event.target.value.length)

  //   if (event.target.value.length === 3) { // Insert first dot
  //     event.target.value = `${ event.target.value }.`
  //   }
  //   if (event.target.value.length === 7) { // Insert second dot
  //     event.target.value = `${ event.target.value }.`
  //   }
  //   if (event.target.value.length === 11) { // Insert hyphen
  //     event.target.value = `${ event.target.value }-`
  //   }
  //   if (event.target.value.length === 15) { // Limit
  //     event.target.value = event.target.value.slice(0, -1)
  //   }
  // }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = {}
    const formNames = [
      'phone',
      'email',
      'cpf',
      'sourceCountry',
      'lastName',
      'name',
      'paymentMethod',
      'destinyPlace',
      'sourcePlace',
      'returnDate',
      'sourceDate'
    ]
    formNames.forEach(name => {
      formData[name] = event.target.querySelector(`[name=${ name }`).value
    })

    // console.log(formData)
  }

  return (
    <>
      <GlobalStyle />
      <Container
        backgroundColor={theme.color.white}
        padding='5%'
        width='90%'
        boxShadow={`0 0 20px -5px ${ theme.color.black }`}
      >
        <Title>Alura Viagens</Title>
        <form onSubmit={handleSubmit}>
          <Fieldset>
            <Legend>Quando será a sua viagem?</Legend>
            <FormGroup
              info='sourceDate'
              label='Data de saída'
              inputType='date'
            />
            <FormGroup
              info='returnDate'
              label='Data de retorno'
              inputType='date'
            />
            <FormGroup
              info='sourcePlace'
              label='Local de origem'
              inputType='text'
            />
            <FormGroup
              info='destinyPlace'
              label='Local de chegada'
              inputType='text'
            />
          </Fieldset>
          <Fieldset>
            <Legend>Como será o pagamento?</Legend>
            <FormGroup
              info='paymentMethod'
              inputType='radio'
              inputRadioInfos={inputRadioInfos}
            />
          </Fieldset>
          <Fieldset>
            <Legend>Quem vai viajar?</Legend>
            <FormGroup
              info='name'
              label='Nome'
              inputType='text'
            />
            <FormGroup
              info='lastName'
              label='Sobrenome'
              inputType='text'
            />
            <FormGroup
              info='sourceCountry'
              label='País de residência'
              inputType='select'
            />
            <FormGroup
              info='cpf'
              label='CPF'
              inputType='text'
              // onChange={handleChangeCPF}
            />
            <FormGroup
              info='email'
              label='Email'
              inputType='email'
            />
            <FormGroup
              info='phone'
              label='Telefone'
              inputType='text'
            />
          </Fieldset>
          <Button text='COMPRAR' />
        </form>
      </Container>
    </>
  )
}

export default AluraViagens
