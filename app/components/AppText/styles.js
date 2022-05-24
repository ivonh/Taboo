import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? " Roboto" : " Avenir ",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#ff00ff",
    justifyContent: "flex-end",
  },
});

export default styles;