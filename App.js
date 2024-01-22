import React from "react";
import { NavigationContainer, useNavigatio } from "@react-navigation/native";
import { Root } from "./src/Root";
import  "./nativewind-output" ;
import {useFonts} from "expo-font";
// import SplashScreen from 'react-native-splash-screen';

// // Appel à SplashScreen.hide() lorsque votre application est prête
// SplashScreen.hide();

//function principale gestion de l'effet principale
export default function App() {
  const [fontsLoaded, error]=useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "NorthZone": require("./assets/fonts/NorthZone.otf"),
    "salsa":require("./assets/fonts/Salsa-Regular.ttf"),
    "laila":require("./assets/fonts/Laila-Light.ttf"),
    "Ubuntu":require("./assets/fonts/Ubuntu-Light.ttf"),
    "plento":require("./assets/fonts/PLENTO.ttf")
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
