import { ColorTypes } from "../foundation/colors";

// add types color for custom theme
export const getColor = (colors: ColorTypes | any, key: string) => {
  if (!key) return null;

  if (String(key).includes(".")) {
    const splited = key.split(".");
    return colors?.[splited[0]]?.[splited[1]] || "#fff";
  }

  return (
    colors[key] ||
    ((String(key).includes("rgb") || String(key).includes("#")) && key)
  );
};
