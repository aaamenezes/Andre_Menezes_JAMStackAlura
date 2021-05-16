import React from 'react'
import NextLink from 'next/link'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../icon'
import propToStyle from '../../../utils/propToStyle'

const LinkButtonStyled = styled.a`
  ${ propToStyle('display') }
  ${ propToStyle('height') }
  ${ propToStyle('margin') }
  border: none;
  cursor: pointer;
  
  ${ ({ variant }) => (
    variant && css`
      padding: 5px 10px;
      border: 1px solid ${ ({ theme }) => theme.color.primary.normal };
      text-transform: uppercase;
      font-weight: ${ ({ theme }) => theme.fontWeight.bold };
      transition: ${ ({ theme }) => theme.transition.fast };
    `
  ) }

  ${ ({ variant, theme }) => {
    if (variant === 'primary') {
      return css`
        color: ${ theme.color.support.white };
        background-color: ${ theme.color.primary.normal };

        &:hover,
        &:focus {
          background-color: ${ theme.color.primary.dark };
          border: 1px solid ${ theme.color.primary.dark };
        }
      `
    }

    if (variant === 'secondary') {
      return css`
        color: ${ theme.color.support.black };
        background-color: ${ theme.color.support.white };

        &:hover,
        &:focus {
          border: 1px solid ${ theme.color.support.black };
        }
      `
    }

    return undefined
  } }

  &[disabled] {
    opacity: ${ ({ theme }) => theme.opacity.transparent };
    cursor: not-allowed;
    pointer-events: none;
  }
`

function LinkButton({
  href,
  external,
  inline,
  variant,
  children,
  handleClick,
  disabled,
  ...props
}) {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <LinkButtonStyled
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener' : 'same'}
          variant={variant}
          inline={inline}
          {...props}
        >
          {children}
          {' '}
          {external && inline && <Icon name='external' inline />}
        </LinkButtonStyled>
      </NextLink>
    )
  }

  return (
    <LinkButtonStyled
      variant={variant}
      as='button'
      disabled={disabled}
      {...props}
      onClick={handleClick ? () => handleClick(true) : undefined}
    >
      {children}
    </LinkButtonStyled>
  )
}

LinkButton.propTypes = {
  href: PropTypes.string,
  external: PropTypes.bool,
  inline: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
}

LinkButton.defaultProps = {
  href: null,
  external: false,
  inline: false,
  variant: undefined,
  handleClick: null,
  disabled: false
}

export default LinkButton
