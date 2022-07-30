import React from "react";
import { StyleSheet, View } from "react-native";

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

/* 
  FLEX
*/
/* 
const flex = {
  flex: "flex",
  flexDix: "flexDir",
  "flexGrow",
  "flexWrap",
  "justifyContent",
  "alignItems",
  "alignSelf",
}; */

const alias = {
  ...padding,
  ...margin,
  ...layout,
  ...colors,
};

/* 
  SUBSTITUIR a prop pelo alias,
*/

const createStyle = (props) => {
  let newProps = props;
  Object.keys(newProps).forEach((key) => {
    if (alias[key]) {
      Object.defineProperty(
        props,
        alias[key],
        props && Object.getOwnPropertyDescriptor(props, key)
      );
      delete props[key];
    }
  });
  return StyleSheet.create({ ...newProps, ...props });
};

export const Box = ({ children, ...props }) => (
  <View style={createStyle(props)} {...props}>
    {children}
  </View>
);
