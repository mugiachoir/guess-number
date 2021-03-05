import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
  headerContainer: {
    alignItems: "flex-start",
    padding: 16,
    zIndex: 2,
    width: "100%",
  },
  headerIos: {
    backgroundColor: "white",
  },
  headerAndroid: {
    backgroundColor: "purple",
  },
  headerTitle: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "poppins-bold",
  },
  titleIos: {
    color: "purple",
  },
  titleAndroid: {
    color: "white",
  },
});

export default HeaderStyle;
