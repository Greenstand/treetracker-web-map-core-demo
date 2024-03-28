import useTransferWizard from "demo-core/models/transfer/useTransferWizard";
import { Platform, SafeAreaView, StyleSheet, View, Text } from "react-native";

import { Confetti } from "../components/Icons";
import theme from "../utils/theme";

const TransferScreen3 = () => {
  const transferWizard = useTransferWizard();

  return (
    <SafeAreaView style={{ ...style.container }}>
      <View style={{ ...style.banner }}>
        <View>
          <Confetti />
        </View>
      </View>
      <View>
        <Text>{`You have successfully sent the token to ${
          transferWizard.wizard.toWallet?.name
            ? transferWizard.wizard.toWallet?.name
            : "Susanna71"
        }!`}</Text>
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
  pickerContainer: {
    flexDirection: "row",
    height: 60,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
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

export default TransferScreen3;
