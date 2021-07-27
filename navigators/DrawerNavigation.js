import React from "react";
import { View, StyleSheet, ScrollView, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import { Home } from "../screens/Home";
import { Contact } from "../screens/contact";

const CustomDrawerContent = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.drawerHeader}>
        <View>
          <Text style={styles.drawerHeaderText}>Drawer Menu</Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={() => (
            <Icon
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color="black"
              size={22}
            />
          )}
          label="close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    </ScrollView>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="contact" component={Contact} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#03cafc",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#ffff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};
