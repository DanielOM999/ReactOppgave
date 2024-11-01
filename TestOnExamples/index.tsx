import React from "react";
import MainHeader from "./components/MainHeader";
import ImageView from "./components/ImageView";
import ScreenTextInput from "./components/ScreenTextInput";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <MainHeader />
        <ScreenTextInput />
      </View>
      <View style={styles.footer}>
        <ImageView />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
  },
  footer: {
    backgroundColor: "#333",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
});
