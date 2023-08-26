import { Asset } from "expo-asset";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Svg, Path, SvgProps } from "react-native-svg";

const TransferScreen = () => {
  const bannerURI = Asset.fromModule(
    require("../../assets/transfer-oval.png"),
  ).uri;
  const profileURI = Asset.fromModule(
    require("../../assets/transfer-profile.png"),
  ).uri;
  const ArrowLeft = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={21}
      fill="none"
      {...props}>
      <Path
        fill="#0D1028"
        d="m10.5 0 1.857 1.857-7.33 7.33H21v2.626H5.027l7.33 7.33L10.5 21 0 10.5 10.5 0Z"
      />
    </Svg>
  );

  const ArrowDown = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      {...props}>
      <Path
        fill="#9597A2"
        d="m0 12.5 2.211-2.21 8.726 8.726V0h3.126v19.016l8.726-8.727L25 12.5 12.5 25 0 12.5Z"
      />
    </Svg>
  );

  return (
    <SafeAreaView style={{ ...style.container }}>
      <View style={style.header}>
        <View style={{ flex: 2 }}>
          <TouchableOpacity>{ArrowLeft(null)}</TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", fontSize: 24 }}>
            Transfer
          </Text>
        </View>
        <View style={{ flex: 2 }} />
      </View>
      <View style={{ ...style.banner }}>
        <View>
          <Image
            style={{ width: 62, height: 54 }}
            source={{ uri: bannerURI }}
          />
        </View>
      </View>
      <View style={{ ...style.detail }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: profileURI }}
              style={{ width: 47, height: 43, borderRadius: 23.5 }}
            />
          </View>
          <View style={{ flex: 5 }}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Token 9e143717-b34b-4e53-b810-6668d371adda
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 11, fontWeight: "bold", color: "#61697D" }}>
                Created at Jul 9, 2022h
              </Text>
            </View>
          </View>
        </View>
        <View>{ArrowDown(null)}</View>
      </View>
      <View style={{ flexDirection: "row", height: 60 }}>
        <TextInput
          style={{
            height: 60,
            width: 30,
            flex: 1,
            backgroundColor: "#F3F6FF",
            flexDirection: "row",
            fontSize: 18,
            fontWeight: "bold",
            borderRadius: 5,
          }}
          placeholder="Send to wallet, input name here"
          placeholderTextColor="#AAAABA"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#1CD69D",
            height: 63,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: "#FBFFFE",
              fontWeight: "bold",
              fontSize: 18,
              alignContent: "center",
            }}>
            Continue
          </Text>
        </TouchableOpacity>
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
    backgroundColor: "#D9F6FF",
    borderRadius: 58.5,
  },
  detail: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});

export default TransferScreen;
