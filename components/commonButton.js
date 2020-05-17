import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

function CommonButton(props) {
  return (
    <Button
      title={props.title}
      buttonStyle={styles.commonButton}
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  commonButton: {
    height: 50,
    width: 200,
  },
});

export default CommonButton;
