import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";

import ButtonStyle from "./custom-button.style";

const CustomButton = ({ children, action, color, textColor, plusStyle }) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={ButtonStyle.buttonContainer}>
      <ButtonComponent onPress={action} activeOpacity={0.6}>
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
      </ButtonComponent>
    </View>
  );
};

export default CustomButton;
