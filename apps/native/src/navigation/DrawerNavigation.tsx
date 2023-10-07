import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { useRecoilState } from "recoil";

import BottomNavigation from "./BottomNavigation";
import {
  ArrowLeft,
  CreditCard,
  Cross,
  Gear,
  Key,
  Logout,
  RefreshCcw,
} from "../components/Icons";
import PasswordScreen from "../screens/PasswordScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TransactionScreen from "../screens/TransactionScreen";
import WalletsScreen from "../screens/WalletsScreen";
import currentUser from "../states/currentUser";
import theme from "../utils/theme";

function CustomDrawer(props: any) {
  const [user] = useRecoilState(currentUser);
  const profileURI = user?.avatar;

  return (
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          top: 0,
          bottom: 0,
          backgroundColor: theme.colors.white,
          justifyContent: "flex-start",
        }}>
        <View style={headerStyle.headerContainer}>
          <TouchableOpacity
            style={headerStyle.icon}
            onPress={() => props.navigation.goBack()}>
            <Cross />
          </TouchableOpacity>
          <Text style={headerStyle.text}>Profile</Text>
          <TouchableOpacity
            style={headerStyle.icon}
            onPress={() => alert("this is logout button")}>
            <Logout />
          </TouchableOpacity>
        </View>
        <View style={drawerStyle.itemContainer}>
          <Image source={{ uri: profileURI }} style={profileStyle.image} />
          <Text
            style={
              profileStyle.txtMajor
            }>{`${user?.firstName} ${user?.lastName}`}</Text>
          <Text
            style={
              profileStyle.txtMinor
            }>{`${user?.firstName.toLowerCase()}.${user?.lastName.toLowerCase()}@gmail.com`}</Text>
        </View>
        <View style={drawerStyle.itemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  const navigation = useNavigation<any>();
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerLabelStyle: { fontSize: 18, fontWeight: "bold" },
        drawerInactiveTintColor: theme.colors.black,
        drawerIcon: ({}) => {
          let iconComponent;

          if (route.name === "Transaction") {
            iconComponent = (
              <View style={{ ...iconStyle.iconContainer, marginRight: -20 }}>
                <RefreshCcw />
              </View>
            );
          } else if (route.name === "Wallets") {
            iconComponent = (
              <View style={{ ...iconStyle.iconContainer, marginRight: -20 }}>
                <CreditCard />
              </View>
            );
          } else if (route.name === "Password") {
            iconComponent = (
              <View style={{ ...iconStyle.iconContainer, marginRight: -20 }}>
                <Key />
              </View>
            );
          } else if (route.name === "Settings") {
            iconComponent = (
              <View style={{ ...iconStyle.iconContainer, marginRight: -20 }}>
                <Gear />
              </View>
            );
          }
          return iconComponent;
        },
        headerTitleAlign: "center",
        ...navHeaderStyle,
        drawerStyle: {
          width: Dimensions.get("window").width,
        },
      })}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{ drawerItemStyle: { display: "none" } }}
        component={BottomNavigation}
      />
      <Drawer.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          headerShown: true,
          title: "Transaction History",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
          drawerItemStyle: drawerStyle.drawerItem,
        }}
      />
      <Drawer.Screen
        name="Wallets"
        component={WalletsScreen}
        options={{
          headerShown: true,
          title: "All Wallets",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
          drawerItemStyle: drawerStyle.drawerItem,
        }}
      />
      <Drawer.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          headerShown: true,
          title: "Change Password",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
          drawerItemStyle: drawerStyle.drawerItem,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          title: "Settings",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
          drawerItemStyle: drawerStyle.drawerItem,
        }}
      />
    </Drawer.Navigator>
  );
}

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

const iconStyle = StyleSheet.create({
  iconContainer: {
    padding: 14,
    backgroundColor: theme.colors.solitude,
    borderRadius: 22.5,
    width: 43,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
  },
});

const profileStyle = StyleSheet.create({
  image: {
    width: 73,
    height: 73,
    borderRadius: 37,
    marginBottom: 7,
  },
  txtMajor: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 7,
    paddingBottom: 2,
  },
  txtMinor: {
    fontSize: 15,
    fontWeight: "bold",
    color: theme.colors.grayNavy,
    paddingTop: 2,
  },
});

const drawerStyle = StyleSheet.create({
  drawerItem: {
    marginLeft: -10,
    marginTop: 0,
    marginBottom: 20,
    height: 43,
    justifyContent: "center",
  },
  itemContainer: {
    marginLeft: 23,
    paddingVertical: 22,
  },
});

const headerStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 17,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
  icon: {
    padding: 7,
  },
});
