import React, { useEffect,useState } from "react";
import { useFonts } from "expo-font";

const font=()=>{
const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    NorthZone: require("../../assets/fonts/NorthZone.otf"),
  });

  if(!fontsLoaded){
    console.log("font non charge")
  }else{console.log("font ok ")}
  
}
export default font;