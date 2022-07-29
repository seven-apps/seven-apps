import styled, {
  ThemeProvider,
  ReactNativeStyledInterface,
  DefaultTheme,
  withTheme,
  useTheme,
} from "styled-components/native";
import sizes from "./foundation/sizes";
import colors from "./foundation/colors";
import fontSizes from "./foundation/fontSizes";

export type ThemeProps = typeof sevenTheme;

export interface ThemeInterface extends ThemeProps {}

export const s = styled as ReactNativeStyledInterface<DefaultTheme>;

const sevenTheme = {
  sizes,
  colors,
  fontSizes,
  components: {},
};

const extendTheme = (theme: any) => ({
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

export const SevenProvider = ({ children, theme }) => {
  return <ThemeProvider theme={extendTheme(theme)}>{children}</ThemeProvider>;
};

export { withTheme, useTheme };

export default s;
