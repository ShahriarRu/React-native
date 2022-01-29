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
      <Button onPress={() => navigation.navigate("List")} title="Go to List" />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>This is List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
