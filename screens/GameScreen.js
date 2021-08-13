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
  const nextGuesNumber = (direction) => {};
  return (
    <View style={styles.screen}>
      <Text>Opponent's Gues</Text>
      <NumberInputContainer>{currentGues}</NumberInputContainer>
      <Card style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={nextGuesNumber.bind(this, "lower")}
        >
          <Text>LOWER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={nextGuesNumber.bind(this, "greater")}
        >
          <Text>GREATER</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
    maxWidth: "80%",
  },
  button1: {
    width: 100,
    height: 40,
    borderBottomEndRadius: 10,
    borderColor: color.accent,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    color: color.accent,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  button: {
    width: 100,
    height: 40,
    borderBottomStartRadius: 10,
    borderColor: color.primary,
    borderBottomWidth: 2,
    borderStartWidth: 2,
    color: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GameScreen;
