import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import NumberInputContainer from "../components/NumberInputContainer";
import Card from "../components/Card";

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
      <Card>
        <TouchableOpacity>
          <Text>LOWER</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
});
export default GameScreen;
