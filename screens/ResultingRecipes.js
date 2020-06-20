import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ListItem } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";

import CommonHeader from "../components/commonHeader";
import CommonButton from "./../components/commonButton";

function ResultingRecipes(props) {
  const { item } = props.route.params;

  //outs: badge does not show correct value

  return (
    <View>
      <CommonHeader />
      <View>
        {item.winnerToPrint.map((each, index) => (
          <ListItem
            key={index}
            badge={{ value: 33 }}
            // badge={{ value: () => <Text>{each[0][1]}</Text> }}
            title={each[0]["recipeName"]}
            onPress={() => WebBrowser.openBrowserAsync(each[0]["URL"])}
            bottomDivider
          />
        ))}

        <CommonButton
          title="Go To Pantry"
          onPress={() =>
            props.navigation.navigate("Pantry", item.objOfCheckboxes)
          }
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
});

export default ResultingRecipes;
