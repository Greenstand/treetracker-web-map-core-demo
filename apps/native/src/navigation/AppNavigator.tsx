import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import BottomNavigation from "./BottomNavigation";
import { ArrowLeft } from "../components/Icons";
import { useAuth } from "../context/AuthContext";
import NotificationScreen from "../screens/NotificationScreen";
import SignInScreen from "../screens/SignInScreen";
import TransferScreen from "../screens/TransferScreen";
import theme from "../utils/theme";

const Stack = createStackNavigator<AuthStackParams>();

type AuthStackParams = {
  Root: undefined;
  Home: undefined;
  SignIn: undefined;
  Notification: undefined;
  Transfer: undefined;
};

const AppNavigator = () => {
  const { userToken } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        ...navHeaderStyle,
      }}>
      {userToken && <Stack.Screen name="Root" component={BottomNavigation} />}
      {!userToken && <Stack.Screen name="SignIn" component={SignInScreen} />}
      {userToken && (
        <Stack.Screen name="Notification" component={NotificationScreen} />
      )}
      {userToken && (
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={{
            headerShown: true,
            title: "Transfer",
            headerLeft: () => (
              <TouchableOpacity onPress={() => alert("This is a back button!")}>
                <ArrowLeft />
              </TouchableOpacity>
            ),
          }}
        />
      )}
    </Stack.Navigator>
  );
};

const navHeaderStyle = StyleSheet.create({
  headerStyle: {
    backgroundColor: theme.colors.grayWhite,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerTitleContainerStyle: {
    marginLeft: -20,
  },
});

export default AppNavigator;
