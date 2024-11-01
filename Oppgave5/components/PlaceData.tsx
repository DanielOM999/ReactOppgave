import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as Location from "expo-location";

interface PDProps {
  showText: string;
  setplaceData: (data: [string, string]) => void;
}

function PlaceData({ showText, setplaceData }: PDProps) {
  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        if (showText) {
          const placeName = showText;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
              placeName
            )}&format=json`,
            {
              headers: {
                "User-Agent": "MyApp/1.0 (myemail@example.com)",
              },
            }
          );
          let data = await response.json();
          if (data && data.length > 0) {
            data = [data[0].lat, data[0].lon];
            setplaceData(data);
          }
        } else {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            setplaceData(["51.4820845", "-0.0045417"]);
          }

          let location = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = location.coords;
          let locationData: [string, string] = [
            latitude.toString(),
            longitude.toString(),
          ];
          setplaceData(locationData);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchPlaceData();

    const intervalId = setInterval(fetchPlaceData, 300000);

    return () => clearInterval(intervalId);
  }, [showText]);

  return null;
}

export default PlaceData;

const styles = StyleSheet.create({
  WText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});
