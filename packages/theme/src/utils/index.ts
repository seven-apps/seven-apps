export const getPropStyle = (key, props) => {
  let newPropsStyle = {}
  Object.keys(props).forEach((keyProps) => {
    const [label, ...style] = keyProps.split(/(?=[A-Z])/)
    if (label === key) {
      const newKey = style.join('')
      newPropsStyle = {
        ...newPropsStyle,
        [newKey[0].toLowerCase() + newKey.substring(1)]: props[keyProps],
      }
    }
  })

  return newPropsStyle
}
