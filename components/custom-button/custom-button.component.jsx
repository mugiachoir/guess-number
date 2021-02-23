import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import ButtonStyle from "./custom-button.style";

const CustomButton = ({ children, action, color, textColor, plusStyle }) => (
  <TouchableOpacity onPress={action} activeOpacity={0.6}>
    <View
      style={{ ...ButtonStyle.button, ...plusStyle, backgroundColor: color }}
    >
      <Text style={{ ...ButtonStyle.buttonText, color: textColor }}>
        {children}
      </Text>
    </View>
  </TouchableOpacity>
);

export default CustomButton;
