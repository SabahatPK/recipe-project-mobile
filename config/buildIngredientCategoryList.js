import dataRecipe from "../assets/data/recipeData.json";

export default function buildCategory() {
  let allCategories = [
    {
      category: "produce",
      id: "001",
      ingredients: [],
    },
    {
      category: "spices",
      id: "002",
      ingredients: [],
    },
    {
      category: "meatAndFish",
      id: "003",
      ingredients: [],
    },
    {
      category: "grains",
      id: "004",
      ingredients: [],
    },
    {
      category: "dairyAndEggs",
      id: "005",
      ingredients: [],
    },
    {
      category: "condiments",
      id: "006",
      ingredients: [],
    },
    {
      category: "noneOfTheAbove",
      id: "007",
      ingredients: [],
    },
    {
      category: "instructions",
      id: "008",
      ingredients: [],
    },
  ];

  let allIngredients = dataRecipe.map((each) => each.ingredients);

  for (let index = 0; index < allIngredients.length; index++) {
    for (
      let indexInner = 0;
      indexInner < allIngredients[index].length;
      indexInner++
    ) {
      if (allIngredients[index][indexInner][2]["category"] === "produce") {
        const found = allCategories.find(
          (element) => element["category"] === "produce"
        );

        found["ingredients"].push(allIngredients[index][indexInner][0]);
      } else if (
        allIngredients[index][indexInner][2]["category"] === "spices"
      ) {
        const found = allCategories.find(
          (element) => element["category"] === "spices"
        );

        found["ingredients"].push(allIngredients[index][indexInner][0]);
      } else if (
        allIngredients[index][indexInner][2]["category"] === "meatAndFish"
      ) {
        const found = allCategories.find(
          (element) => element["category"] === "meatAndFish"
        );

        found["ingredients"].push(allIngredients[index][indexInner][0]);
      } else if (
        allIngredients[index][indexInner][2]["category"] === "grains"
      ) {
        const found = allCategories.find(
          (element) => element["category"] === "grains"
        );

        found["ingredients"].push(allIngredients[index][indexInner][0]);
      } else if (
        allIngredients[index][indexInner][2]["category"] === "dairyAndEggs"
      ) {
        const found = allCategories.find(
          (element) => element["category"] === "dairyAndEggs"
        );

        found["ingredients"].push(allIngredients[index][indexInner][0]);
      } else if (
        allIngredients[index][indexInner][2]["category"] === "condiments"
      ) {
        const found = allCategories.find(
          (element) => element["category"] === "condiments"
        );

        found["ingredients"].push(allIngredients[index][indexInner][0]);
      } else {
        const found = allCategories.find(
          (element) => element["category"] === "noneOfTheAbove"
        );

        found["ingredients"].push(allIngredients[index][indexInner][0]);
      }
    }
  }

  //Get rid of dupes as ingredients come in from different lists:
  allCategories.map(
    (each) => (each.ingredients = Array.from(new Set(each.ingredients)))
  );

  return allCategories;
}
