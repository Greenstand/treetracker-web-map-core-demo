import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CustomTitle(props: { title: string }) {
  return <Text style={styles.text}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
