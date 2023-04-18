import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { API_URL } from "react-native-dotenv";
import MyStack from "./Navigation/Stacks";

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default App;
