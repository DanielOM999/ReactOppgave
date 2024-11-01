import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import MainHeader from "./components/MainHeader";
import WeatherData from "./components/WeatherData";
import PlaceData from "./components/PlaceData";
import ScreenTextInput from "./components/ScreenTextInput";
import Timer from "./components/timer";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const [showText, setShowText] = useState("");
  const [placeData, setplaceData] = useState<[string, string] | null>(null);
  const [localTime, setLocalTime] = useState("");

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <LinearGradient colors={["#111", "#222", "#333"]} style={styles.container}>
      <PlaceData showText={showText} setplaceData={setplaceData} />
      <Timer placeData={placeData} setLocalTime={setLocalTime} />

      <MainHeader showText={showText} />
      <ScreenTextInput setShowText={setShowText} />
      <WeatherData
        placeData={placeData}
        setLocalTime={setLocalTime}
        localTime={localTime}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    minHeight: "100%",
    padding: 20,
  },
});
