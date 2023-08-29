import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export default function NotificationScreen() {
  const route = useRoute();
  const navigation = useNavigation<any>();

  const params: any = route.params;
  const notiTitle = `${params?.notification?.request?.content?.title}`;
  const notiBody = `${params?.notification?.request?.content?.body}`;
  const notiData = `${JSON.stringify(
    params?.notification?.request?.content?.data,
  )}`;

  function goBack() {
    navigation.navigate("Home");
  }
  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: 30, marginLeft: 5, marginRight: 5 }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 5 }}>
          <Text>Notifications</Text>
        </View>
      </View>
      <View>
        <Text>Notification Title: {notiTitle}</Text>
        <Text>Notification body: {notiBody}</Text>
        <Text>Notification data: {notiData}</Text>
      </View>
    </SafeAreaView>
  );
}
