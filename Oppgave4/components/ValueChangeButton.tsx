import React from "react";
import { Button, Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

interface VCBProps {
    setValue: (text: Int32) => void;
    showValue: Int32;
}

function ValueChangeButton({ setValue, showValue } : VCBProps) {
  const increase = () => {
    setValue(showValue + 1)
  };
  const decrease = () => {
    showValue <= 0 ? setValue(0) : setValue(showValue - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ButtonStyle} onPress={increase}>
        <Text style={styles.ButtonText}>Øk teller</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonStyle} onPress={decrease}>
        <Text style={styles.ButtonText}>Reduser teller</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonStyle: {
    width: 278,
    height: 52,
    backgroundColor: "#487281",
    borderRadius: 10,
    marginVertical: 12,
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

export default ValueChangeButton;