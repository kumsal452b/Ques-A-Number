import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
export default function App() {
  const title = "Merhaba";
  return (
    <View>
      <View style>
        <Header title={title} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor:
      "radial-gradient(circle, rgba(58,151,221,1) 49%, rgba(24,40,87,1) 66%)",
    marginTop: 20,
  },
});
