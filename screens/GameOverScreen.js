import React from "react";
import { View, StyleSheet, Text } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game's over</Text>
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
