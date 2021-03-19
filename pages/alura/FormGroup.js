import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Label from './Label'
import ResolveInput from './ResolveInput'

const FormGroupStyled = styled.div`
  margin-bottom: 30px;
`

function FormGroup({ info, label, inputType, inputRadioInfos }) {
  return (
    <FormGroupStyled>
      {label && <Label htmlFor={info}>{label}</Label>}
      {ResolveInput(info, inputType, inputRadioInfos)}
    </FormGroupStyled>
  )
}

FormGroup.propTypes = {
  info: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputRadioInfos: PropTypes.arrayOf(PropTypes.object)
}

FormGroup.defaultProps = {
  label: null,
  inputRadioInfos: null
}

export default FormGroup
