import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MyStack from "./src/navigation/Stack";

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default App;
