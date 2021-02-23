import React from "react";
import { View, Text } from "react-native";

import HeaderStyle from "./header.style";

const Header = ({ title }) => (
  <View style={HeaderStyle.headerContainer}>
    <Text style={HeaderStyle.headerTitle}>{title}</Text>
  </View>
);

export default Header;
