import { Header } from "react-native-elements";

import React from "react";

function CommonHeader(props) {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{
        text: "WHAT SHOULD I COOK TONIGHT",
        style: { color: "#fff" },
      }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
}

export default CommonHeader;
