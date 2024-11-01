import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function ScreenTextInput() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name ? `Hi ${name}!` : "What is your name?"}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setName(name)}
        placeholder="Enter your name"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: "center",
        textAlign: "center",
      },
  text: {
    marginVertical: 16,
    fontSize: 24,
    color: "#fff",
  },
  input: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    elevation: 2,
  },
});

export default ScreenTextInput;
