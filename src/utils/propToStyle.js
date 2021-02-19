export function propToStyle(propName) {
  return function(props) {
    const propValue = props[propName]
    return {
      [propName]: propValue
    }
  }
}

export default propToStyle