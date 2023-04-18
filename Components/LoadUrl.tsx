import React from "react";
import { WebView } from "react-native-webview";

type Props = {
  handleDetails: (event: any) => Promise<void>;
  etUrl: string;
};

const LoadUrl = ({ handleDetails, etUrl }: Props) => {
  const injectJavascript = `
  document.addEventListener('click', function(event) {
    const clickedOnTree = document.getElementsByClassName('greenstand-point-selected-box green-b');
    if(clickedOnTree){
      const data =  Object.values(document.querySelector("#map-canvas").map?.map._layers).reduce((a,c) => a || c.payload?.active?c.payload:undefined, undefined)
        window.ReactNativeWebView.postMessage(JSON.stringify(data));
    }
   })
  `;

  return (
    <WebView
      source={{ uri: etUrl }}
      injectedJavaScript={injectJavascript}
      onMessage={handleDetails}
    />
  );
};

export default LoadUrl;
