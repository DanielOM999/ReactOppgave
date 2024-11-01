import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/MainScreen";
import TrainingScreen from "./screens/Training";
import HikingScreen from "./screens/Hiking";
import SunGlassesScreen from "./screens/SunGlasses";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Training" component={TrainingScreen} options={{ title: 'Training' }} />
        <Stack.Screen name="Hiking" component={HikingScreen} options={{ title: 'Hiking Stuff' }} />
        <Stack.Screen name="SunGlasses" component={SunGlassesScreen} options={{ title: 'Sun Glasses' }} />
      </Stack.Navigator>
  );
}

export default AppNavigator;
