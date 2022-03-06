import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
          title="Save Blog Post"
          onPress={() => onSubmit(title, content)}
        />
      </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
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

export default BlogPostForm;
