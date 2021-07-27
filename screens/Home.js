import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Header } from "../header/header";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Home" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Home is here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03cacf",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
