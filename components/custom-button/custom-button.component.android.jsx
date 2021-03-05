import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";

import ButtonStyle from "./custom-button.style";

const CustomButton = ({ children, action, color, textColor, plusStyle }) => {
  return (
    <View style={ButtonStyle.buttonContainer}>
      <TouchableNativeFeedback onPress={action} activeOpacity={0.6}>
        <View
          style={{
            ...ButtonStyle.button,
            ...plusStyle,
            backgroundColor: color,
          }}
        >
          <Text style={{ ...ButtonStyle.buttonText, color: textColor }}>
            {children}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CustomButton;
