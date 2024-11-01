import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface ScreenTextInputProps {
  setShowText: (text: string) => void;
}

function ScreenTextInput({ setShowText }: ScreenTextInputProps) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Skriv inn passordet ditt</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => {
          setShowText(name);
          setName(name);
        }}
      />
      <Text style={styles.text}>
        Passordet ditt er:
        {name ? (
          <>
            {"\n"}
            <Text style={styles.normalText}>{name}</Text>
          </>
        ) : null}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  text: {
    marginTop: 50,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  normalText: {
    fontWeight: "100",
  },
  input: {
    width: 300,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    elevation: 3,
  },
});

export default ScreenTextInput;
