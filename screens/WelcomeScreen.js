import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import CommonHeader from "../components/commonHeader";
import CommonButton from "./../components/commonButton";

import WinRecipeContext from "./../context/winRecipeContext";

function WelcomeScreen(props) {
  const data = useContext(WinRecipeContext);
  console.log(data);

  return (
    <View>
      <CommonHeader />
      <View style={styles.commonScreen}>
        <Text h4>As easy as...</Text>
        <Text>{data}</Text>
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
