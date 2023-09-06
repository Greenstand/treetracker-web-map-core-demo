import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import LoadUrl from "../components/LoadUrl";

export default function WebViewScreen() {
  const [treeData, setTreeData] = useState<any>({});
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleDetails = async (event: any) => {
    try {
      console.log("event:", event.nativeEvent);

      const jsonData = JSON.parse(event.nativeEvent.data);
      if (jsonData) {
        setTreeData(jsonData);
        setIsDisplay(true);
      }
    } catch (error) {
      console.log("Received data:", event.nativeEvent);
      console.log("error:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadUrl
        handleDetails={handleDetails}
        etUrl="https://beta-map.treetracker.org/?embed=true"
      />
    </SafeAreaView>
  );
}
