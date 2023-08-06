import React, { useCallback } from "react";
import { Pressable as RNPressable } from "react-native";

function PressableOpacity({
  children,
  style,
  activeOpacity,
  ...otherProps
}: any) {
  const _style = useCallback(
    ({ pressed }: any) => [
      { opacity: pressed ? activeOpacity : 1 },
      style && style,
    ],
    [activeOpacity, style],
  );

  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
}

export default PressableOpacity;
