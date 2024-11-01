import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface button {
  buttonName: string
  onPress: () => void;
}

function Button({ buttonName, onPress }: button) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ButtonStyle}>
          <Text style={styles.ButtonText} onPress={onPress}>{ buttonName }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  ButtonStyle: {
    padding: 10,
    paddingVertical: 5,
    backgroundColor: "#2c2c2c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2
  },
  ButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Button;
