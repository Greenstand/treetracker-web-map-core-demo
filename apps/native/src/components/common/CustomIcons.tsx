import React from "react";
import { Image, ImageSourcePropType } from "react-native";

export default function Icons({
  icon,
  size = 28,
}: {
  icon: ImageSourcePropType;
  size: number;
}) {
  return <Image source={icon} style={{ width: size, height: size }} />;
}
