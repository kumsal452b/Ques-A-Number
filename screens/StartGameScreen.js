import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Start Game Screen</Text>
      <View>
        <Text>Select A Number</Text>
        <TextInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default StartGameScreen;
