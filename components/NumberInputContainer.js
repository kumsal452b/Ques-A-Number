import React from "react";
import { Text, View, StyleSheet } from "react-native";
import color from "../constant/color";
const NumberInputContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: color.primary,
    borderTopWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: color.accent,
    fontSize: 22,
  },
});
export default NumberInputContainer;
