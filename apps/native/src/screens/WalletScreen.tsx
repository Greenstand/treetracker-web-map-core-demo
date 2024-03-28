import { faker } from "@faker-js/faker";
import { Token } from "demo-core/models/entities/Token";
import { Wallet } from "demo-core/models/entities/Wallet";
import useTransferWizard from "demo-core/models/transfer/useTransferWizard";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import WebView from "react-native-webview";

function WalletScreen() {
  const [currentWallet, setCurrentWallet] = useState<Wallet | null>(null);
  const [chosenToken, setChosenToken] = useState<Token | null>(null);
  const transferWizard = useTransferWizard();
  //init transferWizard
  useEffect(() => {
    const wallet = {
      id: faker.datatype.uuid(),
      name: "wallet2",
      balance: faker.datatype.number({ min: 1000, max: 100000 }),
      createdAt: faker.date.past(),
      logo: faker.image.url(),
    };
    setCurrentWallet(wallet);
  }, []);

  useEffect(() => {
    transferWizard.setWizard((current) => {
      return {
        ...current,
        fromWallet: currentWallet,
        token: chosenToken,
      };
    });
  }, [currentWallet, chosenToken]);
  // https://map.treetracker.org/wallets/9e143717-b34b-4e53-b810-6668d371adda?bounds=36.460189819335945,-0.23878028414651437,36.51889801025391,-0.16230561483658262&tree_id=1400272/
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://map.treetracker.org/wallets/9e143717-b34b-4e53-b810-6668d371adda?bounds=36.460189819335945,-0.23878028414651437,36.51889801025391,-0.16230561483658262&tree_id=1400272",
        }}
        onMessage={(event) => {
          const token = {
            id: faker.datatype.uuid(),
            walletId: currentWallet?.id || "no",
            createdAt: faker.date.past(),
          };
          setChosenToken(token);
          return console.log(
            "received native event Object",
            JSON.stringify(event, null, 2),
          );
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </SafeAreaView>
  );
}

export default WalletScreen;
