import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import Card from "../components/Card";
import color from "../constant/color";
const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Start Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <TextInput
          value={props.value}
          style={styles.TextInput}
          onChangeText={props.onTextChange}
          placeholder="Enter a number"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              buttonStyle={{ backgroundColor: "black", color: "black" }}
              titleStyle={{
                color: "black",
              }}
            >
              <Text color={"black"}>Deneme</Text>
            </Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              style={styles.button}
              color={color.accent}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    marginTop: 30,
    width: "95%",
    paddingBottom: 3,
    marginBottom: 5,
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
    elevation: 2,
  },
  button1: {
    width: 100,
  },
  button: {
    width: 100,
    borderRadius: 10,
    borderColor: color.primary,
    borderWidth: 2,
    color: color.primary,
  },
});

export default StartGameScreen;
