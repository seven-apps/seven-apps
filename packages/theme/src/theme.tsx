import sizes from "./foundation/sizes";
import colors from "./foundation/colors";
import fontSizes from "./foundation/fontSizes";

export type SevenThemeProps = typeof sevenTheme;

const sevenTheme = {
  sizes,
  colors,
  fontSizes,
  components: {},
};

export const withSevenTheme = (theme: any) => ({
  ...sevenTheme,
  ...(theme || {}),
  colors: {
    ...sevenTheme.colors,
    ...(theme.colors || {}),
  },
  sizes: {
    ...sevenTheme.sizes,
    ...(theme.sizes || {}),
  },
  fontSizes: {
    ...sevenTheme.fontSizes,
    ...theme.fontSizes,
  },
  components: {
    ...sevenTheme.components,
    ...(theme.components || {}),
  },
});
