import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import color from "../constant/color";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  return (
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
        />
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: color.primary }}>Deneme</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ color: color.accent }}>Deneme</Text>
            </TouchableOpacity>
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
