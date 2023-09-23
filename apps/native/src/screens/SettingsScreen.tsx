import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";

const SettingsScreen = () => {
  return <SafeAreaView style={{ ...style.container }} />;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

export default SettingsScreen;
