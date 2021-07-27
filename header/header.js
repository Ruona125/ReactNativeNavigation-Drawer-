import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icons} onPress={openMenu}>
        <Ionicons name="md-menu" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 26,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flexDirection: "row",
    alignContent: "center",
    alignContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
    top: 19,
  },
  icons: {
    position: "absolute",
    left: 16,
    top: 15,
  },
});
