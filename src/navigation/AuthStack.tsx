import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SignInScreen from "../screens/SignInScreen";

type AuthStackParams = {
  Home: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<AuthStackParams>();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignInScreen} />
  </Stack.Navigator>
);

export default AuthStack;
