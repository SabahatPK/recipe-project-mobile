import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Picker } from "@react-native-community/picker";

import CommonHeader from "./../components/commonHeader";
import CommonCheckbox from "../components/commonCheckbox";
import CommonButton from "./../components/commonButton";

// import dataRecipe from "../assets/data/recipeData.json";
import buildCategory from "../config/buildIngredientCategoryList.js";

function BuildPantry(props) {
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [indgredientCategories] = useState(buildCategory());
  const [objOfCheckboxes, setObjOfCheckboxes] = useState({});
  const ingredients = [1, 2, 3];

  function handleProduceChange(choice) {
    let tempCategory = category;
    tempCategory = choice;

    let tempSelectedCategory = indgredientCategories.filter(
      (each) => each.category === tempCategory
    );

    const obj = tempSelectedCategory[0]["ingredients"].reduce(
      (o, key) => ({ ...o, [key]: false }),
      {}
    );

    let tempObjOfCheckboxes = { ...obj, ...objOfCheckboxes };

    setCategory(tempCategory);
    setSelectedCategory(tempSelectedCategory);
    setObjOfCheckboxes(tempObjOfCheckboxes);
  }

  //START HERE: Build function that returns array of ingredients per category chosen.
  //Then, use that array to build one checkbox per ingredient; map()
  //https://react-native-elements.github.io/react-native-elements/docs/checkbox.html

  return (
    <View>
      <CommonHeader />

      <Picker
        selectedValue={1}
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
      <Text style={styles.myText}>{category}:</Text>
      {/* START HERE: Build form based on web version; use Formik */}
      {/* Web version: ...recipe-project\src\componentsWithHooks\ingredientPickerHooks.jsx */}
      {ingredients.map((each) => (
        <CommonCheckbox />
      ))}
      <CommonButton
        title="Show Pantry"
        onPress={() => props.navigation.navigate("Pantry")}
      />
      <CommonButton
        title="Show Recipes"
        onPress={() => props.navigation.navigate("ResultingRecipes")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  myText: {
    fontSize: 20,
  },
});

export default BuildPantry;
