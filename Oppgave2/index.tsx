import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MyImage from "./components/MyImage";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MyImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
