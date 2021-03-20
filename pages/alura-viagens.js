import React from 'react'

import theme from './alura/theme'
import Container from '../src/components/common/container'
import GlobalStyle from './alura/GlobalStyle'
import Legend from './alura/Legend'
import Fieldset from './alura/Fieldset'
import FormGroup from './alura/FormGroup'
import Title from './alura/Title'
import Button from './alura/Button'

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
        <form>
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
