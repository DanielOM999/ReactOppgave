import React from "react";
import TopBar from "./components/TopBar";
import Box from "./components/Box";
import HeadingText from "./components/HeadingText";
import MainButton from "./components/MainButton";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.boxes}>
        <Box bgColor="#67fd0c">Box 1</Box>

        <View style={styles.middleRow}>
          <Box bgColor="#f9fd5e">Box 2</Box>
        </View>

        <Box bgColor="#141314">Box 3</Box>
      </View>
      <HeadingText />
      <MainButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 7,
    borderColor: 'black'
  },
  boxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    alignItems: "flex-start"
  },
  middleRow: {
    marginTop: 82
  },
});
