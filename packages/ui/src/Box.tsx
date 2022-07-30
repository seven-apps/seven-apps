import React from "react";
import {
  StyleSheet,
  View,
  PixelRatio,
  Dimensions,
  ViewProps,
} from "react-native";

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
  color: "color",
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

  if (include.find((i) => i === key) && !isNaN(Number(value)))
    return px(Number(value));

  return value;
};
/**
 * Cria o style com stylesheet, pra isso verifica primeiro se a prop é um alias
 * depois normaliza o valor se fizer parte do array que inclui essas props
 */
const createStyle = (props) => {
  let newProps = props;
  Object.keys(newProps).forEach((key) => {
    if (aliasProps[key]) {
      Object.defineProperty(
        newProps,
        aliasProps[key],
        normalize(
          aliasProps[key],
          newProps && Object.getOwnPropertyDescriptor(newProps, key)
        )
      );
      delete props[key];
      return;
    }
    Object.defineProperty(
      newProps,
      key,
      normalize(key, newProps && Object.getOwnPropertyDescriptor(newProps, key))
    );
  });
  return StyleSheet.create({ ...newProps, ...props });
};

export const Box = ({ children, ...props }: ViewProps) => (
  <View style={createStyle(props)} {...props}>
    {children}
  </View>
);
