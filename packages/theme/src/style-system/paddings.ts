import px from "../metrics";
import { SizesTypes } from "../foundation/sizes";
import { DefaultTheme } from "styled-components/native";

export interface PaddingProps {
  p?: SizesTypes | number;
  ph?: SizesTypes | number;
  pv?: SizesTypes | number;
  pr?: SizesTypes | number;
  pl?: SizesTypes | number;
  pt?: SizesTypes | number;
  pb?: SizesTypes | number;
  theme?: DefaultTheme;
}

export const paddingProps = ({
  p,
  ph,
  pv,
  pr,
  pl,
  pt,
  pb,
  theme,
}: PaddingProps) => `
    ${p ? `padding: ${px(theme?.sizes[p] || p)};` : ""}
    ${ph ? `padding-horizontal: ${px(theme?.sizes[ph] || ph)};` : ""}
    ${pv ? `padding-vertical: ${px(theme?.sizes[pv] || pv)};` : ""}
    ${pr ? `padding-right: ${px(theme?.sizes[pr] || pr)};` : ""}
    ${pl ? `padding-left: ${px(theme?.sizes[pl] || pl)};` : ""}
    ${pt ? `padding-top: ${px(theme?.sizes[pt] || pt)};` : ""}
    ${pb ? `padding-bottom: ${px(theme?.sizes[pb] || pb)};` : ""}
  `;
