import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontFamily } from "../../GlobalStyles";
import color from "../utils/color";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";

export const PaimentScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      // Naviguer vers l'écran de destination souhaité
      navigation.goBack();
      return true; // Indiquer que l'action de retour a été gérée
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Retirer l'écouteur d'événement lorsque le composant est démonté
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.message}>paiment</Text>

      <Text style={styles.message}></Text>
      {/* Ajoutez le contenu supplémentaire de votre écran ici */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    fontWeight: "medium",
    color: color.Black2,
    fontFamily: FontFamily.Poppins,
    fontSize: 20,
  },
});
