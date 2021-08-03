import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Start Game Screen</Text>
      <View style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <TextInput
          value={props.value}
          style={styles.TextInput}
          onChangeText={props.onTextChange}
          placeholder="Enter a number"
          style={styles.inout}
        />
        <View style={styles.buttonContainer}>
          <Button title="Reset" style={styles.button} />
          <Button title="Confirm" style={styles.button} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  inout: {
    borderBottomColor: "black",
    borderWidth: 1,
    marginTop: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
