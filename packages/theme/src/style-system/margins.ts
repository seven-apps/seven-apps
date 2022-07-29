import px from "../metrics";
import { SizesTypes } from "../foundation/sizes";

export interface MarginProps {
  m?: SizesTypes | number;
  mh?: SizesTypes | number;
  mv?: SizesTypes | number;
  mr?: SizesTypes | number;
  ml?: SizesTypes | number;
  mt?: SizesTypes | number;
  mb?: SizesTypes | number;
  theme?: any;
}

export const marginProps = ({
  m,
  mh,
  mv,
  mr,
  ml,
  mt,
  mb,
  theme,
}: MarginProps) => `
    ${m ? `margin: ${px(theme?.sizes[m]) || m};` : ""}
    ${mh ? `margin-horizontal: ${px(theme?.sizes[mh]) || mh};` : ""}
    ${mv ? `margin-vertical: ${px(theme?.sizes[mv]) || mv};` : ""}
    ${mr ? `margin-right: ${px(theme?.sizes[mr]) || mr};` : ""}
    ${ml ? `margin-left: ${px(theme?.sizes[ml]) || ml};` : ""}
    ${mt ? `margin-top: ${px(theme?.sizes[mt]) || mt};` : ""}
    ${mb ? `margin-bottom: ${px(theme?.sizes[mb]) || mb};` : ""}
  `;
