import px from "../metrics";
import { ThemeInterface } from "..";
import { SizesTypes } from "../foundation/sizes";
import { FontTypes } from "../foundation/fontSizes";

export interface SizeProps {
  h?: number | string | SizesTypes;
  w?: number | string | SizesTypes;
  height?: number | string | SizesTypes;
  maxH?: number;
  minH?: number;
  width?: number | string | SizesTypes;
  maxW?: number;
  minW?: number;
  fontSize?: number | FontTypes;
  fluid?: boolean | "vertical" | "horizontal";
  overflow?: string;
  position?: string;
  zIndex?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const getSize = (size) => {
  /* 
    1. se é numero
    2. se é um float <1
    3. se é string e é um alias
    4. se é string
  */
};

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
}: SizeProps & {
  theme: ThemeInterface;
}) => `
  ${h ? `height: ${typeof h === "string" ? theme.sizes[h] || h : px(h)};` : ""}
  ${
    height
      ? `height: ${
          typeof height === "string"
            ? theme.sizes[height] || height
            : px(height)
        };`
      : ""
  }
  ${w ? `width: ${typeof w === "string" ? theme.sizes[w] || w : px(w)};` : ""}
  ${
    width
      ? `width: ${
          typeof width === "string" ? theme.sizes[width] || width : px(width)
        };`
      : ""
  }
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
