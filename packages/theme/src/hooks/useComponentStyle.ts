import { createStyle } from '../theme'
import { useThemeStore } from './useTheme'

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

const modeVariant = (variant, props, theme) => {
  if (typeof variant !== 'function' && isObject(variant)) return variant

  const v = variant(props, theme)

  return v
}
/**
 * Cria o style do componente de acordo com algumas caracteristicas com
 *  variants e colorScheme
 */
export const useComponentStyle = (component: string, customProps, id) => {
  const { variant, ...props } = customProps
  const { theme } = useThemeStore()

  const componentStyles = (componentTheme) => {
    if (!componentTheme) return props
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

  const style = componentStyles(theme.components?.[component])

  return createStyle(style, theme)
}
