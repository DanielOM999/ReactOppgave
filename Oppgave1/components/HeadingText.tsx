import React from "react";
import { Text, View, StyleSheet } from "react-native";

function HeadingText() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Tekst som er uten mening</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 95,
    alignItems: "center",
  },
  Text: {
    color: "#000",
    fontWeight: "900",
    textAlign: "center",
    maxWidth: 250,
    fontSize: 28
  },
});

export default HeadingText;
