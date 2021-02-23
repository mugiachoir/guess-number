import React from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import GuessStyle from "./guess-card.style";

import Card from "../card/card.component";
import CustomButton from "../custom-button/custom-button.component";

const GuessCard = ({ currentGuess, handleNextGuess, userNumber }) => (
  <Card style={GuessStyle.card}>
    <View style={GuessStyle.numberContainer}>
      <Text style={GuessStyle.userNumber}>{userNumber}</Text>
    </View>
    <Text>Opponent's guess:</Text>
    <View style={GuessStyle.numberContainer}>
      <Text style={GuessStyle.number}>{currentGuess}</Text>
    </View>
    <View style={GuessStyle.buttons}>
      <View style={GuessStyle.button}>
        <CustomButton
          color={Colors.accent}
          textColor="white"
          action={() => handleNextGuess("lower")}
        >
          <Ionicons name={"md-remove"} size={24} color="white" />
        </CustomButton>
      </View>
      <View style={GuessStyle.button}>
        <CustomButton
          color={Colors.accent}
          textColor="white"
          action={() => handleNextGuess("greater")}
        >
          <Ionicons name={"md-add"} size={24} color="white" />
        </CustomButton>
      </View>
    </View>
  </Card>
);

export default GuessCard;
