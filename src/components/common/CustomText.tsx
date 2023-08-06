import React from "react";
import { Text, StyleSheet } from "react-native";
// Text.defaultProps.allowFontScaling = false;
const CustomText = (props: any) => {
  return (
    <Text
      allowFontScaling={false}
      selectable={props.selectable}
      style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default CustomText;
