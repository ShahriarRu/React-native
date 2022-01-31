import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          console.log(counter);
          setCounter(counter + 1);
        }}
      />
      <Button
        onPress={() => {
          console.log(counter);
          setCounter(counter - 1);
        }}
        title="Decrease"
      />
      <Text style={styles.textStyle}> Current Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CounterScreen;
