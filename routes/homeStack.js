import Home from "../screens/Home";
import About from "../screens/About";
import Review from "../screens/reviewDetails";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./drawer";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerTintColor: "#444",
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      >
        <Stack.Screen name="GameZone" component={DrawerNavigator} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Review Details" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
