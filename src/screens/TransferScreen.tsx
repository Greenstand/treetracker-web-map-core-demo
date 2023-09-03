import { Asset } from "expo-asset";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

import { ArrowDown } from "../components/Icons";
import CustomButton from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import theme from "../utils/theme";

const TransferScreen = () => {
  const bannerURI = Asset.fromModule(
    require("../../assets/transfer-oval.png"),
  ).uri;
  const profileURI = Asset.fromModule(
    require("../../assets/transfer-profile.png"),
  ).uri;

  return (
    <SafeAreaView style={{ ...style.container }}>
      <View style={{ ...style.banner }}>
        <View>
          <Image style={{ ...style.bannerImg }} source={{ uri: bannerURI }} />
        </View>
      </View>
      <View style={{ ...style.detail }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: profileURI }}
              style={{ ...style.avatarImg }}
            />
          </View>
          <View style={{ flex: 5 }}>
            <View>
              <Text style={{ ...style.txtMajor }}>
                Token 9e143717-b34b-4e53-b810-6668d371adda
              </Text>
            </View>
            <View>
              <Text style={{ ...style.txtMinor }}>Created at Jul 9, 2022h</Text>
            </View>
          </View>
        </View>
        <View>
          <ArrowDown />
        </View>
      </View>
      <View style={style.inputContainer}>
        <CustomInput
          inputStyle={style.textInput}
          placeholder="Send to wallet, input name here"
          placeholderTextColor={theme.colors.lightGray}
        />
      </View>
      <View style={style.buttonContainer}>
        <CustomButton
          style={style.button}
          buttonTextStyle={style.buttonTxt}
          title="Continue"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  inputContainer: {
    flexDirection: "row",
    height: 60,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  banner: {
    alignItems: "center",
    justifyContent: "center",
    width: 117,
    height: 122,
    backgroundColor: theme.colors.paleBlue,
    borderRadius: 58.5,
  },
  detail: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  textInput: {
    height: 60,
    width: 30,
    flex: 1,
    backgroundColor: theme.colors.secondary,
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 5,
  },
  avatarImg: {
    width: 47,
    height: 43,
    borderRadius: 23.5,
  },
  bannerImg: {
    width: 62,
    height: 54,
  },
  button: {
    backgroundColor: theme.colors.vividCyan,
    height: 63,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonTxt: {
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: 18,
    alignContent: "center",
  },
  txtMajor: {
    fontSize: 14,
    fontWeight: "bold",
  },
  txtMinor: {
    fontSize: 11,
    fontWeight: "bold",
    color: theme.colors.grayNavy,
  },
});

export default TransferScreen;
