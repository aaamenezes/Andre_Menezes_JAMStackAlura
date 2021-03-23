function propToStyle(propName) {
  function styleReturned(props) {
    const propValue = props[propName]
    return {
      [propName]: propValue
    }
  }

  return styleReturned
}

export default propToStyle
