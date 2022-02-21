import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <View style={styles.button}>
        <Button
          color="#5EBA7D"
          title="Add Blog Post"
          onPress={() => {
            addBlogPost(title, content, () => {
              navigation.navigate("Index");
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  label: {
    marginVertical: 10,
    fontSize: 18,
  },
  container: {
    marginHorizontal: 5,
  },
  button: {
    marginTop: 15,
    borderRadius: 5,
    fontWeight: "bold",
  },
});

export default CreateScreen;
