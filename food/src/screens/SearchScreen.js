import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        ontermSubmit={() => console.log("Term submitted")}
      />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
