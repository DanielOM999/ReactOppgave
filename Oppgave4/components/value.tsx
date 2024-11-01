import React from "react";
import { Button, Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

interface SFProps {
    showValue: Int32;
}

function Value({ showValue } : SFProps) {
  const handlePress = () => {
    Alert.alert("ok? if you ok me one more time i will not talk to you!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teller er:</Text>
      <View style={styles.box}>
        <Text style={[styles.text, { fontSize: 50 }]}>{ showValue ? showValue : 0 }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold"
  },
  box: {
    marginVertical: 5,
    backgroundColor: "#d8dbe2",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 146,
    width: 160
  }
});

export default Value;