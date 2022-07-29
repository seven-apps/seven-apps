import px from "../metrics";
import { ThemeInterface } from "..";
import { SizesTypes } from "../foundation/sizes";

export interface SizeProps {
  h?: number | string | SizesTypes;
  w?: number | string | SizesTypes;
  height?: number | string | SizesTypes;
  maxH?: number;
  minH?: number;
  width?: number | string | SizesTypes;
  maxW?: number;
  minW?: number;
  fontSize?: number;
  fluid?: boolean | "vertical" | "horizontal";
  overflow?: string;
  position?: string;
  zIndex?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  theme: ThemeInterface;
}

export const sizeProps = ({
  h,
  w,
  height,
  maxH,
  minH,
  width,
  maxW,
  minW,
  fontSize, //xs
  fluid,
  overflow,
  position,
  zIndex,
  top,
  bottom,
  left,
  right,
  theme,
}: SizeProps) => `
  ${h ? `height: ${typeof h === "string" ? theme.sizes(h) || h : px(h)};` : ""}
  ${w ? `height: ${px(w)};` : ""}
  ${width ? `width: ${px(width)};` : ""}
  ${height ? `height: ${px(height)};` : ""}
  ${maxH ? `max-height: ${px(maxH)};` : ""}
  ${minH ? `min-height: ${px(minH)};` : ""}
  ${maxW ? `max-width: ${px(maxW)};` : ""}
  ${minW ? `min-width: ${px(minW)};` : ""}
  ${fontSize ? `font-size: ${px(theme?.fontSizes(fontSize) || fontSize)};` : ""}
  ${fluid ? (fluid === "vertical" ? "height: 100%;" : "width: 100%;") : ""}
  ${overflow ? `overflow: ${overflow};` : ""}
  ${position ? `position: ${position};` : ""}
  ${zIndex ? `z-index: ${zIndex};` : ""}
  ${top ? `top: ${px(top)};` : ""}
  ${bottom ? `bottom: ${px(bottom)};` : ""}
  ${left ? `left: ${px(left)};` : ""}
  ${right ? `right: ${px(right)};` : ""}
`;
