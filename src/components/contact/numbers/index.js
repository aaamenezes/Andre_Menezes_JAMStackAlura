import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../../title'

const Article = styled.article`
  margin-bottom: 30px;
`

export default function Numbers({ number, text }) {
  return (
    <Article>
      <Title margin='0'>{number}</Title>
      <Title titleTag='h3' textAlign='center'>{text}</Title>
    </Article>
  )
}

Numbers.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
