import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import BottomNavigation from "./BottomNavigation";
import DrawerNavigation from "./DrawerNavigation";
import { ArrowLeft } from "../components/Icons";
import { useAuth } from "../context/AuthContext";
import NotificationScreen from "../screens/NotificationScreen";
import PasswordScreen from "../screens/PasswordScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SignInScreen from "../screens/SignInScreen";
import TransactionScreen from "../screens/TransactionScreen";
import TransferScreen from "../screens/TransferScreen";
import WalletsScreen from "../screens/WalletsScreen";
import theme from "../utils/theme";

const Stack = createStackNavigator<AuthStackParams>();

type AuthStackParams = {
  Root: undefined;
  Home: undefined;
  SignIn: undefined;
  Notification: undefined;
  Transfer: undefined;
  Drawer: undefined;
  Transaction: undefined;
  Wallets: undefined;
  Password: undefined;
  Settings: undefined;
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
      {!userToken ? (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      ) : (
        <>
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
          <Stack.Screen name="Root" component={BottomNavigation} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen
            name="Transfer"
            component={TransferScreen}
            options={{
              headerShown: true,
              title: "Transfer",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => alert("This is a back button!")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{
              headerShown: true,
              title: "Transaction",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => alert("This is a back button!")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Wallets"
            component={WalletsScreen}
            options={{
              headerShown: true,
              title: "Wallets",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => alert("This is a back button!")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Password"
            component={PasswordScreen}
            options={{
              headerShown: true,
              title: "Password",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => alert("This is a back button!")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerShown: true,
              title: "Settings",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => alert("This is a back button!")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
        </>
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
