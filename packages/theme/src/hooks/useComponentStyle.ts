import { createStyle } from '../theme'
import { useThemeStore } from './useTheme'

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

const modeVariant = (variant, colorScheme, theme) => {
  if (isObject(variant) || !colorScheme) return variant

  if (typeof variant === 'function') {
    return variant(colorScheme, theme)
  }

  return variant
}

/**
 * Cria o style do componente de acordo com algumas caracteristicas com
 *  variants e colorScheme
 */
export const useComponentStyle = (component: string, customProps) => {
  const { colorScheme, variant, ...props } = customProps
  const { theme } = useThemeStore()

  const componentStyles = (componentTheme) => {
    console.log('componentTheme -> ', componentTheme)

    const { baseStyle, variants } = componentTheme || {}
    return {
      ...(baseStyle || {}),
      ...(variants?.[variant]
        ? modeVariant(variants?.[variant], colorScheme, theme)
        : {}), // condicional
      ...props,
    }
  }

  const style = componentStyles(theme.components?.[component])

  // retorna diretamente o createStyle aqui
  return createStyle(style, theme)
}
