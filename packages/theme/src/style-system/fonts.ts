import px from "../metrics";

const fontFamilies = {
  semiBold: "Montserrat-Semibold",
  bold: "Montserrat-Bold",
  medium: "Montserrat-Medium",
  regular: "Montserrat-Regular",
};

export interface FontProps {
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
  ${letterSpacing ? `letter-spacing: ${px(letterSpacing, true) * 0.03}px;` : ""}
`;
