import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor:
      "radial-gradient(circle, rgba(58,151,221,1) 49%, rgba(24,40,87,1) 66%)",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 23,
  },
});
export default Header;
