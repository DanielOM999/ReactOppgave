import React from "react";
import { Button, Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";

function MainButton() {
  const handlePress = () => {
    Alert.alert("ok? if you ok me one more time i will not talk to you!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ButtonStyle} onPress={handlePress}>
        <Text style={styles.ButtonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonStyle: {
    width: 120,
    height: 50,
    backgroundColor: "#1345f5",
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

export default MainButton;
