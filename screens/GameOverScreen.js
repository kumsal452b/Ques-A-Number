import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game's over</Text>
      <Text>Number of rounds {props.roundNumber}</Text>
      <Text>User number was {props.userNumber}</Text>
      <View>
        <Button title="NEW GAME" onPress={props.onRestartHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
