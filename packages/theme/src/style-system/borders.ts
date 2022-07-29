import { DefaultTheme } from "styled-components/native";
import { ColorTypes } from "../foundation/colors";
import { SizesTypes } from "../foundation/sizes";
import px from "../metrics";
import { getColor } from "./colors";

export interface BorderProps {
  bw?: SizesTypes | number;
  btw?: SizesTypes | number;
  bbw?: SizesTypes | number;
  blw?: SizesTypes | number;
  brw?: SizesTypes | number;
  br?: SizesTypes | number;
  topLeftRadius?: SizesTypes | number;
  topRightRadius?: SizesTypes | number;
  bottomRightRadius?: SizesTypes | number;
  bottomLeftRadius?: SizesTypes | number;
  borderColor?: ColorTypes | string;
  theme?: DefaultTheme;
}

export const borderProps = ({
  bw,
  btw,
  bbw,
  blw,
  brw,
  br,
  topLeftRadius,
  topRightRadius,
  bottomRightRadius,
  bottomLeftRadius,
  borderColor,
  theme,
}: BorderProps) => `
  ${bw ? `border-width: ${px(theme?.sizes[bw] || bw)};` : ""}
  ${btw ? `border-top-width: ${px(theme?.sizes[btw] || btw)};` : ""}
  ${bbw ? `border-bottom-width: ${px(theme?.sizes[bbw] || bbw)};` : ""}
  ${blw ? `border-left-width: ${px(theme?.sizes[blw] || blw)};` : ""}
  ${brw ? `border-right-width: ${px(theme?.sizes[brw] || brw)};` : ""}
  ${br ? `border-radius: ${px(theme?.sizes[br] || br)};` : ""}
  ${
    topLeftRadius
      ? `border-top-left-radius: ${px(
          theme?.sizes[topLeftRadius] || topLeftRadius
        )};`
      : ""
  }
  ${
    topRightRadius
      ? `border-top-right-radius: ${px(
          theme?.sizes[topRightRadius] || topRightRadius
        )};`
      : ""
  }
  ${
    bottomRightRadius
      ? `border-bottom-right-radius: ${px(
          theme?.sizes[bottomRightRadius] || bottomRightRadius
        )};`
      : ""
  }
  ${
    bottomLeftRadius
      ? `border-bottom-left-radius: ${px(
          theme?.sizes[bottomLeftRadius] || bottomLeftRadius
        )};`
      : ""
  }
  ${borderColor ? `border-color: ${getColor(theme?.colors, borderColor)};` : ""}
  `;
