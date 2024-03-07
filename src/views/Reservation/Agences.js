import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import Couleur from "../../utils/color"
import { FontFamily } from "../../../GlobalStyles";
import ActionSheet from "../../components/ActionSheet";
export const AgenceScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      // Naviguer vers l'écran de destination souhaité
      navigation.navigate("HomeRoot");
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
      <Text style={styles.message}>Aucune Agence</Text>
    
      <Text style={styles.message}></Text>
      {/* Ajoutez le contenu supplémentaire de votre écran ici */}
      <ActionSheet />
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
    color: Couleur.Black2,
    fontFamily: FontFamily.Poppins,
    fontSize: 20,
  },
});
