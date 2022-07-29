import px from "../metrics";
import { ThemeInterface } from "..";
import { SizesTypes } from "../foundation/sizes";

export interface PaddingProps {
  p?: SizesTypes | number;
  ph?: SizesTypes | number;
  pv?: SizesTypes | number;
  pr?: SizesTypes | number;
  pl?: SizesTypes | number;
  pt?: SizesTypes | number;
  pb?: SizesTypes | number;
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
}: PaddingProps & {
  theme: ThemeInterface;
}) => `
    ${p ? `padding: ${px(theme?.sizes[p] || p)};` : ""}
    ${ph ? `padding-horizontal: ${px(theme?.sizes[ph] || ph)};` : ""}
    ${pv ? `padding-vertical: ${px(theme?.sizes[pv] || pv)};` : ""}
    ${pr ? `padding-right: ${px(theme?.sizes[pr] || pr)};` : ""}
    ${pl ? `padding-left: ${px(theme?.sizes[pl] || pl)};` : ""}
    ${pt ? `padding-top: ${px(theme?.sizes[pt] || pt)};` : ""}
    ${pb ? `padding-bottom: ${px(theme?.sizes[pb] || pb)};` : ""}
  `;
