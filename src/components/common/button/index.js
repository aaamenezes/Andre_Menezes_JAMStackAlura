import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonStyled = styled.a`
  padding: 5px 10px;
  border: 1px solid ${ ({ theme }) => theme.color.primary.normal };
  text-transform: uppercase;
  font-weight: ${ ({ theme }) => theme.fontWeight.bold };
  transition: ${ ({ theme }) => theme.transition.fast };
  cursor: pointer;

  ${ ({ variant, theme }) => {
    if (variant === 'primary') {
      return {
        color: theme.color.support.white,
        backgroundColor: theme.color.primary.normal
      }
    }

    if (variant === 'secondary') {
      return {
        color: theme.color.support.black,
        backgroundColor: theme.color.support.white
      }
    }

    return undefined
  } };

  &:hover {
    opacity: ${ ({ theme }) => theme.opacity.medium };
  }

  &:focus {
    ${ ({ variant, theme }) => {
    if (variant === 'primary') {
      return {
        backgroundColor: theme.color.primary.dark
      }
    }

    if (variant === 'secondary') {
      return {
        color: theme.color.support.white,
        backgroundColor: theme.color.support.dark
      }
    }

    return undefined
  } };
  }

  &[disabled] {
    opacity: ${ ({ theme }) => theme.opacity.transparent };
    cursor: not-allowed;
  }
`

function Button({ variant, children, url, handleClick, disabled }) {
  if (url) {
    return (
      <Link href={url} passHref>
        <ButtonStyled variant={variant}>
          {children}
        </ButtonStyled>
      </Link>
    )
  }

  return (
    <ButtonStyled
      variant={variant}
      as='button'
      disabled={disabled}
      onClick={handleClick ? () => handleClick(true) : undefined}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  url: null,
  disabled: false,
  handleClick: null
}

export default Button
