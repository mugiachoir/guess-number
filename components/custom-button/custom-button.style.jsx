import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    overflow: "hidden",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    width: "100%",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ButtonStyle;
