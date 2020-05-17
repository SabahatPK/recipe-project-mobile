import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import CommonHeader from "../components/commonHeader";
import CategoryOfPantry from "../components/eachCategoryOfPantry";
import CommonButton from "../components/commonButton";

function Pantry(props) {
  return (
    <View>
      <CommonHeader />
      <View style={styles.commonScreen}>
        {/* One per type of category; maybe in accordian format */}
        <CategoryOfPantry />
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
