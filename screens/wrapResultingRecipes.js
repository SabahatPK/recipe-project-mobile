import React from "react";

import FormSubmitContext from "./../components/formSubmitContext";

import ResultingRecipes from "./ResultingRecipes";

function WrapResultingRecipes({ testContextData }) {
  return (
    <FormSubmitContext.Provider value={testContextData}>
      <ResultingRecipes />
    </FormSubmitContext.Provider>
  );
}

export default WrapResultingRecipes;
