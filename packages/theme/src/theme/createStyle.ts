import { StyleSheet } from 'react-native'
import {
  aliasProps,
  border,
  layout,
  margin,
  padding,
} from '../style-system/alias'
import px from '../metrics'
import { getColor } from '../style-system/colors'
import { SizesTypes } from '../foundation/sizes'
import { keysColor, keysStyle } from '../style-system/keysStyle'
import pick from 'lodash.pick'

// chave é o alias se nao existe e a do stylesheet
const normalize = (key: string, value: number | string, sizes: SizesTypes) => {
  const include = [
    ...Object.keys(padding),
    ...Object.keys(margin),
    ...Object.keys(border),
    ...Object.keys(layout),
    'topLeftRadius',
    'topRightRadius',
    'bottomRightRadius',
    'bottomLeftRadius',
    'top',
    'bottom',
    'left',
    'right',
    'fontSize',
  ]

  if (typeof value === 'string' && !sizes[value]) return value

  if (!!include.find((i) => i === key))
    // se tem no objeto size um alias pega o valor do alias se nao passar o valor
    return px(Number(sizes[value] || value))

  return value
}

/**
 * Cria o style com stylesheet, pra isso verifica primeiro se a prop é um alias
 * depois normaliza o valor se fizer parte do array que inclui essas props
 */
export const createStyle = (style, theme) => {
  const { sizes, colors, fontSizes } = theme
  //const prevStyle = style
  let newStyle = { ...style }

  Object.keys(style).forEach((key) => {
    const value = style[key]

    // lida com o alias background para aplicar cor do theme ou a propria cor
    if (key === 'bg') {
      newStyle[aliasProps[key]] = getColor(colors, value)
      return
    }

    // lida com o alias que não são de cor
    if (aliasProps[key]) {
      newStyle[aliasProps[key]] = normalize(key, value, sizes)
      return
    }

    // lida com as key de cor
    if (!!keysColor.find((keyColor) => keyColor === key)) {
      newStyle[key] = getColor(colors, value)
      return
    }

    if (key === 'fontSize') {
      newStyle[key] = normalize(key, value, fontSizes)
      return
    }

    // lida com todas as outras keys que nao são de cor ou de alias
    newStyle[key] = normalize(key, value, sizes)
  })

  return StyleSheet.create(pick(newStyle, keysStyle))
}
