import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";

import TransactionCard from "../components/TransactionCard";
import WalletCard from "../components/WalletCard";
import WalletSummary from "../components/WalletSummary";
import CardsHeading from "../components/common/CardsHeading";
import { HEIGHT, height } from "../styles/styles";

const wallets = [
  {
    id: 1,
    createdAt: "June 23, 2022",
    balance: "285",
    name: "Samwell A",
    active: true,
  },
  {
    id: 2,
    createdAt: "June 23, 2022",
    balance: "83,509",
    name: "Samwell A",
    active: false,
  },
];
const transactions = [
  {
    id: 1,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
  {
    id: 2,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
  {
    id: 3,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
  {
    id: 4,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
];

function Wrapper(props: any) {
  return <View style={styles.wrapper}>{props.children}</View>;
}
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Wrapper>
        <WalletSummary
          balance="4,830.00"
          avatar={require("../../assets/Profile.png")}
        />
      </Wrapper>
      <Wrapper>
        <CardsHeading heading="Wallet" />
      </Wrapper>

      <FlatList
        contentContainerStyle={styles.scrollContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={wallets}
        renderItem={({ item }: any) => (
          <WalletCard
            createdAt={item.createdAt}
            balance={item.balance}
            name={item.name}
            active={item.active}
          />
        )}
        keyExtractor={(item): any => item.id}
      />
      <View>
        <Wrapper>
          <CardsHeading heading="Transactions" />
        </Wrapper>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={transactions}
          style={{
            height: height * (1 / 3),
            flexGrow: 0,
          }}
          renderItem={({ item }: any) => (
            <Wrapper>
              <TransactionCard
                avatar={item.avatar}
                name={item.name}
                date={item.date}
                token={item.token}
              />
            </Wrapper>
          )}
          keyExtractor={(item): any => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  transactionContainer: {
    paddingVertical: 20,
  },
  item: {
    width: 198,
    height: 230,
    backgroundColor: "lightgray",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
  },
  scrollContainer: {
    height: HEIGHT,
  },
});
