import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useDispatch, useSelector, Provider } from "react-redux";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../store/slices/dataSlice";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/buttons";

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.data.loading);
  const error = useSelector((state: any) => state.data.error);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataStart());
      try {
        const response = await fetch(`http://10.1.120.221:5000/api/home`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        if (data.Training?.message) {
          dispatch(
            fetchDataSuccess({
              screen: "Training",
              message: data.Training.message,
            })
          );
        }
        if (data.Hiking?.message) {
          dispatch(
            fetchDataSuccess({ screen: "Hiking", message: data.Hiking.message })
          );
        }
        if (data.Glasses?.message) {
          dispatch(
            fetchDataSuccess({
              screen: "Glasses",
              message: data.Glasses.message,
            })
          );
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch(fetchDataFailure(error.message));
        } else {
          dispatch(fetchDataFailure("An unknown error occurred"));
        }
      }
    };

    fetchData();
  }, [dispatch]);

  const handlePress = () => {
    navigation.navigate("Training");
  };
  const handlePress2 = () => {
    navigation.navigate("Hiking");
  };
  const handlePress3 = () => {
    navigation.navigate("SunGlasses");
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 30 }]}>Welcome to ProBy</Text>
      <Text style={[styles.text, { fontSize: 22 }]}>
        Here you can buy{"\n"}the latest of
      </Text>
      <View style={styles.mainButtons}>
        <Button buttonName={"Treningstøy"} onPress={handlePress} />
        <Button buttonName={"Turutstyr"} onPress={handlePress2} />
        <Button buttonName={"Solbriller"} onPress={handlePress3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  mainButtons: {
    marginVertical: 20,
    flexDirection: "row",
    gap: 20,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
