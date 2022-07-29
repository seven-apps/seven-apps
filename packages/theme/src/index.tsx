import baseStyled, {
  ThemeProvider,
  ThemedStyledInterface,
} from "styled-components";
import sizes from "./foundation/sizes";
import colors from "./foundation/colors";
import fontSizes from "./foundation/fontSizes";

export * from "./metrics";

// styled-system
export * from "./style-system/colors";
export * from "./style-system/paddings";
export * from "./style-system/margins";
export * from "./style-system/sizes";
export * from "./style-system/flex";
export * from "./style-system/fonts";
export * from "./style-system/borders";

/* 

DefaultProps 

colors
sizes,
componets
fontSizes
*/

const sevenTheme = {
  sizes,
  colors,
  fontSizes,
  components: {},
};

export type ThemeInterface = typeof sevenTheme;

export const styled = baseStyled as ThemedStyledInterface<ThemeInterface>;

/* 
const extendTheme = (theme) => ({
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
}); */

const SevenProvider = ({ children, theme }) => {
  return (
    <ThemeProvider
      theme={{
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
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default SevenProvider;
