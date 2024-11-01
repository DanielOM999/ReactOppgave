import React from "react";
import { View, StyleSheet } from "react-native";

interface BoxProps {
  bgColor: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ bgColor, children }) => {
  return <View style={[styles.container, { backgroundColor: bgColor }]}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    width: 82,
    height: 82,
    borderRadius: 2,
    elevation: 2,
  },
});

export default Box;
