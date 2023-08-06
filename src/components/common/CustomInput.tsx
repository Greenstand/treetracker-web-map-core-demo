import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInputProps,
  TextInput,
} from "react-native";

import theme from "../../utils/theme";

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  errorMessage,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: !error ? theme.colors.secondary : theme.colors.red,
          },
        ]}
        {...rest}
      />
      {error && errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput;
