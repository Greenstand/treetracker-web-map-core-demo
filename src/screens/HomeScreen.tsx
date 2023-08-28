import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  SafeAreaView,
} from "react-native";

import TransactionCard from "../components/TransactionCard";
import WalletCard from "../components/WalletCard";
import WalletSummary from "../components/WalletSummary";
import CardsHeading from "../components/common/CardsHeading";
import { HEIGHT, height } from "../styles/styles";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const wallets = [
  {
    id: 1,
    createdAt: "June 23, 2022",
    balance: "285",
    name: "Samwell A",
    active: true,
  },
  {
    id: 2,
    createdAt: "June 23, 2022",
    balance: "83,509",
    name: "Samwell A",
    active: false,
  },
];
const transactions = [
  {
    id: 1,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
  {
    id: 2,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
  {
    id: 3,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
  {
    id: 4,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
];

function Wrapper(props: any) {
  return <View style={styles.wrapper}>{props.children}</View>;
}

export default function HomeScreen() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();
  const [notification, setNotification] = useState<any>(false);

  const navigation = useNavigation<any>();

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas.projectId,
      });
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => {
      console.log(token, ": token registered");
      setExpoPushToken(token.data);
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        console.log("Noti received:", notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("noti response received", response);
        navigation.navigate("Notification", {
          notification: response.notification,
        });
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current,
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Wrapper>
        <WalletSummary
          balance="4,830.00"
          avatar={require("../../assets/Profile.png")}
        />
      </Wrapper>
      <Wrapper>
        <CardsHeading heading="Wallet" />
      </Wrapper>

      <FlatList
        contentContainerStyle={styles.scrollContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={wallets}
        renderItem={({ item }: any) => (
          <WalletCard
            createdAt={item.createdAt}
            balance={item.balance}
            name={item.name}
            active={item.active}
          />
        )}
        keyExtractor={(item): any => item.id}
      />
      <View>
        <Wrapper>
          <CardsHeading heading="Transactions" />
        </Wrapper>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={transactions}
          style={{
            height: height * (1 / 3),
            flexGrow: 0,
          }}
          renderItem={({ item }: any) => (
            <Wrapper>
              <TransactionCard
                avatar={item.avatar}
                name={item.name}
                date={item.date}
                token={item.token}
              />
            </Wrapper>
          )}
          keyExtractor={(item): any => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  transactionContainer: {
    paddingVertical: 20,
  },
  item: {
    width: 198,
    height: 230,
    backgroundColor: "lightgray",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
  },
  scrollContainer: {
    height: HEIGHT,
  },
});
