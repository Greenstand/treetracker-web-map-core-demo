import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { NotificationIcon, SearchIcon } from "./Icons";
import { sharedStyles } from "../styles/styles";
import theme from "../utils/theme";

export default function WalletSummary({
  balance,
  avatar,
}: {
  balance: number;
  avatar: string | undefined;
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={sharedStyles.avatar} />
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
        <Text style={[styles.text, styles.font]}>Token {balance}</Text>
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
