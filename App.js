import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { DrawerNavigation } from "./navigators/DrawerNavigation";

export default function App() {
  return <DrawerNavigation />;
}
