import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { HEIGHT, WIDTH } from "../styles/styles";
import theme from "../utils/theme";

export default function WalletCard({
  createdAt,
  balance,
  name,
  active,
  id,
}: any) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            active === id ? theme.colors.main : theme.colors.solitude,
        },
      ]}>
      <View style={styles.content}>
        <Ionicons name="md-map-sharp" size={24} color={theme.colors.black} />
        <View>
          <Text
            style={[
              styles.text,
              {
                fontSize: 16,
                color: active === id ? theme.colors.white : theme.colors.black,
              },
            ]}>
            Token: {balance}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                color: active === id ? theme.colors.white : theme.colors.grey,
              },
            ]}>
            {createdAt}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              styles.text,
              styles.textUppercase,
              {
                fontSize: 12,
                color: active === id ? theme.colors.white : theme.colors.grey,
              },
            ]}>
            wallet
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 16,
                color: active === id ? theme.colors.white : theme.colors.black,
              },
            ]}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  text: {
    fontWeight: "bold",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 20,
    width: "100%",
    height: "100%",
    padding: 20,
    zIndex: 0,
  },
});
