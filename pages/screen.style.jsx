import { StyleSheet, Dimensions } from "react-native";

const ScreenStyle = StyleSheet.create({
  startScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontFamily: "poppins-bold",
  },
  gameScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
  },
  overScreen: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  scrollview: {
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    width: "100%",
  },
  image: {
    width: Dimensions.get("window").scale * 80,
    height: Dimensions.get("window").scale * 80,
    borderRadius: Dimensions.get("window").scale * 40,
    marginVertical: Dimensions.get("window").height / 40,
  },
  button: {
    marginVertical: 16,
  },
  listContainer: {
    width: "60%",
    marginTop: 16,
    padding: 8,
    flex: 1,
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
});

export default ScreenStyle;
