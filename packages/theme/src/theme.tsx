/* import styled, {
  ThemeProvider,
  ReactNativeStyledInterface,
  withTheme,
  useTheme,
  DefaultTheme,
} from "styled-components/native"; */
import styled, { ThemeProvider } from "./styled-components";
import sizes from "./foundation/sizes";
import colors from "./foundation/colors";
import fontSizes from "./foundation/fontSizes";

export type CustonThemeProps = typeof sevenTheme;

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

export default styled;
