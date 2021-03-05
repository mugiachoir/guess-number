import React, { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import ScreenStyle from "./screen.style";

import InputCard from "../components/input-card/input-card.component";
import OutputCard from "../components/output-card/output-card.component";

const StartScreen = ({ handleStart }) => {
  const [inputNumber, setInputNumber] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleInput = (entered) => {
    setEnteredNumber(entered.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const handleConfirm = () => {
    const confirmedNumber = parseInt(enteredNumber);
    if (
      isNaN(confirmedNumber) ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      Alert.alert(
        "Invalid Number",
        "Number hast to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }
    setConfirmed(true);
    setInputNumber(confirmedNumber);
    setEnteredNumber("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <OutputCard inputNumber={inputNumber} handleStart={handleStart} />
    );
  }

  return (
    <ScrollView contentContainerStyle={ScreenStyle.scrollview}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <View style={ScreenStyle.startScreen}>
          <Text style={ScreenStyle.title}>Start a New Game</Text>
          <InputCard
            handleInput={handleInput}
            handleConfirm={handleConfirm}
            handleReset={handleReset}
            enteredNumber={enteredNumber}
          />
          {confirmedOutput}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartScreen;
