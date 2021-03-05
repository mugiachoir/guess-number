import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessStyle = StyleSheet.create({
  card: {
    marginTop: 24,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-evenly",
  },
  numberContainer: {
    marginBottom: 16,
  },
  number: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "poppins-bold",
  },
  userNumber: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 8,
  },
  button: {
    width: "40%",
  },
});

export default GuessStyle;
