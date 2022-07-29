import "styled-components";
import { CustonThemeProps } from "./theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends CustonThemeProps {}
}
