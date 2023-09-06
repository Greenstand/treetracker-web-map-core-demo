import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  buttonTextStyle: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonTextStyle,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...rest}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
