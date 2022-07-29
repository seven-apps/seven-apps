import "styled-components";
import { ThemeInterface } from "./theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
