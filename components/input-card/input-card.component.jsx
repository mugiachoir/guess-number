import React from "react";
import { View, Text, TextInput } from "react-native";
import Colors from "../../constants/colors";

import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";

import InputCardStyle from "./input-card.style";

const InputCard = ({
  handleInput,
  handleConfirm,
  handleReset,
  enteredNumber,
}) => (
  <Card style={InputCardStyle.inputContainer}>
    <Text>Type a Number!</Text>
    <TextInput
      blurOnSubmit
      keyboardType="number-pad"
      maxLength={2}
      style={InputCardStyle.input}
      onChangeText={handleInput}
      value={enteredNumber}
    />
    <View style={InputCardStyle.buttons}>
      <View style={InputCardStyle.button}>
        <CustomButton
          color={Colors.primary}
          textColor="white"
          action={handleConfirm}
        >
          Confirm
        </CustomButton>
      </View>
      <View style={InputCardStyle.button}>
        <CustomButton
          color={Colors.accent}
          textColor="white"
          action={handleReset}
        >
          Reset
        </CustomButton>
      </View>
    </View>
  </Card>
);

export default InputCard;
