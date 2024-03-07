//===========================================================
//             Importations
//===========================================================

import React, { useEffect } from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import Couleur from "../../utils/color";
//=============================================
//         Ecran
//=============================================



export function ReservationSreen() {
  //============================================
  //           Declaration des constantes
  //============================================





  //=======================================
  //            RENDU
  //======================================
  return (
    // {/* Contenu scrollable */}
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
    <Text>Listes des reservations</Text>
    </ScrollView>
    // {/* </ScrollView> */}
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 50,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    margin: 20,
  },
  pressable: {
    backgroundColor: Couleur.Limeblue,
    color: "#fff",
    display: "flex",
    flexDirection: "colum",
    justifyContent: "space-around",
    alignItems: "center",
    width: 330,
    height: 39,
    marginTop: 20,
    borderRadius: 5,
    borderStyle: "solid", // Le style de bordure
    borderWidth: 2, // L'épaisseur de la bordure
    borderColor: "#29c7", // La couleur de la bordure
    borderRadius: 5, // Le rayon de la bordure
    padding: 10, // L'espacement intérieur
  },
});
