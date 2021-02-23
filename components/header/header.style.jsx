import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: "purple",
    alignItems: "flex-start",
    padding: 16,
    color: "white",
    width: "100%",
    zIndex: 2,
  },
  headerTitle: {
    color: "white",
    textAlign: "left",
    fontSize: 18,
    fontFamily: "poppins-bold",
  },
});

export default HeaderStyle;
