import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import CommonHeader from "../components/commonHeader";
import CommonButton from "../components/commonButton";

function Pantry(props) {
  const pantryIngredientsObj = props.route.params;
  const pantryIngredientsArr = [];

  for (const property in pantryIngredientsObj) {
    pantryIngredientsObj[property] ? pantryIngredientsArr.push(property) : null;
  }

  return (
    <View>
      <CommonHeader />
      {pantryIngredientsArr.length === 0 ? (
        <Text>No items in pantry</Text>
      ) : null}
      <View style={styles.commonScreen}>
        {/* One per type of category; maybe in accordian format */}
        {pantryIngredientsArr.map((each, index) => (
          <Text key={index}>{each}</Text>
        ))}
        <CommonButton
          title="Modify Pantry"
          onPress={() => props.navigation.navigate("BuildPantry")}
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
