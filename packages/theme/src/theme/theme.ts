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

// chave é o alias se nao existe e a do stylesheet
const normalize = (key: string, value: number | string, sizes) => {
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
  let newStyle = style

  Object.keys(newStyle).forEach((key) => {
    const value = newStyle[key]

    // lida com o alias background para aplicar cor do theme ou a propria cor
    if (key === 'bg') {
      newStyle[aliasProps[key]] = getColor(colors, value)
      delete newStyle[key]
      return
    }

    // lida com o alias que não são de cor
    if (aliasProps[key]) {
      newStyle[aliasProps[key]] = normalize(key, value, sizes)
      delete newStyle[key]
      return
    }

    // lida com as key de cor
    if (key === 'borderColor' || key === 'color') {
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

  return StyleSheet.create(newStyle)
}

const keyThemes = [
  'display',
  'width',
  'height',
  'start',
  'end',
  'top',
  'left',
  'right',
  'bottom',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'margin',
  'marginVertical',
  'marginHorizontal',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginStart',
  'marginEnd',
  'padding',
  'paddingVertical',
  'paddingHorizontal',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingStart',
  'paddingEnd',
  'borderWidth',
  'borderTopWidth',
  'borderStartWidth',
  'borderEndWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'position',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignItems',
  'alignSelf',
  'alignContent',
  'overflow',
  'flex',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'aspectRatio',
  'zIndex',
  'direction',
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
  'transform',
  'transformMatrix',
  'decomposedMatrix',
  'scaleX',
  'scaleY',
  'rotation',
  'translateX',
  'translateY',
  'backfaceVisibility',
  'backgroundColor',
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderStartColor',
  'borderEndColor',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStartRadius',
  'borderTopEndRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStartRadius',
  'borderBottomEndRadius',
  'borderStyle',
  'opacity',
  'elevation',
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'fontVariant',
  'textShadowOffset',
  'textShadowRadius',
  'textShadowColor',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textAlignVertical',
  'includeFontPadding',
  'textDecorationLine',
  'textDecorationStyle',
  'textDecorationColor',
  'textTransform',
  'writingDirection',
]
