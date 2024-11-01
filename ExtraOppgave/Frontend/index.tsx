import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AppNavigator from "./AppNavigator";

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
