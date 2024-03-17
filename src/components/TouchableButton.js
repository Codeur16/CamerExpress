import React, { useState, useEffect } from "react";
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
import { Width, Height } from "../utils/DimensionScreen";
import Couleur from "../utils/color";
import { FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

export const TouchButton = ({
  onPress,
  title,
  height,
  radius,
  font,
  color,
  width,
}) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  let col = color ? color : Couleur.Limeblue9;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setIsPressed(false); // Réinitialiser l'état lorsque l'écran est en focus
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    if (isPressed) {
      setIsPressed(false); // Réinitialiser l'état lorsque l'écran est en focus
    }
  }, [isPressed]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        onPress();
      }}
      onPressIn={() => setIsPressed(true)}
      className="flex "
      style={{
        backgroundColor: isPressed ? Couleur.Limeblue7 : col,

        width: isPressed ? "89%" : "90%",
        height: height ? height : 45,
        borderRadius: radius ? radius : 5,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Couleur.Limeblue1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: font ? font : FontFamily.RobotoBold,
          letterSpacing: 0.5,
          lineHeight: Width * 0.05,
          fontSize: Width * 0.049,
          color: isPressed ? Couleur.White : Couleur.White,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
