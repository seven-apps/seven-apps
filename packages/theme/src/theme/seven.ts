import sizes from '../foundation/sizes'
import colors from '../foundation/colors'
import fontSizes from '../foundation/fontSizes'

export type SevenThemeProps = typeof sevenTheme

const theme = {
  sizes,
  colors,
  fontSizes,
  components: {},
}

export const sevenTheme = (customTheme: any) => {
  return {
    ...theme,
    ...(customTheme || {}),
    colors: {
      ...theme.colors,
      ...(customTheme.colors || {}),
    },
    sizes: {
      ...theme.sizes,
      ...(customTheme.sizes || {}),
    },
    fontSizes: {
      ...theme.fontSizes,
      ...customTheme.fontSizes,
    },
    components: {
      ...theme.components,
      ...(customTheme.components || {}),
    },
  }
}
