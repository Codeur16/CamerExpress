import React, { useEffect } from "react";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import logo from "../assets/logo.png";

export function LogoTitle() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight:10
  },
  image: {
    width: 30,
    height: 30,
  },
});
