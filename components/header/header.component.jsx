import React from "react";
import { View, Text, Platform } from "react-native";

import HeaderStyle from "./header.style";

const Header = ({ title }) => (
  <View
    style={{
      ...HeaderStyle.headerContainer,
      ...Platform.select({
        ios: HeaderStyle.headerIos,
        android: HeaderStyle.headerAndroid,
      }),
    }}
  >
    <Text
      style={{
        ...HeaderStyle.headerTitle,
        ...Platform.select({
          ios: HeaderStyle.titleIos,
          android: HeaderStyle.titleAndroid,
        }),
      }}
    >
      {title}
    </Text>
  </View>
);

export default Header;
