import { createStyle } from '../theme'
import { useThemeStore } from './useTheme'

/**
 * Criar o style do componente de acordo com algumas caracteristicas com
 *  variants e colorScheme
 *
 * obs: trazer o createStyle pra esse hook
 */
export const useComponentStyle = (component: string, customProps) => {
  const { colorScheme, variant, ...props } = customProps
  const { theme } = useThemeStore()

  const withColorScheme = (colorScheme) =>
    colorScheme
      ? {
          color: colorScheme,
          bg: colorScheme,
          borderColor: colorScheme,
        }
      : {}

  const componentStyles = (props, colorScheme, variant) => (componentTheme) => {
    console.log('componentTheme -> ', componentTheme)

    const { baseStyle, variants } = componentTheme || {}
    return {
      ...(baseStyle || {}),
      ...withColorScheme(colorScheme),
      ...(variants?.[variant] || {}),
      ...props,
    }
  }

  const style = componentStyles(
    props,
    colorScheme,
    variant
  )(theme.components?.[component])

  // retorna diretamente o createStyle aqui
  return createStyle(style, theme)
}
