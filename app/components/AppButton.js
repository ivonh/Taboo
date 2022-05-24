import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

import styles from "./AppText/styles";

function AppButton({ title }) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default AppButton;
