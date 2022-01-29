import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend1" },
    { name: "friend2" },
    { name: "friend3" },
    { name: "friend4" },
    { name: "friend5" },
    { name: "friend6" },
    { name: "friend7" },
    { name: "friend8" },
    { name: "friend9" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
