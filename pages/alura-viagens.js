import React from 'react'

import theme from './alura/theme'
import Container from '../src/components/common/container'
import GlobalStyle from './alura/GlobalStyle'
import Legend from './alura/Legend'
import Fieldset from './alura/Fieldset'
import FormGroup from './alura/FormGroup'
import Title from './alura/Title'

function AluraViagens() {
  return (
    <>
      <GlobalStyle />
      <Container
        backgroundColor={theme.color.white}
        paddingLeft='5%'
        paddingRight='5%'
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
              inputRadioInfos={[
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
              ]}
            />
          </Fieldset>
        </form>
      </Container>
    </>
  )
}

export default AluraViagens
