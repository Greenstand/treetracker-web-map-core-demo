import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import BottomNavigation from "./BottomNavigation";
import { useAuth } from "../context/AuthContext";
import NotificationScreen from "../screens/NotificationScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createStackNavigator<AuthStackParams>();

type AuthStackParams = {
  Root: undefined;
  Home: undefined;
  SignIn: undefined;
  Notification: undefined;
};

const AppNavigator = () => {
  const { userToken } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {userToken && <Stack.Screen name="Root" component={BottomNavigation} />}
      {!userToken && <Stack.Screen name="SignIn" component={SignInScreen} />}
      {userToken && (
        <Stack.Screen name="Notification" component={NotificationScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
