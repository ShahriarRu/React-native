import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native-web";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);
  return (
    <View>
      <ColorCounter
        onIncrese={() => {
          if (red + 15 > 256) {
            setRed(256);
          } else {
            setRed(red + 15);
          }
        }}
        onDecrease={() => {
          if (red - 15 < 0) {
            setRed(0);
          } else {
            setRed(red - 15);
          }
        }}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrese={() => {
          if (green + 15 > 256) {
            setGreen(256);
          } else {
            setGreen(green + 15);
          }
        }}
        onDecrease={() => {
          if (green - 15 < 0) {
            setGreen(0);
          } else {
            setGreen(green - 15);
          }
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrese={() => {
          if (blue + 15 > 256) {
            setBlue(256);
          } else {
            setBlue(blue + 15);
          }
        }}
        onDecrease={() => {
          if (blue - 15 < 0) {
            setBlue(0);
          } else {
            setBlue(blue - 15);
          }
        }}
      />

      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;
