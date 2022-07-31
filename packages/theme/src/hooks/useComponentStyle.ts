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
    if (!componentTheme) return {}

    const { baseStyle, variants } = componentTheme
    return {
      ...(baseStyle || {}),
      ...props,
      ...withColorScheme(colorScheme),
      ...(variants?.[variant] || {}),
    }
  }

  const style = componentStyles(
    props,
    colorScheme,
    variant
  )(theme.components?.[component])

  return style
}
