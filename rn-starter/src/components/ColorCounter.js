import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button, View } from "react-native-web";

const ColorCounter = ({ color, onIncrese, onDecrease }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrese()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ColorCounter;
