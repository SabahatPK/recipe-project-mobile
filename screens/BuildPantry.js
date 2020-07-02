import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Picker } from "@react-native-community/picker";

import CommonHeader from "./../components/commonHeader";
import MyCheckbox from "../components/commonCheckbox";
import CommonButton from "./../components/commonButton";

import dataRecipe from "../assets/data/recipeData.json";
import buildCategory from "../config/buildIngredientCategoryList.js";

function BuildPantry(props) {
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [indgredientCategories] = useState(buildCategory());
  const [objOfCheckboxes, setObjOfCheckboxes] = useState({});
  const [justArrayOfIngredients, setJustArrayOfIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipes] = useState(dataRecipe);
  const [winner, setWinner] = useState([]);
  const [winnerToPrint, setWinnerToPrint] = useState([]);

  function handleProduceChange(choice) {
    let tempCategory = category;
    tempCategory = choice;

    let tempSelectedCategory = indgredientCategories.filter(
      (each) => each.category === tempCategory
    );

    //Middle ground:
    const tempJustArrayOfIngredients = tempSelectedCategory[0]["ingredients"];

    const obj = tempSelectedCategory[0]["ingredients"].reduce(
      (o, key) => ({ ...o, [key]: false }),
      {}
    );

    let tempObjOfCheckboxes = { ...obj, ...objOfCheckboxes };

    setCategory(tempCategory);
    setSelectedCategory(tempSelectedCategory);
    setObjOfCheckboxes(tempObjOfCheckboxes);
    setJustArrayOfIngredients(tempJustArrayOfIngredients);
  }

  function handleCheckboxChange(ingredientName) {
    let tempObjOfCheckboxes = { ...objOfCheckboxes };

    tempObjOfCheckboxes[ingredientName] = !tempObjOfCheckboxes[ingredientName];

    let tempSelectedIngredients = selectedIngredients;
    if (
      tempObjOfCheckboxes[ingredientName] === true &&
      tempSelectedIngredients.indexOf(ingredientName) < 0
    ) {
      tempSelectedIngredients.push(ingredientName);
    } else {
      tempSelectedIngredients.splice(
        tempSelectedIngredients.indexOf(ingredientName),
        1
      );
    }
    setSelectedIngredients(tempSelectedIngredients);
    setObjOfCheckboxes(tempObjOfCheckboxes);

    whoAreTheWinners();
  }

  function whoAreTheWinners() {
    let tempSelectedIngredients = selectedIngredients;

    let tempWinner = winner;
    tempWinner = [];

    recipes.forEach(function (recipe) {
      let totalCount = 0;
      let match = 0;

      recipe["ingredients"].forEach(function (d) {
        totalCount += 1;

        if (!(tempSelectedIngredients.indexOf(d[0]) < 0)) {
          match += 1;
        }
      });
      tempWinner.push([recipe, match / totalCount]);
    });

    let tempWinnerToPrint = tempWinner.filter((each) => each[1] > 0);
    setWinner(tempWinner);
    setWinnerToPrint(tempWinnerToPrint);
  }

  function createCheckbox(option) {
    return (
      <MyCheckbox
        option={option}
        value={objOfCheckboxes[option]}
        onValueChange={() => handleCheckboxChange(option)}
        key={option}
      />
    );
  }

  function createCheckboxes() {
    return selectedCategory
      ? selectedCategory[0]["ingredients"].map(createCheckbox)
      : null;
  }

  function emptyPantry() {
    setObjOfCheckboxes({});
    setWinner([]);
    setWinnerToPrint([]);
  }

  return (
    <ScrollView>
      <View>
        <CommonHeader />

        <Picker
          selectedValue={category}
          style={{ height: 50, width: 300 }}
          onValueChange={handleProduceChange}
        >
          <Picker.Item label="What's in the pantry?" value="instructions" />
          <Picker.Item label="Produce" value="produce" />
          <Picker.Item label="Spices" value="spices" />
          <Picker.Item label="Meat and Fish" value="meatAndFish" />
          <Picker.Item label="Grains" value="grains" />
          <Picker.Item label="Dairy and Eggs" value="dairyAndEggs" />
          <Picker.Item label="Condiments" value="condiments" />
        </Picker>

        <View>{createCheckboxes()}</View>

        <CommonButton
          title="Show Pantry"
          onPress={() => props.navigation.navigate("Pantry", objOfCheckboxes)}
        />
        <CommonButton title="Empty Pantry" onPress={() => emptyPantry()} />

        <CommonButton
          title="Show Recipes"
          onPress={() =>
            props.navigation.navigate("ResultingRecipes", {
              item: { winnerToPrint, objOfCheckboxes },
            })
          }
        />
      </View>
    </ScrollView>
  );
}

export default BuildPantry;
