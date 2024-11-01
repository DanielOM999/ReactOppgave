import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MainHeader = () => (
  <View style={{ justifyContent: "center", margin: 20, marginTop: 10 }}>
    <Text style={{ fontSize: 34, color: "#fff", textAlign: "center" }}>
      The<Text style={{ fontWeight: "bold" }}> quick brown fox</Text> jumps over
      the lazy dog
    </Text>
  </View>
);

export default MainHeader;
