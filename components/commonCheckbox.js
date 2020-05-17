import React from "react";
import { CheckBox } from "react-native-elements";

function CommonCheckbox(props) {
  return <CheckBox title={props.title} checked={true} />;
}

export default CommonCheckbox;
