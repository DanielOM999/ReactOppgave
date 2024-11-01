import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TopBar from "./components/TopBar";
import ScreenTextInput from "./components/ScreenTextInput";
import ScreenFooter from "./components/ScreenFooter";

export default function TabTwoScreen() {
  const [showText, setShowText] = useState("");

  return (
    <View style={styles.container}>
      <TopBar />
      <ScreenTextInput setShowText={setShowText} />
      <ScreenFooter ShowText={showText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});