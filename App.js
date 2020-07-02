import React from "react";

import WelcomeScreen from "./screens/WelcomeScreen";
import BuildPantry from "./screens/BuildPantry";
import ResultingRecipes from "./screens/ResultingRecipes";
import Pantry from "./screens/Pantry";
import MainStackNavigator from "./routes/stack";

export default function App() {
  return <MainStackNavigator />;
}
