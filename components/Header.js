import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default Header;
