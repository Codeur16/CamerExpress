import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Couleur from "../../utils/color";
import { Width, Height } from "../../utils/DimensionScreen";
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Couleur.Black5,
    width: Width,
    height: Height,
  },
});

export default LoadingScreen;
