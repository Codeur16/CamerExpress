import React from "react";
import { NavigationContainer, useNavigatio } from "@react-navigation/native";
import { Root } from "./src/Root";
import "./nativewind-output";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    NorthZone: require("./assets/fonts/NorthZone.otf"),
    salsa: require("./assets/fonts/Salsa-Regular.ttf"),
    laila: require("./assets/fonts/Laila-Light.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Light.ttf"),
    plento: require("./assets/fonts/PLENTO.ttf"),
    RobotoThin: require("./assets/fonts/Roboto/Roboto-Thin1.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto/Roboto-Medium3.ttf"),
    RobotoItalic: require("./assets/fonts/Roboto/Roboto-Italic3.ttf"),
    RobotoBold: require("./assets/fonts/Roboto/Roboto-Bold3.ttf"),
  });
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
