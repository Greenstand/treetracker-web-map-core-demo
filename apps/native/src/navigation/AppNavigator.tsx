import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useTransferWizard from "demo-core/models/transfer/useTransferWizard";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

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
import TransferScreen2 from "../screens/TransferScreen2";
import TransferScreen3 from "../screens/TransferScreen3";
import WalletScreen from "../screens/WalletScreen";
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
  Wallet: undefined;
  Password: undefined;
  Settings: undefined;
  Transfer2: undefined;
  Transfer3: undefined;
};

const AppNavigator = () => {
  const { userToken } = useAuth();
  const navigation = useNavigation<any>();
  const transferWizard = useTransferWizard();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 1000);
  }, [transferWizard.isTransferable]);

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
                <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Transfer2"
            component={TransferScreen2}
            options={{
              headerShown: true,
              title: "Confirm",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Transfer")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Transfer3"
            component={TransferScreen3}
            options={{
              headerShown: true,
              title: "Done!",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Wallet"
            component={WalletScreen}
            options={{
              headerShown: true,
              title: "Wallet",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <ArrowLeft />
                </TouchableOpacity>
              ),
              headerRight: () =>
                transferWizard.isTransferable ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Transfer")}
                    style={{ backgroundColor: "black", padding: 3 }}>
                    <Text
                      style={{
                        color: `${visible ? "#3FDEAE" : "black"}`,
                      }}>
                      Transfer
                    </Text>
                  </TouchableOpacity>
                ) : null,
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
  headerRightContainerStyle: {
    paddingRight: 20,
  },
  headerTitleContainerStyle: {
    marginLeft: -20,
  },
});

export default AppNavigator;
