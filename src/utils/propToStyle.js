import breakpointsMedia from './breakpointsMedia'

function propToStyle(propName) {
  function styleReturned(props) {
    const propValue = props[propName]

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue
      }
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: { [propName]: propValue.xs },
        sm: { [propName]: propValue.sm },
        md: { [propName]: propValue.md },
        lg: { [propName]: propValue.lg },
        xl: { [propName]: propValue.xl }
      })
    }

    return undefined
  }

  return styleReturned
}

export default propToStyle
