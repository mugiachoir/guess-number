import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import ScreenStyle from "./app.style";

import Header from "./components/header/header.component";
import StartScreen from "./pages/start-screen.pages";
import GameScreen from "./pages/game-screen.pages";
import OverScreen from "./pages/over-screen.pages";

const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [roundNumber, setRoundNumber] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const handleNewGame = () => {
    setRoundNumber(0);
    setUserNumber(null);
  };

  const handleStart = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleOver = (numberOfRounds) => {
    setRoundNumber(numberOfRounds);
  };

  let content = <StartScreen handleStart={handleStart} />;

  if (userNumber && roundNumber == 0) {
    content = <GameScreen userNumber={userNumber} handleOver={handleOver} />;
  } else if (roundNumber > 0) {
    content = (
      <OverScreen
        roundNumber={roundNumber}
        userNumber={userNumber}
        handleNewGame={handleNewGame}
      />
    );
  }

  return (
    <SafeAreaView style={ScreenStyle.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={ScreenStyle.screen}>
          <Header title={"Guess A Number"} />
          {content}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default App;
