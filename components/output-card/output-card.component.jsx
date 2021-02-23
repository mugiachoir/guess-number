import React from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/colors";

import OutputCardStyle from "./output-card.style";

import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";

const OutputCard = ({ inputNumber, handleStart }) => (
  <Card style={OutputCardStyle.card}>
    <Text>You have entered:</Text>
    <View style={OutputCardStyle.numberContainer}>
      <Text style={OutputCardStyle.number}>{inputNumber}</Text>
    </View>
    <CustomButton
      color={Colors.primary}
      textColor="white"
      action={() => handleStart(inputNumber)}
    >
      Start the Game
    </CustomButton>
  </Card>
);

export default OutputCard;
