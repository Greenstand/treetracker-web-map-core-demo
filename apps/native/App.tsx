import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RecoilRoot } from "recoil";

import { AuthProvider } from "./src/context/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <RecoilRoot>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </RecoilRoot>
  );
};
export default App;
