import React from "react";
import { FlatList, ScrollView } from "react-native";

import TransactionCard from "./TransactionCard";
const DATA = [
  {
    id: 1,
    avatar: require("../../assets/Profile.png"),
    name: "Samwell A.",
    date: "10 Apr, 2023",
    token: "83,509",
  },
  {
    id: 2,
    ar: require("../../assets/Profile.png"),
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
];

export default function WalletTransaction({
  avatar = require("../../assets/Profile.png"),
  name = "Samwell A.",
  date = "10 Apr, 2023",
  token = "83,509",
}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={({ item }: any) => (
        <TransactionCard
          avatar={item.avatar}
          name={item.name}
          date={item.date}
          token={item.token}
        />
      )}
      keyExtractor={(item): any => item.id}
    />
  );
}
