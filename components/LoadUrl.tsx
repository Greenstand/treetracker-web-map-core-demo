import React from "react";
import { WebView } from "react-native-webview";
import { View, ActivityIndicator } from "react-native";

type Props = {
  handleDetails: (event: any) => Promise<void>;
  etUrl: string;
};

const LoadUrl = ({ handleDetails, etUrl }: Props) => {
  const injectJavascript = `
  document.addEventListener('click', function(event) {
      const data =  Object.values(document.querySelector("#map-canvas").map?.map._layers).reduce((a,c) => a || c.payload?.active?c.payload:undefined, undefined)
        window.ReactNativeWebView.postMessage(JSON.stringify(data));
   })
  `;

  return (
    <WebView
      source={{ uri: etUrl }}
      injectedJavaScript={injectJavascript}
      onMessage={handleDetails}
      startInLoadingState={true}
      renderLoading={() => (
        <ActivityIndicator
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          size="large"
          color="green"
        />
      )}
    />
  );
};

export default LoadUrl;
