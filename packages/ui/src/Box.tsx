import React from "react";
import {
  StyleSheet,
  View,
  PixelRatio,
  Dimensions,
  ViewProps,
} from "react-native";

import { useThemeStore } from ".";

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
const normalize = (key: string, value: number | string, sizes) => {
  const include = [
    ...Object.keys(padding),
    ...Object.keys(margin),
    ...Object.keys(border),
    ...Object.keys(layout),
    "topLeftRadius",
    "topRightRadius",
    "bottomRightRadius",
    "bottomLeftRadius",
    "top",
    "bottom",
    "left",
    "right",
  ];

  if (typeof value === "string" && !sizes[value]) return value;

  if (!!include.find((i) => i === key))
    // se tem no objeto size um alias pega o valor do alias se nao passar o valor
    return px(Number(sizes[value] || value));

  return value;
};

export const getColor = (colors, key: string) => {
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

/**
 * Cria o style com stylesheet, pra isso verifica primeiro se a prop é um alias
 * depois normaliza o valor se fizer parte do array que inclui essas props
 */
const createStyle = (props, theme) => {
  const { sizes, colors } = theme;
  let newProps = props;
  Object.keys(newProps).forEach((key) => {
    const value = newProps[key];

    // lida com o alias background para aplicar cor do theme ou a propria cor
    if (key === "bg") {
      newProps[aliasProps[key]] = getColor(colors, value);
      delete newProps[key];
      return;
    }

    // lida com o alias que não são de cor
    if (aliasProps[key]) {
      newProps[aliasProps[key]] = normalize(key, value, sizes);
      delete newProps[key];
      return;
    }

    // lida com as key de cor
    if (key === "borderColor" || key === "color") {
      newProps[key] = getColor(colors, value);
      return;
    }

    // lida com todas as outras keys que nao são de cor ou de alias
    newProps[key] = normalize(key, value, sizes);
  });

  return StyleSheet.create({ ...newProps, ...props });
};

const useComponentStyle = (component: string, customProps) => {
  const { colorScheme, variant, ...props } = customProps;
  const { theme } = useThemeStore();

  const withColorScheme = (colorScheme) =>
    colorScheme
      ? {
          color: colorScheme,
          bg: colorScheme,
          borderColor: colorScheme,
        }
      : {};

  const componentStyles = (props, colorScheme, variant) => (componentTheme) => {
    if (!componentTheme) return {};

    const { baseStyle, variants } = componentTheme;
    return {
      ...baseStyle,
      ...props,
      ...withColorScheme(colorScheme),
      ...(variants?.[variant] || {}),
    };
  };

  const style = componentStyles(
    props,
    colorScheme,
    variant
  )(theme.components?.[component]);

  console.log(`style component ${component} -> `, style);

  return style;
};

export const Box = ({ children, ...props }) => {
  const { theme } = useThemeStore();
  const style = useComponentStyle("Box", props);
  return (
    <View style={createStyle({ ...style, ...props }, theme)} {...props}>
      {children}
    </View>
  );
};
