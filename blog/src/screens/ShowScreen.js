import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <ScrollView>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>Content: {blogPost.content}</Text>
    </ScrollView>
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
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    padding: 5,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    margin: 5,
    letterSpacing: 1,
    lineHeight: 25,
  },
});

export default ShowScreen;
