import React, { useState, useRef, useEffect } from "react";
import { View, Alert, FlatList, Dimensions } from "react-native";

import ScreenStyle from "./screen.style";

import GuessCard from "../components/guess-card/guess-card.component";
import ListItem from "../components/guess-list/guess-list.component";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userNumber, handleOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
      setAvailableDeviceWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userNumber) {
      handleOver(pastGuesses.length);
    }
  }, [currentGuess, userNumber, handleOver]);

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Please don't lie!",
        "What is the price for your blind eyes...?",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    }

    if (direction == "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses([nextNumber.toString(), ...pastGuesses]);
  };

  const gameScreen = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexBasis: availableDeviceWidth > 500 ? "row" : "column",
    maxWidth: "90%",
  };

  return (
    <View
      style={{
        ...ScreenStyle.gameScreen,
        flexDirection: availableDeviceWidth > 500 ? "row" : "column",
      }}
    >
      <GuessCard
        currentGuess={currentGuess}
        handleNextGuess={handleNextGuess}
        userNumber={userNumber}
      />
      <View style={ScreenStyle.listContainer}>
        <FlatList
          contentContainerStyle={ScreenStyle.list}
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={(item) => (
            <ListItem
              key={item.item}
              roundNumber={pastGuesses.length - item.index}
            >
              {item.item}
            </ListItem>
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;
