import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { sharedStyles } from "../styles/styles";
import theme from "../utils/theme";

export default function TransactionCard({ name, date, avatar, token }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: avatar }} style={sharedStyles.avatar} />
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.text}>{name}</Text>
            <Text style={[styles.text, { color: theme.colors.grey }]}>
              {date}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>- TOKEN {token}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  wrapper: {
    flexDirection: "column",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
