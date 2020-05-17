import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

import CommonCheckbox from "./commonCheckbox";

function CategoryOfPantry(props) {
  return (
    <View>
      <Text h4>Category Title From Props</Text>
      {/* Build one checkbox per ingredient for each category (from props) */}
      <CommonCheckbox />
    </View>
  );
}

export default CategoryOfPantry;
