import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import theme from "../utils/theme";

export default function SplashScreen() {
  const { colors } = theme;

  return (
    <View style={styles.content}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(0, 0, 0, 0.08)",
  },
  button: {
    margin: 8,
  },
  text: {
    textAlign: "center",
    margin: 8,
  },
});
