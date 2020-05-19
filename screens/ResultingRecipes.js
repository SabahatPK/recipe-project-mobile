import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Badge } from "react-native-elements";

import FormSubmitContext from "./../components/formSubmitContext";

import CommonHeader from "../components/commonHeader";
import CommonButton from "./../components/commonButton";

function ResultingRecipes(props) {
  const formSubmitData = useContext(FormSubmitContext);
  console.log("This is formSubmitData: " + formSubmitData);

  const winningRecipes = ["Recipe1", "Recipe2", "Recipe3"];
  return (
    <View>
      <CommonHeader />
      <View style={styles.commonScreen}>
        {winningRecipes.map((each, index) => (
          <View key={index}>
            <Badge value="99" status="success" />
            {/* Make this a URL: */}
            <ListItem
              titleStyle={styles.myListItem}
              key={index}
              title={each}
              bottomDivider
            />
          </View>
        ))}

        <CommonButton
          title="Go To Pantry"
          onPress={() => props.navigation.navigate("Pantry")}
        />
        <CommonButton
          title="Clear All Recipes"
          onPress={() => console.log("Build function to clear all recipes.")}
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
  myListItem: {
    fontSize: 20,
  },
});

export default ResultingRecipes;
