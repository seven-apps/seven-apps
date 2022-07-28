import { metrics } from "./metrics";

const wp = metrics.wp;
const hp = metrics.hp;

const getColor = (colors: any, key: string) => {
  if (!key) return null;

  if (key.includes(".")) {
    const splited = key.split(".");
    return colors[splited[0]][splited[1]] || "#fff";
  }

  return colors[key] || ((key.includes("rgb") || key.includes("#")) && key);
};

type ThemeProps = {
  colors: any;
  sizes: any;
};

interface PaddingProps {
  p: "string" | "number";
  ph: "string" | "number";
  pv: "string" | "number";
  pr: "string" | "number";
  pl: "string" | "number";
  pt: "string" | "number";
  pb: "string" | "number";
  theme: ThemeProps;
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
    ${p ? `padding: ${hp(theme?.sizes[p] || p)};` : ""}
    ${ph ? `padding-horizontal: ${wp(ph)};` : ""}
    ${pv ? `padding-vertical: ${hp(pv)};` : ""}
    ${pr ? `padding-right: ${wp(pr)};` : ""}
    ${pl ? `padding-left: ${wp(pl)};` : ""}
    ${pt ? `padding-top: ${hp(pt)};` : ""}
    ${pb ? `padding-bottom: ${hp(pb)};` : ""}
  `;
/* 
export const paddingPropsTypes = {
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}; */

interface MarginProps {
  m: "string" | "number";
  mh: "string" | "number";
  mv: "string" | "number";
  mr: "string" | "number";
  ml: "string" | "number";
  mt: "string" | "number";
  mb: "string" | "number";
}

export const marginProps = ({ m, mh, mv, mr, ml, mt, mb }: MarginProps) => `
    ${m ? `margin: ${hp(m)};` : ""}
    ${mh ? `margin-horizontal: ${wp(mh)};` : ""}
    ${mv ? `margin-vertical: ${hp(mv)};` : ""}
    ${mr ? `margin-right: ${wp(mr)};` : ""}
    ${ml ? `margin-left: ${wp(ml)};` : ""}
    ${mt ? `margin-top: ${hp(mt)};` : ""}
    ${mb ? `margin-bottom: ${hp(mb)};` : ""}
  `;
/* 
export const marginPropsTypes = {
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mh: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}; */

// add alias para o theme do styled-components

interface SizeProps {
  h: number | string;
  w: number | string;
  height: number | string;
  maxHeight: number | string;
  minHeight: number | string;
  width: number | string;
  maxWidth: number | string;
  minWidth: number | string;
  fontSize: number | string;
  fluid: boolean | "vertical" | "horizontal";
  overflow: string;
  position: string;
  zIndex: number;
  top: number | string;
  bottom: number | string;
  left: number | string;
  right: number | string;
}

export const sizeProps = ({
  h,
  w,
  height,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,
  fontSize,
  fluid,
  overflow,
  position,
  zIndex,
  top,
  bottom,
  left,
  right,
}: SizeProps) => `
  ${height || h ? `height: ${hp(height || h)};` : ""}
  ${maxHeight ? `max-height: ${hp(maxHeight)};` : ""}
  ${minHeight ? `min-height: ${hp(minHeight)};` : ""}
  ${width || w ? `width: ${wp(width || w)};` : ""}
  ${maxWidth ? `max-width: ${wp(maxWidth)};` : ""}
  ${minWidth ? `min-width: ${wp(minWidth)};` : ""}
  ${fontSize ? `font-size: ${hp(fontSize)};` : ""}
  ${fluid ? (fluid === "vertical" ? "height: 100%;" : "width: 100%;") : ""}
  ${overflow ? `overflow: ${overflow};` : ""}
  ${position ? `position: ${position};` : ""}
  ${zIndex ? `z-index: ${zIndex};` : ""}
  ${top ? `top: ${hp(top)};` : ""}
  ${bottom ? `bottom: ${hp(bottom)};` : ""}
  ${left ? `left: ${hp(left)};` : ""}
  ${right ? `right: ${hp(right)};` : ""}
  `;
/* 
export const sizePropsTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  fluid: PropTypes.oneOfType([
    PropTypes.oneOf(["vertical", "horizontal"]),
    PropTypes.bool,
  ]),
  overflow: PropTypes.string,
  position: PropTypes.string,
  zIndex: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}; */

// add bg
export const colorProps = ({ color, bg, theme }) => `
  ${color ? `color: ${getColor(theme.colors, color)};` : ""}
  ${bg ? `background-color: ${getColor(theme.colors, bg)};` : ""}
  `;
/* 
export const colorPropsTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
};
 */

interface FlexProps {
  flex: number;
  flexDir: "row" | "column" | "column-reverse" | "row-reverse";
  flexGrow: number;
  flexWrap: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignSelf: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

export const flexProps = ({
  flex,
  flexDir,
  flexGrow,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
}: FlexProps) => `
  ${flex ? `flex: ${flex};` : ""}
  ${flexDir ? `flex-direction: ${flexDir};` : ""}
  ${flexGrow ? `flex-grow: ${flexGrow};` : ""}
  ${flexWrap ? `flex-wrap: ${flexWrap};` : ""}
  ${justifyContent ? `justify-content: ${justifyContent};` : ""}
  ${alignItems ? `align-items: ${alignItems};` : ""}
  ${alignSelf ? `align-self: ${alignSelf};` : ""}
`;
/* 
export const flexPropsTypes = {
  flex: PropTypes.number,
  flexDir: PropTypes.oneOf(["row", "column", "column-reverse", "row-reverse"]),
  flexGrow: PropTypes.number,
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ]),
  alignSelf: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ]),
}; */

const fontFamilies = {
  semiBold: "Montserrat-Semibold",
  bold: "Montserrat-Bold",
  medium: "Montserrat-Medium",
  regular: "Montserrat-Regular",
};

interface FontProps {
  fontFamily: "regular" | "medium" | "semiBold" | "bold";
  underline: boolean;
  align: "left" | "center" | "right";
  letterSpacing: number;
}

export const fontProps = ({
  fontFamily = "semiBold",
  underline,
  align,
  letterSpacing,
}: FontProps): string => `
  ${fontFamily && `font-family: ${fontFamilies[fontFamily]};`}
  ${underline ? `text-decoration-line: underline;` : ""}
  ${align ? `text-align: ${align};` : ""}
  ${letterSpacing ? `letter-spacing: ${wp(letterSpacing, true) * 0.03}px;` : ""}
`;

interface BorderProps {
  borderWidth: number;
  borderTop: number;
  borderBottom: number;
  borderLeft: number;
  borderRight: number;
  radius: number;
  topLeftRadius: number;
  topRightRadius: number;
  bottomRightRadius: number;
  bottomLeftRadius: number;
  borderColor: string;
  theme: ThemeProps;
}

export const borderProps = ({
  borderWidth,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  radius,
  topLeftRadius,
  topRightRadius,
  bottomRightRadius,
  bottomLeftRadius,
  borderColor,
  theme,
}: BorderProps) => `
  ${borderWidth ? `border-width: ${borderWidth}px;` : ""}
  ${borderTop ? `border-top-width: ${borderTop}px;` : ""}
  ${borderBottom ? `border-bottom-width: ${borderBottom}px;` : ""}
  ${borderLeft ? `border-left-width: ${borderLeft}px;` : ""}
  ${borderRight ? `border-right-width: ${borderRight}px;` : ""}
  ${radius ? `border-radius: ${radius}px;` : ""}
  ${topLeftRadius ? `border-top-left-radius: ${topLeftRadius}px;` : ""}
  ${topRightRadius ? `border-top-right-radius: ${topRightRadius}px;` : ""}
  ${
    bottomRightRadius
      ? `border-bottom-right-radius: ${bottomRightRadius}px;`
      : ""
  }
  ${bottomLeftRadius ? `border-bottom-left-radius: ${bottomLeftRadius}px;` : ""}
  ${borderColor ? `border-color: ${getColor(theme.colors, borderColor)};` : ""}
`;
/* 
export const borderPropsTypes = {
  borderWidth: PropTypes.number,
  borderTop: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,
  borderRight: PropTypes.number,
  radius: PropTypes.number,
  topLeftRadius: PropTypes.number,
  topRightRadius: PropTypes.number,
  bottomRightRadius: PropTypes.number,
  bottomLeftRadius: PropTypes.number,
  borderColor: PropTypes.string,
};
 */
