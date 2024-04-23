//===========================================================
//             Importations
//===========================================================

import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import Couleur from "../../utils/color";
import { FontFamily } from "../../../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import ActionSheet from "../../components/BottomSheetForVoyages";
import { Width, Height } from "../../utils/DimensionScreen";
import Swiper from "react-native-swiper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from "@react-navigation/native";
import Svg, { Ellipse, Path, Line, Circle } from "react-native-svg";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { EffectuerReservationScreen } from "./EffectuerReservation";
import {
  getFormattedDate,
  getFormattedTime,
  subtractTime,
} from "./TrajetScreen";
export function VoyagesDisponible() {
  const [ShowAction, setShowAction] = useState(true);
  const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const route = useRoute();
  const [trajets, setTrajets] = useState([]);
  let params = [];
  params = route.params.trajets;
  useEffect(() => {
    setTrajets(params);
    console.log("TRAJEts A afficher:" + trajets);
  }, [params]);
  console.log("TRAJEts A afficher:" + trajets);
  const [currentTrajet, setCurrentTrajet] = useState(null);
  const [currentindex, setCurrentindex] = useState(null);
  const prixReservation = (trajet) => {
    if (trajet.bus.classe == "VIP") {
      return trajet.itineraire.prixVip;
    }
    if (trajet.bus.classe == "CLASSIQUE") {
      return trajet.itineraire.prixClassique;
    }
  };
  //=====================================================================
  const ajouterDuree = (heure, duree) => {
    // Diviser l'heure en heures et minutes
    const [heureStr, minuteStr] = heure.split(":");
    let heureInt = parseInt(heureStr, 10);
    let minuteInt = parseInt(minuteStr, 10);

    // Ajouter la durée
    minuteInt += duree;

    // Gérer le cas où les minutes dépassent 60
    heureInt += Math.floor(minuteInt / 60);
    minuteInt %= 60;

    // Formater l'heure de fin pour l'affichage
    const heureFinFormattee = `${heureInt
      .toString()
      .padStart(2, "0")}:${minuteInt.toString().padStart(2, "0")}`;

    return heureFinFormattee;
  };
  //==============================================================
  // function getFormattedTime(dateDepart) {
  //   const date = new Date(dateDepart);
  //   const hours = date.getHours().toString().padStart(2, "0");
  //   const minutes = date.getMinutes().toString().padStart(2, "0");
  //   return `${hours}:${minutes}`;
  // }
  console.log(
    "============================== Voyages disponible  ============================\n\n"
  );
  console.log(JSON.stringify(params));
  console.log(
    "==============================================================================="
  );

  function regrouperParDateDepart(Trajets) {
    // Initialisation d'un objet pour stocker les trajets par date de départ
    var trajetsParDate = {};

    // Parcours de tous les trajets
    Trajets.forEach(function (trajet) {
      // Extraction de la date de départ (sans l'heure)
      var dateDepart = trajet.dateDepart.split("T")[0];

      // Si la date de départ n'existe pas encore comme clé dans l'objet, on la crée avec un tableau vide comme valeur
      if (!trajetsParDate[dateDepart]) {
        trajetsParDate[dateDepart] = [];
      }

      // Ajout du trajet au tableau correspondant à sa date de départ
      trajetsParDate[dateDepart].push(trajet);
    });

    // Conversion de l'objet en liste de tableaux
    var listeDeTableaux = Object.values(trajetsParDate);

    return listeDeTableaux;
  }

  // Exemple d'utilisation de la fonction avec le tableau de trajets fourni

  //var result = regrouperParDateDepart(Trajets);
  // console.log(result);

  //rechercher l'index d'un trajet selectionne:
  function trouverIndexInitial(trajetSelectionne, trajets) {
    // Recherche de l'index initial du trajet sélectionné dans le tableau initial
    if (trajetSelectionne != null) {
      const indexInitial = trajets.findIndex(
        (trajet) => trajet.id === trajetSelectionne.id
      );
      return trajets[indexInitial];
    }
  }

  // Regrouper les trajets par date de départ
  const trajetsParDate = trajets.reduce((acc, trajet) => {
    const date = trajet.dateDepart.split("T")[0]; // Récupérer la date sans l'heure
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(trajet);
    return acc;
  }, {});

  useEffect(() => {
    console.log("IndexSelect=" + currentindex);
  }, [currentindex]);
  //component to render each swiper with its corresponding elements:
  const [pressInDown, setPressInDown] = useState(false);
  const [pressOutDown, setPressOutDown] = useState(false);

  const [selectedTrajet, setSelectedTrajet] = useState(null);
  const [selectedTrajetIndex, setSelectedTrajetIndex] = useState(null);

  const handlePress = (trajet, index) => {
    setSelectedTrajet(trajet);
    setSelectedTrajetIndex(index);
  };
  useEffect(() => {
    console.log("trajetId:" + selectedTrajetIndex);
    console.log("\n\ntrajet:" + JSON.stringify(selectedTrajet));
    // selectedTrajet != null &&
    //   console.log(
    //     "\n\nIndex initial de trajet: " +
    //       JSON.stringify(trouverIndexInitial(selectedTrajet, Trajets))
    //   );
  }, [selectedTrajet]);
  return (
    <ScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "flex-start ",
        alignItems: "center",
      }}
    >
      {trajets?.map((trajet, index) => (
        <View
          key={index}
          className=" bg-white border-Black1 border shadow-lg shadow-Black5  rounded flex-col mt-5"
          style={styles.container}
        >
          <View
            className="h-1/2 w-full p-2 flex-row "
            style={{ marginBottom: -20 }}
          >
            <View className="w-1/2 h-full flex-row">
              <View
                className=" w-1/3 justify-between items-center"
                style={{ height: "85%" }}
              >
                <Text style={styles.text}>
                  {getFormattedTime(trajet.dateDepart)}
                </Text>
                <Text style={styles.text}>
                  {getFormattedTime(trajet.dateDepart)}{" "}
                  {/* {ajouterDuree(
                    getFormattedTime(trajet.dateDepart),
                    trajet.duree
                  )} */}
                </Text>
              </View>
              <View className=" w-auto" style={{ height: "100%" }}>
                <Svg
                  width="10"
                  height="80%"
                  viewBox="0 0 86 665"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M43 583L43 83"
                    stroke="black"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <Circle
                    cx="43"
                    cy="63"
                    r="60"
                    fill="white"
                    stroke="black"
                    stroke-width="5"
                  />
                  <Circle
                    cx="43"
                    cy="583"
                    r="60"
                    fill={Couleur.Black7}
                    stroke="black"
                    stroke-width="15"
                  />
                </Svg>
              </View>
              <View
                className=" w-2/3 justify-between  items-start pl-2"
                style={{ height: "85%" }}
              >
                <Text style={styles.text} className="">
                  {trajet.itineraire.villeDepart.nom}
                </Text>
                <Text style={styles.text}>
                  {trajet.itineraire.villeDestination.nom}{" "}
                </Text>
              </View>
            </View>
            <View className="w-1/2 h-full items-end">
              <Pressable
                // onPressIn={() => {
                //   setPressInDown(true);
                // }} // TODO : ajouter une fonction pour afficher

                // onPressIn={() => {
                //   setCurrentindex(index);
                // }}
                onPress={() => {
                  handlePress(trajet, index);
                  bottomSheetRef.current.open();
                }}
              >
                <AntDesign name="down" size={24} color={Couleur.Black7} />
              </Pressable>
            </View>
          </View>
          <View className="h-auto  p-2 flex-row items-center content-center">
            <View
              className="w-3/5"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Couleur.Black3,
              }}
            ></View>
            <Text className="w-2/5  color-red-900 pl-1" style={styles.text}>
              Presque Complet
            </Text>
          </View>

          <View className="h-1/2 w-full flex-row" style={{ marginTop: -15 }}>
            <View className="w-1/2 h-auto flex-col items-start ">
              <View
                className="  h-8 border-Black1 border shadow-sm  bg-white shadow-Black5 rounded-2xl mt-2 ml-1 flex-row items-center justify-around"
                style={{ width: "80%" }}
              >
                <FontAwesome5
                  name="bus-alt"
                  size={20}
                  color={Couleur.Limeblue9}
                />
                <View
                  className="w-auto   rounded"
                  style={{
                    height: "80%",
                    borderLeftWidth: 2,
                    borderLeftColor: Couleur.Black3,
                  }}
                ></View>
                <Text style={styles.text}>Direct</Text>
                {/* <Pressable
                      onPress={() => {
                        setCurrentindex(index);
                        handlePressDown(trajet, index);
                      }}
                    >
                      <AntDesign name="down" size={20} color={Couleur.Black4} />
                    </Pressable> */}
              </View>
              <View
                className="  h-8  bg-white mt-1 ml-1 flex-row items-center justify-around"
                style={{ width: "80%" }}
              >
                <Text style={styles.text}>
                  {getFormattedTime(trajet.dateDepart)}
                </Text>

                <View
                  className="w-auto   rounded"
                  style={{
                    height: "80%",
                    borderLeftWidth: 2,
                    borderLeftColor: Couleur.Black3,
                  }}
                ></View>

                <AntDesign name="wifi" size={20} color="green" />
                <MaterialIcons
                  name="electrical-services"
                  size={20}
                  color="green"
                />
                {/* <Pressable
                  onPress={() => {
                    Alert.alert("OK");
                  }}
                >
                  <AntDesign name="down" size={20} color={Couleur.Black4} />
                </Pressable> */}
              </View>
            </View>
            <View className="items-end justify-center ">
              <View className="w-1/2 h-auto flex-row justify-end items-center pr-1">
                <Text style={styles.text3} className="text-left ">
                  {`(`}
                  {trajet.bus.classe}
                  {`)`}
                </Text>
                <Text style={styles.text2} className="text-left ">
                  {prixReservation(trajet)} XAF
                </Text>
                <Pressable
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: Couleur.Limeblue9,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                    marginLeft: 5,
                  }}
                  onPress={() => {
                    bottomSheetRef.current.close();
                    // setShowAction(false);
                    navigation.navigate("trajet", {
                      trajet: trajet,
                      prixReservation: prixReservation(trajet),
                    });
                    handlePress(trajet, index);
                  }}
                >
                  {/* <Ionicons
                    name="arrow-redo-sharp"
                    size={24}
                    color={Couleur.White}
                  /> */}
                  <AntDesign name="right" size={24} color={Couleur.White} />
                </Pressable>
              </View>
              <View className=" items-end justify-end w-full pr-5">
                <Text style={styles.text2} className="  color-Limeblue9">
                  {trajet.itineraire.site.agence.nom}
                </Text>
              </View>
            </View>
          </View>
          <ActionSheet
            BottomSheetRef={bottomSheetRef}
            height={Height * 0.7}
            openDuration={600}
            trajet={trajet}
            // index={index}
            NextStep={() => {
              navigation.navigate("trajet", {
                trajet: trajet,
              });
              bottomSheetRef.current.close();
            }}
            subtractTime={subtractTime}
            getFormattedDate={getFormattedDate}
            getFormattedTime={getFormattedTime}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 160,
  },
  text: {
    fontSize: 12,
    fontFamily: FontFamily.Poppins,
  },
  text2: {
    fontSize: 13,

    fontFamily: FontFamily.Poppins,
  },
  text3: {
    fontSize: 11,

    fontFamily: FontFamily.RobotoThin,
  },
  buttonTextStyle: {},
});
