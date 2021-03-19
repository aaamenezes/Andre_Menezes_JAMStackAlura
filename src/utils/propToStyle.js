import breakpointsMedia from './breakpointsMedia'

function propToStyle(propName) {
  function styleReturned(props) {
    const propValue = props[propName]

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue
      }
    }

    return undefined
  }

  return styleReturned
}

export default propToStyle
