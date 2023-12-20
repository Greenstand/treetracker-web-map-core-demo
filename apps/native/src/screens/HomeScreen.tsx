import { useNavigation } from "@react-navigation/native";
import useTab from "demo-core/models/common/useTab";
import { Wallet } from "demo-core/models/entities/Wallet";
import useTransactionList from "demo-core/models/transaction/useTransactionList";
import useBalance from "demo-core/models/user/useBalance";
import useWalletList from "demo-core/models/wallet/useWalletList";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRecoilState } from "recoil";

import TransactionCard from "../components/TransactionCard";
import WalletCard from "../components/WalletCard";
import WalletSummary from "../components/WalletSummary";
import CardsHeading from "../components/common/CardsHeading";
import currentUser from "../states/currentUser";
import { HEIGHT, height } from "../styles/styles";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

function Wrapper(props: any) {
  return <View style={styles.wrapper}>{props.children}</View>;
}

export default function HomeScreen() {
  const [user, setUser] = useRecoilState(currentUser);

  const balance = useBalance(user?.userId);
  const walletList = useWalletList(user?.userId);
  const tab = useTab<Wallet>(walletList.list);
  const transactionList = useTransactionList(tab.activeTabItem?.id);
  const [activeItem, setActiveItem] = useState<string>("");

  const [expoPushToken, setExpoPushToken] = useState("");
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();
  const [notification, setNotification] = useState<any>(false);
  const [pickedImgArr, setArr] = useState([] as number[]);

  const navigation = useNavigation<any>();

  function getRandomNumber() {
    return Math.floor(Math.random() * 37 + 2);
  }

  const imgArr = [] as number[];

  while (imgArr.length < 10) {
    const randomNum = getRandomNumber();
    if (imgArr.indexOf(randomNum) === -1) imgArr.push(randomNum);
  }

  useEffect(() => {
    setArr([...imgArr]);
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

  const handleItemPress = (item: any) => {
    setActiveItem(item.id);
    navigation.navigate("Wallet");
  };

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
    setActiveItem(walletList.list[0]?.id);
  }, [walletList.list[0]?.id]);

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
        <WalletSummary balance={balance} avatar={user?.avatar} />
      </Wrapper>
      <Wrapper>
        <CardsHeading heading="Wallet" />
      </Wrapper>

      <FlatList
        contentContainerStyle={styles.scrollContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={walletList?.list}
        renderItem={({ item }: any) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <WalletCard
              createdAt={moment(item.createdAt).format("MMM DD, YYYY")}
              balance={item.balance}
              name={item.name}
              active={activeItem}
              id={item.id}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item): any => item.id}
        onEndReachedThreshold={0.2}
        initialNumToRender={10}
      />
      <View>
        <Wrapper>
          <CardsHeading heading="Transactions" />
        </Wrapper>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={transactionList?.list}
          style={{
            height: height * (1 / 3),
            flexGrow: 0,
          }}
          renderItem={({ item, index }: any) => (
            <Wrapper>
              <TransactionCard
                avatar={item.senderAvatar}
                backUpImg={
                  pickedImgArr[index + 1] !== undefined
                    ? pickedImgArr[index + 1]
                    : 0
                }
                name={item.senderName}
                date={moment(item.createdAt).format("MMM DD, YYYY")}
                token={item.amount}
              />
            </Wrapper>
          )}
          keyExtractor={(item): any => item.id}
          onEndReachedThreshold={0.2}
          initialNumToRender={10}
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
