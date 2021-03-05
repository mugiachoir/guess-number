import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const InputCardStyle = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    alignItems: "center",
    // width: Dimensions.get("window").width * 0.8,
  },
  input: {
    padding: 8,
    backgroundColor: Colors.input,
    minWidth: 200,
    marginVertical: 16,
    borderRadius: 8,
    textAlign: "center",
  },
  button: {
    width: "40%",
  },
});

export default InputCardStyle;
