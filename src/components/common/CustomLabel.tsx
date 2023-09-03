import React from "react";
import { Text, TextInputProps } from "react-native";

interface CustomLabelProps extends TextInputProps {
  label: string;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ label, ...rest }) => {
  return <Text style={rest.style}>{label}</Text>;
};

export default CustomLabel;
