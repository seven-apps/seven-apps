import { isObject } from '../utils'

const modeVariant = (variant, props, theme) => {
  if (typeof variant !== 'function' && isObject(variant)) return variant

  const v = variant(props, theme)

  return v
}

export const componentStyles = ({ variant, props, theme, componentTheme }) => {
  const { baseStyle, variants } = componentTheme || {}

  const styleVariant = variants?.[variant]
    ? modeVariant(variants?.[variant], props, theme)
    : {}

  return {
    ...(baseStyle || {}),
    ...styleVariant,
    ...props,
  }
}
