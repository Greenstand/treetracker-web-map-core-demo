import React from "react";
import { Text } from "react-native";

import truncateString from "../utils/truncateString";

const CustomHeader = ({ route, headerTitleStyle }: any) => {
  return (
    <>
      <Text style={{ ...headerTitleStyle }}>
        {truncateString(`${route?.params.userWalletName}`, 10)}
      </Text>
    </>
  );
};

export default CustomHeader;
