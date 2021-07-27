import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { Header } from "../header/header";

export const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Contact" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Contact is here</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c203fc",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
