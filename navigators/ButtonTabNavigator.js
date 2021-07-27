import React from "react";
import { Text, View, Button, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03cafc",
      }}>
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "800" }}>
        Home is here!
      </Text>
    </View>
  );
};

const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Contact is here</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const About = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#48d969",
      }}>
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "800" }}>
        About is here
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "#e91e93" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={Platform.OS === "ios" ? "ios-call" : "md-call"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={
                Platform.OS === "ios"
                  ? "ios-information-circle"
                  : "md-information-circle"
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const ButtomTabNavigation = () => {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
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
    fontWeight: "800",
  },
});
