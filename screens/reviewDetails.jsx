import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Review({ route, navigation }) {
  const { body, key, rating, title } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{rating}</Text>
    </View>
  );
}
