import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import CommonHeader from "../components/commonHeader";
import CommonButton from "./../components/commonButton";

function WelcomeScreen(props) {
  return (
    <View>
      <CommonHeader />
      <View style={styles.commonScreen}>
        <Text h4>As easy as...</Text>
        <CommonButton
          title="STEP 1: Build Pantry"
          onPress={() => props.navigation.navigate("BuildPantry")}
        />
        <CommonButton
          title="STEP 2: Show Recipes"
          onPress={() => props.navigation.navigate("ResultingRecipes")}
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

export default WelcomeScreen;
