import { ThemeInterface } from "..";
import px from "../metrics";
import { getColor } from "./colors";

export interface BorderProps {
  bw: number;
  btw: number;
  bbw: number;
  blw: number;
  brw: number;
  br: number;
  topLeftRadius: number;
  topRightRadius: number;
  bottomRightRadius: number;
  bottomLeftRadius: number;
  borderColor: string;
  theme: ThemeInterface;
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
  ${bw ? `border-width: ${px(bw)};` : ""}
  ${btw ? `border-top-width: ${px(btw)};` : ""}
  ${bbw ? `border-bottom-width: ${px(bbw)};` : ""}
  ${blw ? `border-left-width: ${px(blw)};` : ""}
  ${brw ? `border-right-width: ${px(brw)};` : ""}
  ${br ? `border-radius: ${px(br)};` : ""}
  ${
    topLeftRadius
      ? `border-top-left-radius: ${px(
          theme.sizes[topLeftRadius] || topLeftRadius
        )};`
      : ""
  }
  ${
    topRightRadius
      ? `border-top-right-radius: ${px(
          theme.sizes[topRightRadius] || topRightRadius
        )};`
      : ""
  }
  ${
    bottomRightRadius
      ? `border-bottom-right-radius: ${px(
          theme.sizes[bottomRightRadius] || bottomRightRadius
        )};`
      : ""
  }
  ${
    bottomLeftRadius
      ? `border-bottom-left-radius: ${px(
          theme.sizes[bottomLeftRadius] || bottomLeftRadius
        )};`
      : ""
  }
  ${borderColor ? `border-color: ${getColor(theme.colors, borderColor)};` : ""}
  `;
