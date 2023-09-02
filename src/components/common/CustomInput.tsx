import React from "react";
import { Text, TextInputProps, TextInput } from "react-native";

import theme from "../../utils/theme";

interface CustomInputProps extends TextInputProps {
  error?: boolean;
  errorMessage?: string;
  inputStyle?: object;
  errorTextStyle?: object;
}

const CustomInput: React.FC<CustomInputProps> = ({
  error,
  errorMessage,
  inputStyle,
  errorTextStyle,
  ...rest
}) => {
  return (
    <>
      <TextInput
        style={{
          ...inputStyle,
          borderColor: !error ? theme.colors.secondary : theme.colors.red,
        }}
        {...rest}
      />
      {error && errorMessage && (
        <Text style={errorTextStyle}>{errorMessage}</Text>
      )}
    </>
  );
};

export default CustomInput;
