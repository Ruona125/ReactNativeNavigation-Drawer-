import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerNavigation } from "./navigators/DrawerNavigation";
import { ButtomTabNavigation } from "./navigators/ButtonTabNavigator";

export default function App() {
  return <ButtomTabNavigation />;
}
