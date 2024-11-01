import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MHProps {
  showText: string;
}

function MainHeader({ showText }: MHProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ showText ? showText : "Welcome to FWeather!" }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 20,
    marginTop: 150,
  },
  text: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
  },
});

export default MainHeader;
