import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { NotificationIcon, SearchIcon } from "./Icons";
import { IMAGES } from "../../assets";
import { sharedStyles } from "../styles/styles";
import theme from "../utils/theme";

export default function WalletSummary({
  balance,
  avatar,
}: {
  balance: number;
  avatar: string | undefined;
}) {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={IMAGES[1]} style={sharedStyles.avatar} />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
            },
          ]}>
          Total balance
        </Text>
        <Text style={[styles.text, styles.font]}>
          Token{" "}
          {Number(balance.toFixed(2)).toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <SearchIcon size={28} />
        <NotificationIcon size={28} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 60,
  },
  wrapper: {
    flex: 1,
  },
  font: {
    fontSize: 18,
  },
  label: {
    color: theme.colors.black,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    gap: 20,
  },
  text: {
    fontWeight: "bold",
    color: theme.colors.black,
  },
});
