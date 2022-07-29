import px from "../metrics";
import { ThemeInterface } from "..";

export interface PaddingProps {
  p?: number;
  ph?: number;
  pv?: number;
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
  theme: ThemeInterface;
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
