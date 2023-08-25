import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native";
import Card from "../components/Card";
import LoadUrl from "../components/LoadUrl";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

Notifications.setNotificationHandler({
  handleNotification: async ()=> ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
})

export default function HomeScreen() {
  const [treeData, setTreeData] = useState<any>({});
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();
  const [notification, setNotification] = useState<any>(false);

  const navigation = useNavigation<any>();

  const handleDetails = async (event: any) => {
    try {
      console.log("event:", event.nativeEvent);

      const jsonData = JSON.parse(event.nativeEvent.data);
      if (jsonData) {
        setTreeData(jsonData);
        setIsDisplay(true);
      }
    } catch (error) {
      console.log("Received data:", event.nativeEvent);
      console.log("error:", error);
    }
  };

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.eas.projectId,
        }))
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => {
      console.log(token, ": token registered")
      setExpoPushToken(token.data);
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
      console.log('Noti received:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("noti response received", response);
      navigation.navigate('Notification', {notification:response.notification});
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadUrl
        handleDetails={handleDetails}
        etUrl="https://beta-map.treetracker.org/?embed=true"
      />
      {isDisplay && (
        <Card
          setIsDisplay={setIsDisplay}
          country_name={treeData.country_name}
          image_url={treeData.image_url}
        />
      )}
    </SafeAreaView>
  );
}
