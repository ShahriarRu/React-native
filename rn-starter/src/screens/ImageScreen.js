import React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native-web";
import ImageDetails from "./ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
