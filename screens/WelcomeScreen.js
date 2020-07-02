import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import CommonHeader from "../components/commonHeader";
import CommonButton from "./../components/commonButton";

function WelcomeScreen(props) {
  const updateState = function (choice) {
    console.log("something");
  };

  return (
    <View>
      <CommonHeader />
      <View style={styles.commonScreen}>
        <CommonButton
          title="Build/Update Pantry"
          onPress={() => props.navigation.navigate("BuildPantry")}
        />
        {/* <CommonButton
          title="STEP 2: Show Recipes"
          onPress={() =>
            props.navigation.navigate("ResultingRecipes", updateState)
          }
        /> */}
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

export default WelcomeScreen;
