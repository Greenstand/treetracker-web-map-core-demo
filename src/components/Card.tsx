import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-ionicons";

type CardProps = {
  setIsDisplay: (n: boolean) => void;
  country_name: string;
  image_url: string;
};

export default function Card({
  setIsDisplay,
  image_url,
  country_name,
}: CardProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row-reverse",
          marginTop: 2,
        }}
      >
        <Icon
          name="close-circle-outline"
          size={30}
          color="black"
          onPress={() => {
            setIsDisplay(false);
          }}
        />
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}> Country name:</Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {country_name}
          </Text>
        </View>
        <Image
          source={{ uri: image_url }}
          style={{ width: "auto", height: 200 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
    height: 100,
    zIndex: 100,
    justifyContent: "center",
  },

  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    marginRight: 10,
  },
});
