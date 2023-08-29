import { ImageStyle, ViewStyle, Platform, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const WIDTH = width / 2;
export const HEIGHT = height * (1 / 3) - 20;

export interface SharedStyles {
  container: ViewStyle;
  avatar: ImageStyle;
}
export const sharedStyles: SharedStyles = {
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        padding: 20,
      },
      ios: {
        padding: 0,
      },
    }),
    justifyContent: "center",
    gap: 30,
  },
  avatar: {
    width: 48,
    height: 48,
  },
};
