import React,{useState} from 'react';
import {
  // Text,
  Image,
  View,
  Platform,
  Pressable,
  StyleSheet,
  Alert,
  Text,
  SafeAreaView,
  ScrollView,
  DatePickerAndroid,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Width, Height } from '../utils/DimensionScreen';
export const TouchButton=({onPress, title})=>{
    const [isPressed, setIsPressed] = useState(false);
    return(
   

<TouchableOpacity
  activeOpacity={1}
  onPress={() => {
   onPress()
  }}
  onPressIn={() => setIsPressed(true)}
  className="flex-row items-center content-center "
  style={{
    backgroundColor: isPressed ? Couleur.Limeblue7 : Couleur.Limeblue9,

    width: isPressed ? "89%" : "90%",
    height: 45,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Couleur.Limeblue1,
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Text
    style={{
      fontFamily: FontFamily.RobotoBold,
      letterSpacing: 0.5,
      lineHeight: Width * 0.05,
      fontSize: Width * 0.049,
      color: isPressed ? Couleur.White : Couleur.White,
    }}
  >
    {title}
  </Text>
</TouchableOpacity>
 )
}
