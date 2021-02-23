import React from "react";
import { View, Text, Image } from "react-native";
import Colors from "../constants/colors";
import ScreenStyle from "./screen.style";

import CustomButton from "../components/custom-button/custom-button.component";

const OverScreen = ({ roundNumber, userNumber, handleNewGame }) => {
  return (
    <View style={ScreenStyle.overScreen}>
      <Text style={ScreenStyle.title}>The Game is Over</Text>
      <Image
        source={require("../assets/images/success.png")}
        style={ScreenStyle.image}
      />
      <Text>
        Your phone needed{" "}
        <Text style={{ fontWeight: "bold", color: Colors.primary }}>
          {roundNumber} rounds
        </Text>
      </Text>
      <Text>
        to guess the number{" "}
        <Text style={{ fontWeight: "bold", color: Colors.primary }}>
          {userNumber}
        </Text>
      </Text>
      <CustomButton
        color={Colors.primary}
        textColor="white"
        action={handleNewGame}
        plusStyle={ScreenStyle.button}
      >
        New Game
      </CustomButton>
    </View>
  );
};

export default OverScreen;
