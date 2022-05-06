import { StyleSheet, ImageBackground, View } from "react-native";
import React from "react";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.loginButton}></View>
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
});

export default WelcomeScreen;
