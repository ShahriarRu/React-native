import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetails = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} style={{ width: 500, height: 330 }}></Image>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageDetails;
