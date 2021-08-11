import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import color from "../constant/color";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const InputValueHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
    setConfirmed(false);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };
  const confirmedHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (choosenNumber === NaN || choosenNumber < 0 || choosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Choosen Number:{selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>The Start Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            blurOnSubmit
            autoCapitalize="none"
            maxLength={2}
            onChangeText={InputValueHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={resetInputHandler}
              >
                <Text style={{ color: color.primary }}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button1}
                onPress={confirmedHandler}
              >
                <Text style={{ color: color.accent }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  input: {
    width: "95%",
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 10,
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
    height: 40,
    borderRadius: 10,
    borderColor: color.accent,
    borderWidth: 2,
    color: color.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    borderColor: color.primary,
    borderWidth: 2,
    color: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StartGameScreen;
