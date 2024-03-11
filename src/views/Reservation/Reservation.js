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
import { FontFamily } from "../../../GlobalStyles";
import { Width, Height } from "../../utils/DimensionScreen";
import { TextInput } from "react-native-paper";
import { TouchButton } from "../../components/TouchableButton";
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
    <ScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: Couleur.White,
        height: "100%",
        width: Width,
      }}
    >
      <View
        className="flex flex-col items-start justify-center mt-5 ml-5"
        style={{
          width: Width * 1,
          height: Height / 3,
        }}
      >
        <View className="flex flex-row items-start justify-center my-2">
          <Ionicons name="square" size={24} color={Couleur.Limeblue9} />
          <Text
            style={{
              textAlign: "left",
              fontFamily: FontFamily.RobotoBold,
              fontSize: Width * 0.06,
              color: Couleur.Black7,
            }}
          >
            Votre numero de reservation
          </Text>
        </View>
        <Text
          style={{
            textAlign: "left",
            fontFamily: FontFamily.RobotoBold,
            fontSize: Width * 0.045,
            color: Couleur.Black4,
            width: Width * 0.8,
          }}
        >
          Entrez le numero de reservation qui vous a ete donne dans le message
          de confirmation
        </Text>

        <TextInput
          mode="outlined"
          label="Numero de réservation"
          placeholder="Numero de réservation"
          style={{ width: Width * 0.85, marginTop: 10 }}
        />
        <View
          style={{ width: Width * 0.95 }}
          className="items-start justify-center mt-5"
        >
          <TouchButton title="Rechercher" />
        </View>
      </View>
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
