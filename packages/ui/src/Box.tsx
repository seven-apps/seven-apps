import React from "react";
import {
  StyleSheet,
  View,
  PixelRatio,
  Dimensions,
  ViewProps,
} from "react-native";

import { theme } from ".";

const { width: screenWidth } = Dimensions.get("window");

/* 
  SPACING
*/
const padding = {
  p: "padding",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  ph: "paddingHorizontal",
  pv: "paddingVertical",
};

const margin = {
  m: "margin",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  mh: "marginHorizontal",
  mv: "marginVertical",
};

const border = {
  bw: "borderWidth",
  btw: "borderTopWidth",
  bbw: "borderBottomWidth",
  blw: "borderLeftWidth",
  brw: "borderRightWidth",
  br: "borderRadius",
};

/**
 * LAYOUT
 */
const layout = {
  h: "height",
  w: "width",
  minH: "minHeight",
  maxH: "maxHeight",
  minW: "minWidth",
  maxW: "maxWidth",
};

/* 
COLORS
*/
const colors = {
  bg: "backgroundColor",
};

const aliasProps = {
  ...padding,
  ...margin,
  ...layout,
  ...colors,
  ...border,
};

/* 
  SUBSTITUIR a prop pelo alias,
*/

const figmaWidth = 390;

const px = (valuePx: number) => {
  const widthPercent = (valuePx / figmaWidth) * 100;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

// chave é o alias se nao existe e a do stylesheet
const normalize = (key: string, value: number | string) => {
  const { sizes } = theme;

  const include = [
    Object.keys(padding),
    Object.keys(margin),
    Object.keys(border),
    Object.keys(layout),
    "topLeftRadius",
    "topRightRadius",
    "bottomRightRadius",
    "bottomLeftRadius",
    "top",
    "bottom",
    "left",
    "right",
  ];

  // se tem no objeto size um alias pega o valor do alias se nao passar o valor
  if (include.find((i) => i === key))
    return px(Number(typeof value === "string" ? sizes[value] : value));

  return value;
};

export const getColor = (key: string) => {
  console.log("key ----> ", key);
  const { colors } = theme;
  if (!key) return null;

  if (String(key).includes(".")) {
    const splited = key.split(".");
    return colors[splited[0]][splited[1]] || "#fff";
  }

  return (
    colors[key] ||
    ((String(key).includes("rgb") || String(key).includes("#")) && key)
  );
};

/**
 * Cria o style com stylesheet, pra isso verifica primeiro se a prop é um alias
 * depois normaliza o valor se fizer parte do array que inclui essas props
 */
const createStyle = (props) => {
  let newProps = props;
  Object.keys(newProps).forEach((key) => {
    const value = newProps[key];

    // lida com o alias background para aplicar cor do theme ou a propria cor
    if (key === "bg") {
      Object.defineProperty(newProps, aliasProps[key], getColor(value));
      delete props[key];
      return;
    }

    // lida com o alias que não são de cor
    if (aliasProps[key]) {
      Object.defineProperty(
        newProps,
        aliasProps[key],
        normalize(aliasProps[key], value)
      );
      delete props[key];
      return;
    }

    // lida com as key de cor
    if (key === "borderColor" || key === "color") {
      Object.defineProperty(newProps, key, getColor(value));
      return;
    }

    // lida com todas as outras keys que nao são de cor ou de alias
    Object.defineProperty(newProps, key, normalize(key, value));
  });

  return StyleSheet.create({ ...newProps, ...props });
};

export const Box = ({ children, ...props }: ViewProps) => (
  <View style={createStyle(props)} {...props}>
    {children}
  </View>
);
