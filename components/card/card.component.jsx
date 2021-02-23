import React from "react";
import { View } from "react-native";

import CardStyle from "./card.style";

const Card = (props) => (
  <View style={{ ...CardStyle.card, ...props.style }}>{props.children}</View>
);

export default Card;
