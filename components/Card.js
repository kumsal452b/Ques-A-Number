import React from "react";
import { Text, View, Textinput, Stylesheet } from "react-native";

const Card = (props) => {
  return <View style={styles.Card}>props.children</View>;
};
const styles = Stylesheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 10,
  },
});
export default Card;
