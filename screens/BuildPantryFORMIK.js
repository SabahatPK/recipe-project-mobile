import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import { Picker } from "@react-native-community/picker";
import { Formik } from "formik";

import CommonHeader from "../components/commonHeader";
import CommonCheckbox from "../components/commonCheckbox";
import CommonButton from "../components/commonButton";

// import dataRecipe from "../assets/data/recipeData.json";
import buildCategory from "../config/buildIngredientCategoryList.js";

function BuildPantry(props) {
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [indgredientCategories] = useState(buildCategory());
  const [objOfCheckboxes, setObjOfCheckboxes] = useState({});
  const ingredients = [1, 2, 3];

  // function handleProduceChange(choice) {
  //   let tempCategory = category;
  //   tempCategory = choice;

  //   let tempSelectedCategory = indgredientCategories.filter(
  //     (each) => each.category === tempCategory
  //   );

  //   const obj = tempSelectedCategory[0]["ingredients"].reduce(
  //     (o, key) => ({ ...o, [key]: false }),
  //     {}
  //   );

  //   let tempObjOfCheckboxes = { ...obj, ...objOfCheckboxes };

  //   setCategory(tempCategory);
  //   setSelectedCategory(tempSelectedCategory);
  //   setObjOfCheckboxes(tempObjOfCheckboxes);
  // }

  function buildIngredientsChoice(groceryCategory) {
    console.log(groceryCategory);

    const ingredientsInChosenCategory = indgredientCategories.filter(
      (each) => each.category === groceryCategory
    );

    //Middle ground:
    const justArrayOfIngredients =
      ingredientsInChosenCategory[0]["ingredients"];

    // Build obj of ingredients:
    const objOfIngredientsCheckboxes = ingredientsInChosenCategory[0][
      "ingredients"
    ].reduce((o, key) => ({ ...o, [key]: false }), {});

    console.log(justArrayOfIngredients);

    return justArrayOfIngredients.map((each, index) => (
      <CommonCheckbox key={index} title={each}></CommonCheckbox>
    ));
  }

  //START HERE: Build function that returns array of ingredients per category chosen.
  //Then, use that array to build one checkbox per ingredient; map()
  //https://react-native-elements.github.io/react-native-elements/docs/checkbox.html

  const initialValues = {
    selectedCategory: "",
  };

  function handleSubmit() {
    console.log("Handle submit");
  }

  return (
    <View>
      <CommonHeader />

      <View>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(formik) => (
            <>
              <View>
                <Picker
                  // passing value directly from formik
                  selectedValue={formik.values.selectedCategory}
                  // changing value in formik
                  onValueChange={(itemValue) =>
                    formik.setFieldValue("selectedCategory", itemValue)
                  }
                >
                  <Picker.Item
                    label="Select your category"
                    value={initialValues.selectedCategory}
                    key={0}
                  />

                  <Picker.Item label="Produce" value="produce" key={1} />
                  <Picker.Item label="Spices" value="spices" key={2} />
                  <Picker.Item
                    label="Meat and Fish"
                    value="meatAndFish"
                    key={3}
                  />
                  <Picker.Item label="Grains" value="grains" key={4} />
                  <Picker.Item
                    label="Dairy and Eggs"
                    value="dairyAndEggs"
                    key={5}
                  />
                  <Picker.Item label="Condiments" value="condiments" key={6} />
                </Picker>
              </View>
              {/* {formik.values.selectedCategory ? (
                <CommonCheckbox title={formik.values.selectedCategory} />
              ) : null} */}
              {formik.values.selectedCategory
                ? buildIngredientsChoice(formik.values.selectedCategory)
                : null}
              {/* submitting formik instead of calling this.handleSubmit directly */}
              <Button title="Submit" onPress={formik.handleSubmit} />
            </>
          )}
        </Formik>
      </View>

      {/* <Text style={styles.myText}>{category}:</Text>
      {ingredients.map((each) => (
        <CommonCheckbox key={each} />
      ))} */}
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
