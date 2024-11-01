import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Keyboard } from "react-native";

interface ScreenTextInputProps {
  setShowText: (text: string) => void;
}

function ScreenTextInput({ setShowText }: ScreenTextInputProps) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setShowText(name);
    console.log("User submitted input:", name);
    setName("");
    Keyboard.dismiss();
  };

  return (
    <TextInput
      style={styles.input}
      value={name}
      onChangeText={setName}
      placeholder= "eg. Oslo Berlin..."
      onSubmitEditing={handleSubmit}
      returnKeyType="search"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    elevation: 5,
  },
});

export default ScreenTextInput;
