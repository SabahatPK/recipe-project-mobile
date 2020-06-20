import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import CommonHeader from "../components/commonHeader";
import CategoryOfPantry from "../components/eachCategoryOfPantry";
import CommonButton from "../components/commonButton";

import PantryContext from "./../context/pantryContext";
import MyCheckbox from "../components/commonCheckbox";

function Pantry(props) {
  // const pantryInfo = useContext(PantryContext);

  const pantryIngredientsObj = props.route.params;
  const pantryIngredientsArr = [];

  for (const property in pantryIngredientsObj) {
    pantryIngredientsObj[property] ? pantryIngredientsArr.push(property) : null;
  }

  return (
    <View>
      <CommonHeader />
      <View style={styles.commonScreen}>
        {/* One per type of category; maybe in accordian format */}
        {pantryIngredientsArr.map((each, index) => (
          <Text key={index}>{each}</Text>
        ))}
        <CommonButton
          title="Modify Pantry"
          onPress={() => props.navigation.navigate("BuildPantry")}
        />
        <CommonButton
          title="Empty Pantry"
          onPress={() => console.log("Add function that empties the pantry.")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commonScreen: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Pantry;
