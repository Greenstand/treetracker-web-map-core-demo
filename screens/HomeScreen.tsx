import React, { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import LoadUrl from "../components/LoadUrl";
import Card from "../components/Card";

export default function HomeScreen({ navigation }: any) {
  const [treeData, setTreeData] = useState<any>({});
  const [idTree, setIdTree] = useState<string>("");
  const [url, setUrl] = useState<any>("");
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  // useEffect(() => {
  //   // console.log("url:", url);
  //   const regex = /trees\/(\d+)/;

  //   const match = url.match(regex);

  //   if (match && match[1]) {
  //     const id = match[1];
  //     setIdTree(id);
  //     console.log(idTree);
  //     setUrl("");
  //   }
  // }, [url]);

  const handleDetails = async (event: any) => {
    try {
      console.log("event:", event.nativeEvent);
      setUrl(event.nativeEvent.url);
      const jsonData = JSON.parse(event.nativeEvent.data);
      if (jsonData) {
        setTreeData(jsonData);
        setIsDisplay(true);
      }
    } catch (error) {
      // console.log("Received data:", event.nativeEvent);
      // console.log("error:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadUrl
        handleDetails={handleDetails}
        etUrl="https://beta-map.treetracker.org/?embed=true"
      />
      {isDisplay && (
        <Card
          setIsDisplay={setIsDisplay}
          country_name={treeData.country_name}
          image_url={treeData.image_url}
        />
      )}
    </SafeAreaView>
  );
}
