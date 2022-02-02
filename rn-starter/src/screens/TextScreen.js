import React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react/cjs/react.development";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
