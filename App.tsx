import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { API_URL } from "react-native-dotenv";

const App = () => {
  const [treeData, setTreeData] = useState();

  const injectJavascript = `
  document.addEventListener('click', function(event) {
    const clickedOnTree = document.getElementsByClassName('greenstand-point-selected-box green-b');
    if(clickedOnTree){
      const data =  Object.values(document.querySelector("#map-canvas").map.map._layers).reduce((a,c) => a || c.payload?.planter_id?c.payload:undefined, undefined)
      window.ReactNativeWebView.postMessage(JSON.stringify(data));
    }
   })
  `;

  const handleMessage = async (event: any) => {
    try {
      console.log("event:", event.nativeEvent);
      const jsonData = await JSON.parse(event);
      setTreeData(jsonData);
    } catch (error) {
      console.error(error);
      console.log("Received data:", event.nativeEvent);
    }
  };

  return (
    <WebView
      source={{ uri: "https://beta-map.treetracker.org/?embed=true" }}
      injectedJavaScript={injectJavascript}
      onMessage={handleMessage}
    />
  );
};
export default App;
