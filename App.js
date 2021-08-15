import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const title = "Merhaba";
  const [value, onTextChange] = useState("");
  const [userNumber, setUserNumber] = useState();
  const [guesRound, setGuesRound] = useState(0);
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuesRound(0);
  };
  const gameOverHandler = (roundNumber) => {
    setGuesRound(roundNumber);
  };

  let content = (
    <StartGameScreen
      value={value}
      onTextChange={onTextChange}
      GameStartHandler={startGameHandler}
    />
  );
  if (userNumber && guesRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guesRound > 0) {
    content = <GameOverScreen />;
  }
  return (
    <View style={styles.container}>
      <View>
        <Header title={title} />
      </View>
      <View>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
