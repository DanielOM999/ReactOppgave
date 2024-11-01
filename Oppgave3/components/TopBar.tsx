import React from "react";
import { Text, View, StyleSheet } from "react-native";

function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Passord</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#373F51",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 5,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: 50,
    fontSize: 24,
  },
});

export default TopBar;