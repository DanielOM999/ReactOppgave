import React from "react";
import { Text, View, StyleSheet } from "react-native";

function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>En app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fd3e3e",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 5,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 90,
    padding: 70,
    fontSize: 24,
  },
});

export default TopBar;
