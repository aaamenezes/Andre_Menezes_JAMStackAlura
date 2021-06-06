import React from 'react'
import PropTypes from 'prop-types'
// import { render } from '@testing-library/react'

const AllTheProviders = ({ children, ...props }) => (
  <pageWrapper {...props}>
    {children}
  </pageWrapper>
)

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired
}

// const customRender = (ui, options = {}) => {
//   const Provider = props => (
//     <AllTheProviders {...props} {...options.providerProps} />
//   )
//   return render(ui, { wrapper: Provider, ...options })
// }

// re-export everything
// export * from '@testing-library/react'
// override render method
// export { customRender as render }
