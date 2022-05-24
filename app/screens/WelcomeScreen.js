import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  Button,
} from "react-native";

import React from "react";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText/AppText";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/chair.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/LOGO.png")} />
      <Text style={styles.title}>period care that cares</Text>
      <Text style={styles.paragraph}>
        100% organic cotton, 100% of net profits eradicating period poverty
      </Text>
      <View></View>
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
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
  },
  registerButton: {
    width: " 100%",
    height: 70,
    backgroundColor: "#ff3399",
    justifyContent: "flex-end",
  },
  title: {
    flex: 1,
    color: "pink",
    fontFamily: "Cochin",
    fontStyle: "italic",
    fontSize: 34,
    fontWeight: "bold",
    position: "absolute",
    top: 180,
  },
  paragraph: {
    flex: 1,
    color: "pink",
    fontFamily: "Cochin",
    fontSize: 22,
    fontWeight: "100",
    position: "absolute",
    top: 240,
    textAlign: "right",
  },
});

export default WelcomeScreen;
