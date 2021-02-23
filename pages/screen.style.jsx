import { StyleSheet } from "react-native";

const ScreenStyle = StyleSheet.create({
  startScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
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
    width: "100%",
  },
  overScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 16,
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
