import React from "react";
import { View, Text } from "react-native";

import ListStyle from "./guess-list.style";

const ListItem = ({ children, roundNumber }) => (
  <View style={ListStyle.card}>
    <Text style={{ fontWeight: "bold" }}>#{roundNumber}</Text>
    <Text>{children}</Text>
  </View>
);

export default ListItem;
