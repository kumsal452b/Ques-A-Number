import React from "react";
import { Text, View, Textinput, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 20,
    padding: 3,
  },
});
export default Card;
