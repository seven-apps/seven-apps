/**
 * Obtem as prosp de estilo de acordo com alguma key previa
 * - labelFontSize retorna so o fontSize caso a key seja label
 */
export const getPropStyle = (key: string, props: any) => {
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

export const setPropStyle = (props) => {
  let newPropsStyle = {}
  Object.keys(props).forEach((key) => {
    if (!isObject(props[key])) {
      newPropsStyle = {
        ...newPropsStyle,
        [key]: props[key],
      }
      return
    }
    Object.keys(props[key]).forEach((keyProps) => {
      const newKey = `${key}${keyProps[0].toUpperCase()}${keyProps.slice(1)}`
      newPropsStyle = {
        ...newPropsStyle,
        [newKey]: props[key][keyProps],
      }
    })
  })
  return newPropsStyle
}

export const pickNotBy = (obj: any, arr: string[]) => {
  let newObject = {}
  Object.keys(obj).forEach((key) => {
    if (!!arr.find((el: string) => el === key)) return
    newObject = {
      ...newObject,
      [key]: obj[key],
    }
  })
  return newObject
}

export const getPropsForOtherStyle = (st, arr: string[], getStyle) => {
  if (!arr.length) return {}

  let newSt = {}
  arr.forEach((key) => {
    const s = getPropStyle(key, st)
    newSt = {
      ...newSt,
      [key]: getStyle(s),
    }
  })
  return newSt
}

export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
