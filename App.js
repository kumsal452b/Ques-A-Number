import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import WebView from "react-native-webview";

export default function App() {
  const title = "Merhaba";
  const [value, onTextChange] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Header title={title} />
      </View>
      <View>
        <StartGameScreen value={value} onTextChange={onTextChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
