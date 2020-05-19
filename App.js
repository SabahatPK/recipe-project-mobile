import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import BuildPantry from "./screens/BuildPantry";
import ResultingRecipes from "./screens/ResultingRecipes";
import Pantry from "./screens/Pantry";
import WrapResultingRecipes from "./screens/wrapResultingRecipes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: "Welcome!" }}
        />
        <Stack.Screen
          name="BuildPantry"
          component={BuildPantry}
          options={{ title: "Build Your Pantry" }}
        />
        <Stack.Screen
          name="WrapResultingRecipes"
          component={WrapResultingRecipes}
          options={{ title: "WrapResultingRecipes" }}
        />
        <Stack.Screen
          name="ResultingRecipes"
          component={ResultingRecipes}
          options={{ title: "The Winning Recipes" }}
        />
        <Stack.Screen
          name="Pantry"
          component={Pantry}
          options={{ title: "Complete Pantry" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Use Formik to build pantry? https://jaredpalmer.com/formik
