import React from "react";
import { StyleSheet, View } from "react-native";

const createStyle = (props) => StyleSheet.create(props);

export const Box = ({ children, ...props }) => (
  <View style={createStyle(props)} {...props}>
    {children}
  </View>
);
