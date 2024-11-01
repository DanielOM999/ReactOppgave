import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface SFProps {
  ShowText: string;
}

function ScreenFooter({ ShowText }: SFProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ShowText.length >= 5 ? null : "Passord må minst ha 5 tegn"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-end",
    marginBottom: 100
  },
  text: {
    fontSize: 22,
    fontWeight: "bold"
  }
});

export default ScreenFooter;
