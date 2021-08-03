import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Start Game Screen</Text>
      <View>
        <Text>Select A Number</Text>
        <TextInput
          value={props.value}
          style={styles.TextInput}
          onChangeText={props.onTextChange}
          placeholder="Enter a number"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "cyan",
  },
  TextInput: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    borderBottomColor: "black",
    borderWidth: 1,
  },
});

export default StartGameScreen;
