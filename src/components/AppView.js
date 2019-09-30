import React from "react";
import { View } from "react-native";

// TODO: Change this to scrollable
// View -> Scrollable -> Children

export const AppView = ({ children }) => {
  return <View>{children}</View>;
};
