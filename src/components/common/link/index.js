import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import Icon from '../icon'

function Link({ href, external, children, ...props }) {
  return (
    <NextLink href={href}>
      <a
        target={external && '_blank'}
        rel={external && 'noopener'}
        {...props}
      >
        {children}
        {' '}
        {external && (
          <Icon
            name='external'
            fontSize={({ theme }) => theme.fontSize.text}
            inline
          />
        )}
      </a>
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Link.defaultProps = {
  external: false
}

export default Link
