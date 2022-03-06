import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>Title: {blogPost.title}</Text>
      <Text>Content: {blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather style={styles.edit} name="edit" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  edit: {
    marginRight: 10,
    color: "#5EBA7D",
  },
});

export default ShowScreen;
