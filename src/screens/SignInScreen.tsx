import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import CustomText from "../components/common/CustomText";
import CustomTitle from "../components/common/CustomTitle";
import PressableOpacity from "../components/common/PressableOpacity";
import AuthContext from "../context/AuthContext";
import { sharedStyles } from "../styles/styles";
import theme from "../utils/theme";

interface FormData {
  name: string;
  password: string;
  nameError: boolean;
  passwordError: boolean;
}

type AuthStackParams = {
  Home: undefined;
  SignIn: undefined;
  Chat: undefined;
};

export default function SignInScreen({
  navigation,
}: StackScreenProps<AuthStackParams, "SignIn">) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
    nameError: false,
    passwordError: false,
  });

  const { signIn } = React.useContext(AuthContext);

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      [`${name}Error`]: false,
    }));
  };

  const handleSubmit = () => {
    if (formData.name.trim() === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        nameError: true,
      }));
    }
    if (formData.password.trim() === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        passwordError: true,
      }));
    }
    if (formData.name.trim() !== "" && formData.password.trim() !== "") {
      signIn();
    }
  };

  return (
    <View
      style={[sharedStyles.container, { backgroundColor: theme.colors.white }]}>
      <View style={styles.wrapper}>
        <CustomTitle title="Sign In" />
      </View>
      <CustomInput
        label="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
        error={formData.nameError}
        errorMessage="Name is required"
      />
      <CustomInput
        label="Password"
        value={formData.password}
        onChangeText={(text) => handleInputChange("password", text)}
        secureTextEntry
        error={formData.passwordError}
        errorMessage="Password is required"
      />

      <CustomButton title="Sign In" onPress={handleSubmit} />
      <View style={styles.wrapper}>
        <PressableOpacity
          style={styles.pressable}
          activeOpacity={0.5}
          onPress={() => {}}>
          <CustomText>Forgot Password?</CustomText>
        </PressableOpacity>
        <PressableOpacity
          style={styles.pressable}
          activeOpacity={0.5}
          onPress={() => {}}>
          <CustomText>
            Don’t have an account? <Text style={styles.textBold}>SIGN UP</Text>
          </CustomText>
        </PressableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    gap: 20,
  },
  pressable: {
    borderRadius: 4,
    padding: 8,
  },
  textBold: {
    fontWeight: "bold",
  },
});
