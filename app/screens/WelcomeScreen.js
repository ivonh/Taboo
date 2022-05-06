import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import React from "react";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/LOGO.png")} />
      <Text style={styles.title}>Period care that cares</Text>
      <Text style={styles.paragraph}> This is a paragrpah</Text>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "flex-end",
  },
  registerButton: {
    width: " 100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
  },
  title: {
    flex: 1,
    color: "pink",
    fontFamily: "Ebrima",
    fontSize: 34,
    position: "absolute",
    top: 180,
  },
  paragraph: {
    flex: 1,
    color: "pink",
    fontFamily: "Arial",
    fontSize: 34,
    position: "absolute",
    top: 240,
  },
});

export default WelcomeScreen;
