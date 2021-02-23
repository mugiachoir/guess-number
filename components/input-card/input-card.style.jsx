import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InputCardStyle = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    alignItems: "center",
  },
  input: {
    padding: 8,
    backgroundColor: Colors.input,
    width: 200,
    marginVertical: 16,
    borderRadius: 8,
    textAlign: "center",
  },
  button: {
    width: "40%",
  },
});

export default InputCardStyle;
