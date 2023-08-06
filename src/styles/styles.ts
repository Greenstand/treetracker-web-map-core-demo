import { ViewStyle } from "react-native";

export interface SharedStyles {
  container: ViewStyle;
}
export const sharedStyles: SharedStyles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 30,
  },
};
