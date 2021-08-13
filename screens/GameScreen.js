import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import NumberInputContainer from "../components/NumberInputContainer";
import Card from "../components/Card";
import color from "../constant/color";
const generateNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndm = Math.floor(Math.random() * (max - min)) + min;
  if (rndm === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndm;
  }
};

const GameScreen = (props) => {
  const [currentGues, setCurrentGues] = useState(
    generateNumberBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent's Gues</Text>
      <NumberInputContainer>{currentGues}</NumberInputContainer>
      <Card style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text>LOWER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>GREATER</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
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
export default GameScreen;
