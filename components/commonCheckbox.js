import React from "react";
import { View, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const MyCheckbox = ({ option, value, onValueChange }) => {
  return (
    <View>
      <Text>{option}</Text>
      <CheckBox value={value} onValueChange={onValueChange} key={option} />
    </View>
  );
};

export default MyCheckbox;
