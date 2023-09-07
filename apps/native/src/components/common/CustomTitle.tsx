import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CustomTitle(props: any) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
