import { StyleSheet, ImageBackground, View } from "react-native";
import React from "react";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image source={require("../assets/LOGO.png")} />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: " 100%",
    height: 70,
    backColor: " #fc5c65",
  },
  registerButton: {
    width: " 100%",
    height: 70,
    backColor: " #4ecdc4",
  },
});

export default WelcomeScreen;
