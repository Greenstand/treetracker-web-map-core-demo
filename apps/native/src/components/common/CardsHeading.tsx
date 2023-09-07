import React from "react";
import { View, StyleSheet } from "react-native";

import CustomTitle from "./CustomTitle";
import { ArrowIcon } from "../Icons";

export default function CardsHeading({ heading }: { heading: string }) {
  return (
    <View style={styles.container}>
      <CustomTitle>{heading}</CustomTitle>
      <ArrowIcon size={28} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
