import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import BuildPantry from "./../screens/BuildPantry";
import ResultingRecipes from "./../screens/ResultingRecipes";
import Pantry from "./../screens/Pantry";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
        <Stack.Screen name="BuildPantry" component={BuildPantry} />
        <Stack.Screen name="ResultingRecipes" component={ResultingRecipes} />
        <Stack.Screen name="Pantry" component={Pantry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
