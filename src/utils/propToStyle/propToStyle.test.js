import propToStyle from './index'

describe('propToStyle()', () => {
  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      // <Text textAlign='center' />
      const propToStyleResult = propToStyle('textAlign')
      const componentProps = { textAlign: 'center' }
      const styleResult = propToStyleResult(componentProps)
      expect(styleResult).toEqual({ textAlign: 'center' })
    })
    test('and it is a number', () => {
      // <Container zIndex={10} />
      const propToStyleResult = propToStyle('zIndex')
      const componentProps = { zIndex: 10 }
      const styleResult = propToStyleResult(componentProps)
      expect(styleResult).toEqual({ zIndex: 10 })
    })
  })
  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      // <Text textAlign={{ xs: 'center', md: 'right' }} />
      const propToStyleResult = propToStyle('textAlign')
      const componentProps = { textAlign: { xs: 'center' } }
      const styleResult = propToStyleResult(componentProps)
      // expect(styleResult).toEqual({ textAlign: { xs: 'center' } })
      expect(styleResult).toMatchSnapshot()
    })
    test('renders two or more breakpoints resolution', () => {
      // <Text textAlign={{ xs: 'center', md: 'right' }} />
      const propToStyleResult = propToStyle('textAlign')
      const componentProps = { textAlign: { xs: 'center', md: 'right' } }
      const styleResult = propToStyleResult(componentProps)
      // expect(styleResult).toEqual({ textAlign: { xs: 'center', md: 'right'}})
      expect(styleResult).toMatchSnapshot()
    })
  })
})
