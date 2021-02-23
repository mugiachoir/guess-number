import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 10,
  },
});

export default CardStyle;
