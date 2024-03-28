import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";
import useLoginForm from "demo-core/models/login/useLoginForm";
import { User } from "demo-core/models/user/User";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Tooltip, { Placement } from "react-native-tooltip-2";
import { useRecoilState } from "recoil";

import CustomInput from "../components/common/CustomInput";
import CustomLabel from "../components/common/CustomLabel";
import CustomText from "../components/common/CustomText";
import CustomTitle from "../components/common/CustomTitle";
import PressableOpacity from "../components/common/PressableOpacity";
import { useAuth } from "../context/AuthContext";
import currentUser from "../states/currentUser";
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
};

export default function SignInScreen({
  navigation,
}: StackScreenProps<AuthStackParams, "SignIn">) {
  const loginForm = useLoginForm();
  const [user, setUser] = useRecoilState(currentUser);
  const { signIn } = useAuth();
  const [toolTipVisible, setToolTipVisible] = useState(true);

  const handleSubmit = () => {
    loginForm.handleSubmit(async (user: User) => {
      setUser(user);
      try {
        await AsyncStorage.setItem("userToken", user?.token);
        signIn();
      } catch (e) {
        // saving error
      }
    });
  };

  useEffect(() => {
    loginForm.handleNameChange("admin");
    loginForm.handlePasswordChange("admin");
  }, []);

  return (
    <SafeAreaView
      style={[sharedStyles.container, { backgroundColor: theme.colors.white }]}>
      <View style={styles.wrapper}>
        <CustomTitle>Sign In</CustomTitle>
      </View>
      <View style={styles.container}>
        <CustomLabel label="Name" style={styles.label} />
        <CustomInput
          value={loginForm.name}
          inputStyle={styles.input}
          errorTextStyle={styles.errorText}
          onChangeText={(text) => loginForm.handleNameChange(text)}
          error={!!loginForm.nameError}
          errorMessage="Name is required"
        />
      </View>
      <View style={styles.container}>
        <CustomLabel label="Password" style={styles.label} />
        <CustomInput
          value={loginForm.password}
          inputStyle={styles.input}
          errorTextStyle={styles.errorText}
          onChangeText={(text) => loginForm.handlePasswordChange(text)}
          secureTextEntry
          error={!!loginForm.passwordError}
          errorMessage={loginForm.passwordError}
        />
      </View>
      <Tooltip
        isVisible={toolTipVisible}
        content={<Text>Click me!</Text>}
        placement={Placement.TOP}
        onClose={() => setToolTipVisible(false)}
        showChildInTooltip={false}
        disableShadow
        allowChildInteraction
        useReactNativeModal={false}
        accessible>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {loginForm.isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign In </Text>
          )}
        </TouchableOpacity>
      </Tooltip>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
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
    backgroundColor: theme.colors.secondary,
  },
  errorText: {
    color: theme.colors.red,
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: theme.colors.main,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
