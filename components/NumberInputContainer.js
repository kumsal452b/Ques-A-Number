import React from "react";
import { Text, View, StyleSheet } from "react-native";
import color from "../constant/color";
const NumberInputContainer = function (props) {
  return (
    <View>
      <Text>{props.children}</Text>
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
  Number,
});
export default NumberInputContainer;
