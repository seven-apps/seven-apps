import { DefaultTheme } from "styled-components/native";
import { ColorTypes } from "../foundation/colors";

export interface ColorsInterface {
  color?: ColorTypes | string;
  bg?: ColorTypes | string;
  theme: DefaultTheme;
}

export const getColor = (colors: any, key: string) => {
  if (!key) return null;

  if (key.includes(".")) {
    const splited = key.split(".");
    return colors[splited[0]][splited[1]] || "#fff";
  }

  return colors[key] || ((key.includes("rgb") || key.includes("#")) && key);
};

export const colorProps = ({ color, bg, theme }: ColorsInterface) => `
  ${color ? `color: ${getColor(theme.colors, color)};` : ""}
  ${bg ? `background-color: ${getColor(theme.colors, bg)};` : ""}
  `;
