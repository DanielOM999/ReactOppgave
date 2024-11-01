import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import VCButton from "./components/ValueChangeButton";
import Value from "./components/value";

export default function HomeScreen() {
  const [showValue, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <VCButton setValue={setValue} showValue={showValue} />
      <Value showValue={showValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
