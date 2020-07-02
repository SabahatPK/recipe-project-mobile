import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ListItem } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";

import CommonHeader from "../components/commonHeader";
import CommonButton from "./../components/commonButton";

function ResultingRecipes(props) {
  const { item } = props.route.params;
  console.log("-----item.winnerToPrint----");
  console.log(item.winnerToPrint);

  const badgeNumber = item.winnerToPrint.length
    ? (item.winnerToPrint[0][1] * 100).toFixed(2)
    : null;

  return (
    <View>
      <CommonHeader />
      {item.winnerToPrint.length ? (
        <ListItem rightTitle={"% of ingredients on hand"} bottomDivider />
      ) : null}
      <View>
        {item.winnerToPrint.map((each, index) => (
          <ListItem
            key={index}
            badge={{ value: () => <Text>{badgeNumber}</Text> }}
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
