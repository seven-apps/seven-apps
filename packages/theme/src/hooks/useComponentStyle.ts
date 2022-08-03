import { componentStyles, createStyle } from '../theme'
import { useThemeStore } from './useTheme'

import { keysStyle } from '../style-system/keysStyle'
import pick from 'lodash.pick'
import { getPropsForOtherStyle, pickNotBy } from '../utils'

const getStyle = (theme) => (styles) => createStyle(styles, theme)
/**
 * Cria o style do componente de acordo com algumas caracteristicas com
 *  variants e colorScheme
 */
export const useComponentStyle = (
  customProps,
  component?: string,
  arraykeys?: string[]
) => {
  const { variant, ...props } = customProps
  const { theme } = useThemeStore()

  if (component) {
    // pq aqui funciona aqui nao funciona
    const styleTheme = componentStyles({
      variant,
      props,
      theme,
      componentTheme: theme.components?.[component],
    })

    // const componentStyleWithTheme = pick(styleTheme, keysStyle)
    const othersComponetStylesWithTheme = pickNotBy(styleTheme, keysStyle)

    const styleWithTheme = createStyle(styleTheme, theme)
    const othersStylesWithTheme = getPropsForOtherStyle(
      othersComponetStylesWithTheme,
      arraykeys || [],
      getStyle(theme)
    )

    return Object.assign([styleWithTheme, othersStylesWithTheme], {
      style: styleWithTheme,
      othersStyles: othersStylesWithTheme,
    })
  }

  const othersComponetStyles = pickNotBy(props, keysStyle)

  const style = createStyle(props, theme)
  const othersStyles = getPropsForOtherStyle(
    othersComponetStyles,
    arraykeys || [],
    getStyle(theme)
  )

  return Object.assign([style, othersStyles], { style, othersStyles })
}
