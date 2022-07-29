import px from "../metrics";
import { ThemeInterface } from "..";

export interface SizeProps {
  h?: number;
  w?: number;
  height?: number;
  maxH?: number;
  minH?: number;
  width?: number;
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
  ${h ? `height: ${px(h)};` : ""}
  ${height ? `height: ${px(height)};` : ""}
  ${maxH ? `max-height: ${px(maxH)};` : ""}
  ${minH ? `min-height: ${px(minH)};` : ""}
  ${width ? `width: ${px(width)};` : ""}
  ${w ? `height: ${px(w)};` : ""}
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
