// styled-components.ts
import * as styledComponents from "styled-components/native";

import { CustonThemeProps } from "./theme";

const {
  default: styled,
  ThemeProvider,
  useTheme,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<CustonThemeProps>;

export { ThemeProvider, useTheme };
export default styled;
