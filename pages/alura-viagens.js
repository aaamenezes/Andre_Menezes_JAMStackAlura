import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Container from '../src/components/common/container'

const theme = {
  borderRadius: '5px',
  color: {
    blue: '#35B6FF',
    darkBlue: '#0094E8',
    white: '#FFFFFF',
    black: '#333333'
  },
  fontSize: {
    // '39px',
    title: '31px',
    legend: '25px',
    label: '20px',
    text: '16px',
    small: '12px'
  },
  fontWeight: {
    thin: '200',
    regular: '400',
    bold: '700'
  }
}

const Background = createGlobalStyle`
  body {
    background-color: ${ theme.color.blue };
  }
`

const Title = styled.h1`
  margin-top: 0;
  padding-top: clamp(10px,5%,30px);
  font-size: ${ theme.fontSize.title };
  text-align: left;
  color: ${ theme.color.darkBlue };
`

const Fieldset = styled.fieldset`
  padding: 0;
  border: none;
`

const FormSubtitle = styled.legend`
  font-size: ${ theme.fontSize.legend };
  font-weight: ${ theme.fontWeight.regular };
  text-align: left;
`

const Label = styled.label`
  font-size: ${ theme.fontSize.label };
`

const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: 1px solid ${ theme.color.blue };
  border-radius: ${ theme.borderRadius };
  outline: none;
`

function AluraViagens() {
  return (
    <>
      <Background />
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
            <FormSubtitle>Quando será a sua viagem?</FormSubtitle>
            <Label htmlFor='sourceDate'>Data de saída</Label>
            <Input id='sourceDate' />
          </Fieldset>
        </form>
      </Container>
    </>
  )
}

export default AluraViagens
