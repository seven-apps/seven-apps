import { ThemeProvider, ThemeProps } from "styled-components";
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

export interface ThemeInterface extends ThemeProps<any> {
  colors: any;
  sizes: any;
  fontSizes: any;
}

const SevenProvider = ({ children, theme }) => {
  return (
    <ThemeProvider
      theme={{
        ...(theme || {}),
        colors: {
          ...colors,
          ...(theme.colors || {}),
        },
        sizes: {
          ...sizes,
          ...(theme.colors || {}),
        },
        fontSizes: {
          ...fontSizes,
          ...theme.fontSizes,
        },
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default SevenProvider;
