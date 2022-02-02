import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button, TouchableOpacity, View } from "react-native-web";

const HomeScreen = ({ navigation }) => {
  console.log();
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components"
      />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />

      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />

      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen"
      />

      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Screen"
      />

      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
