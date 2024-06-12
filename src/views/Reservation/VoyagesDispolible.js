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
  TouchableOpacity,
  Button,
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
import {
  getFormattedDate,
  getFormattedTime,
  subtractTime,
} from "./TrajetScreen";
import BottomSheet from "react-native-raw-bottom-sheet";
import { RadioButton } from "react-native-paper";
import Dropdown from "../../components/select-picker";

export function VoyagesDisponible() {
  const [ShowAction, setShowAction] = useState(true);
  const bottomSheetRef = useRef();
  const BottomSheetRef = useRef();
  const navigation = useNavigation();
  const route = useRoute();
  const [trajets, setTrajets] = useState(currentTrajet);
  const currentTrajet = route.params.trajets;
  const enfants = route.params.enfants;
  const adultes = route.params.adultes;
  // var params = route.params.trajets;
  const [selectDuree, setselectDuree] = useState("");
  const [value, setValue] = useState("");
  const [Agence, setAgence] = useState([
    { id: "Yaounde", nom: "General" },
    { id: "Douala", nom: "Finex" },
  ]);
  const [selectAgence, setSelectA] = useState("");
  useEffect(() => {
    setTrajets(route.params.trajets);
  }, []);
  useEffect(() => {
    const newAgences = currentTrajet?.map((trajet) => {
      return {
        id: trajet.itineraire.site.agence.nom,
        nom: trajet.itineraire.site.agence.nom,
      };
    });

    setAgence(newAgences);
  }, [trajets]);

  console.log("TRAJEts A afficher:" + trajets);
  // const [currentTrajet, setCurrentTrajet] = useState(null);
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

  console.log(
    "============================== Voyages disponible  ============================\n\n"
  );
  console.log(JSON.stringify(trajets));
  console.log(
    "==============================================================================="
  );

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
  //=========================== Supposons que prixReservation(trajet) soit une fonction asynchrone qui retourne le prix de la réservation======================
  const updateAndNavigate = async (trajet, index) => {
    // Attendre la mise à jour du prix de la réservation
    const prix = await prixReservation(trajet);

    // Naviguer vers la destination avec le prix mis à jour
    navigation.navigate("trajet", {
      trajet: trajet,
      prixReservation: prix,
      enfants: enfants,
      adultes: adultes,
    });

    // Exécuter toute autre logique nécessaire après la navigation
    handlePress(trajet, index);
  };

  //=================================================//=================================================//=================================================
  useEffect(() => {
    console.log("trajetId:" + selectedTrajetIndex);
    console.log("\n\ntrajet:" + JSON.stringify(selectedTrajet));
    // selectedTrajet != null &&
    //   console.log(
    //     "\n\nIndex initial de trajet: " +
    //       JSON.stringify(trouverIndexInitial(selectedTrajet, Trajets))
    //   );
  }, [selectedTrajet]);

  //================================================== convert duree ==================================================
  function convertDurationToTime(duration) {
    const hours = Math.floor(duration); // Obtient le nombre d'heures entières
    const minutes = Math.round((duration % 1) * 60); // Convertit la partie décimale en minutes

    // Formate les heures et les minutes
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}`;
  }

  //==================================================AddTime==================================================

  function addTime(time1, time2) {
    const [hours1, minutes1] = time1.split(":").map(Number);
    const [hours2, minutes2] = time2.split(":").map(Number);

    let totalMinutes = (hours1 + hours2) * 60 + (minutes1 + minutes2);

    // Si le total des minutes dépasse 23h59min, recommencer à 00h00min (24h00min)
    if (totalMinutes >= 24 * 60) {
      totalMinutes -= 24 * 60;
    }

    const hours = Math.floor(totalMinutes / 60)
      .toString()
      .padStart(2, "0");
    const minutes = (totalMinutes % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }
  //==================================================

  const [filteredTrajets, setFilteredTrajets] = useState(currentTrajet);

  // filtres
  const filterTrajet = () => {
    let filtered = currentTrajet;

    // Filtrer par classe
    if (value === "VIP") {
      filtered = filtered.filter((trajet) => trajet.bus.classe === "VIP");
    } else if (value === "CLASSIQUE") {
      filtered = filtered.filter((trajet) => trajet.bus.classe === "CLASSIQUE");
    } else {
      filtered = filtered;
    }

    // Filtrer par agence "General"
    if (selectAgence === "") {
      filtered = filtered;
    } else {
      filtered = filtered.filter(
        (trajet) => trajet.itineraire.site.agence.nom === selectAgence
      );
    }
    // Trier par durée
    if (selectDuree === "1") {
      filtered = filtered.sort(
        (a, b) => a.itineraire.duree - b.itineraire.duree
      );
    } else if (selectDuree === "2") {
      filtered = filtered.sort(
        (a, b) => b.itineraire.duree - a.itineraire.duree
      );
    }

    setFilteredTrajets(filtered);
  };
  useEffect(() => {
    filterTrajet();
    console.log("value:", value);
  }, [value]);
  return (
    <ScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        flexDirection: "column",
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        justifyContent: "flex-start ",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          // alignItems: "center",
        }}
        className="w-full bg-white items-end justify-end"
        onPress={() => {
          BottomSheetRef.current.open();
        }}
      >
        <Text style={{ color: "#FFF", padding: 1 }}>Filtre</Text>
        <Ionicons
          name="filter"
          size={24}
          color={Couleur.Black8}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
      {filteredTrajets?.map((trajet, index) => (
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
                  {addTime(
                    getFormattedTime(trajet?.dateDepart),
                    convertDurationToTime(trajet.itineraire.duree)
                  )}
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
                  {convertDurationToTime(trajet.itineraire.duree)}
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
                    handlePress(trajet, index);
                    updateAndNavigate(trajet, index);
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
              updateAndNavigate(trajet, index);
              bottomSheetRef.current.close();
            }}
            subtractTime={subtractTime}
            getFormattedDate={getFormattedDate}
            getFormattedTime={getFormattedTime}
          />
        </View>
      ))}

      <BottomSheet
        ref={BottomSheetRef}
        closeOnDragDown={true}
        height={Height * 0.8}
        openDuration={350}
        animationType="slide"
        minClosingHeight={0}
        closeDuration={20}
        closeOnPressMask={true}
        customStyles={{
          wrapper: "bg-Black5",
          container: "rounded-t-3xl bg-white flex flex-col",
          draggableIcon: "bg-Limeblue6",
        }}
      >
        <View className="p-4 flex flex-row h-auto items-center justify-start border-b border-gray-300">
          <Pressable
            onPress={() => {
              BottomSheetRef.current.close();
            }}
            className="p-0"
          >
            <AntDesign name="close" size={25} color={"#000"} />
          </Pressable>
          <View className="w-4/5 h-auto items-center justify-center">
            <Text className="text-lg font-bold ">Trier & Filtrer</Text>
          </View>
        </View>
        {/* filter  1 */}
        <View className="p-4 border-b border-gray-300">
          <Text className="text-lg font-bold mb-2">Trier par classe</Text>
          <View className="space-y-2">
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View className="flex flex-row items-center justify-start">
                <Text className="text-left w-auto">CLASSIQUE</Text>
                <RadioButton value="CLASSIQUE" color={"rgba(0, 129, 199, 1)"} />
              </View>
              <View className="flex flex-row items-center justify-start">
                <Text className="text-left w-auto">VIP</Text>
                <RadioButton value="VIP" color={"rgba(0, 129, 199, 1)"} />
              </View>
              <View className="flex flex-row items-center justify-start">
                <Text className="text-left w-auto">Tout</Text>
                <RadioButton value="" color={"rgba(0, 129, 199, 1)"} />
              </View>
            </RadioButton.Group>
          </View>
        </View>
        {/* filtre 2 */}
        <View className="p-4 border-b border-gray-300">
          <Text className="text-lg font-bold mb-2">
            Trier par duree du trajet
          </Text>
          <View className="space-y-2">
            <RadioButton.Group
              onValueChange={(newValue) => setselectDuree(newValue)}
              value={selectDuree}
              color={"rgba(0, 129, 199, 1)"}
            >
              <View className="flex flex-row items-center justify-start">
                <Text className="text-left w-auto">
                  Plus longue duree d'abord
                </Text>
                <RadioButton value="1" color={"rgba(0, 129, 199, 1)"} />
              </View>
              <View className="flex flex-row items-center justify-start">
                <Text className="text-left w-auto">
                  Plus courte duree d'abord
                </Text>
                <RadioButton value="2" color={"rgba(0, 129, 199, 1)"} />
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View className="p-4 border-b border-gray-300">
          <Text className="text-lg font-bold mb-2">Filtrer par agence</Text>
          {/* <SelectAgence /> */}
          <Dropdown
            data={Agence}
            onChange={setSelectA}
            placeholder="Agence"
            width={Width * 0.8}
          />
        </View>
        <View className="p-4 border-t border-gray-300">
          <Button
            title="Appliquer"
            onPress={() => {
              filterTrajet();
              BottomSheetRef.current.close();
            }}
          />
        </View>
      </BottomSheet>
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
