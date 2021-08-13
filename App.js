import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const title = "Merhaba";
  const [value, onTextChange] = useState("");
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = (
    <StartGameScreen
      value={value}
      onTextChange={onTextChange}
      GameStartHandler={startGameHandler}
    />
  );
  if (userNumber) {
    content = <GameScreen />;
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
  container: {
    flex: 1,
  },
});
