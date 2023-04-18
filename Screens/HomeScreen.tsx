import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import LoadUrl from "../Components/LoadUrl";
import Card from "../Components/Card";

export default function HomeScreen({ navigation }: any) {
  const [treeData, setTreeData] = useState<any>({});
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  React.useEffect(() => {
    console.log(" treeData", treeData);
  }, [treeData]);

  const handleDetails = async (event: any) => {
    try {
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
