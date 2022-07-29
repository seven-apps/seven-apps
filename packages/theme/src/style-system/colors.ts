import { ThemeInterface } from "..";

interface Colors {
  color: string;
  bg: string;
  theme: ThemeInterface;
}

export const getColor = (colors: any, key: string) => {
  if (!key) return null;

  if (key.includes(".")) {
    const splited = key.split(".");
    return colors[splited[0]][splited[1]] || "#fff";
  }

  return colors[key] || ((key.includes("rgb") || key.includes("#")) && key);
};

export const colorProps = ({ color, bg, theme }: Colors) => `
  ${color ? `color: ${getColor(theme.colors, color)};` : ""}
  ${bg ? `background-color: ${getColor(theme.colors, bg)};` : ""}
  `;
