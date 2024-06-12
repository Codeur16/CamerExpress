//===========================================================
//             Importations
//===========================================================

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  ToastAndroid,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import { FontFamily } from "../../../GlobalStyles";
import axios, { AxiosError } from "axios";
import Couleur from "../../utils/color";
import Dropdown from "../../components/select-picker";
import { Width, Height } from "../../utils/DimensionScreen";
import { TouchButton } from "../../components/TouchableButton";
import url from "../../utils/url";
import { RadioButton } from "react-native-paper";
import BottomSheet from "react-native-raw-bottom-sheet";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ButtomSheet from "../../components/BottomSheetForPaiement";

const initialData = [
  {
    id: 2,
    itineraire: {
      id: 23,
      site: {
        id: 1,
        agence: {
          id: 3,
          nom: "General",
        },
        ville: {
          id: 6,
          nom: "Yaounde",
        },
        quartier: "Mvan",
        prixAnnulation: 1000,
      },
      villeDepart: {
        id: 6,
        nom: "Yaounde",
      },
      villeDestination: {
        id: 4,
        nom: "Baffoussam",
      },
      duree: 7,
      prixClassique: 5000,
      prixVip: 8000,
      createdAt: "2024-04-09T15:47:54",
    },
    bus: {
      id: 2,
      site: {
        id: 2,
        agence: {
          id: 1,
          nom: "Fitnexs",
        },
        ville: {
          id: 6,
          nom: "Yaounde",
        },
        quartier: "Mvan",
        prixAnnulation: 1000,
      },
      capacite: 70,
      code: "B2",
      classe: "CLASSIQUE",
    },
    code: "N10rX",
    dateDepart: "2024-12-04T15:40:10",
  },
  {
    id: 3,
    itineraire: {
      id: 23,
      site: {
        id: 1,
        agence: {
          id: 3,
          nom: "Finex",
        },
        ville: {
          id: 6,
          nom: "Yaounde",
        },
        quartier: "Mvan",
        prixAnnulation: 1000,
      },
      villeDepart: {
        id: 6,
        nom: "Yaounde",
      },
      villeDestination: {
        id: 4,
        nom: "Baffoussam",
      },
      duree: 4,
      prixClassique: 5000,
      prixVip: 8000,
      createdAt: "2024-04-09T15:47:54",
    },
    bus: {
      id: 2,
      site: {
        id: 2,
        agence: {
          id: 1,
          nom: "Fitnexs",
        },
        ville: {
          id: 6,
          nom: "Yaounde",
        },
        quartier: "Mvan",
        prixAnnulation: 1000,
      },
      capacite: 70,
      code: "B2",
      classe: "VIP",
    },
    code: "N10rX",
    dateDepart: "2024-12-04T15:40:10",
  },
  // Ajoutez les autres objets ici
];

//=============================================
//         Ecran
//=============================================

export function ReservationForm({ onClick }) {
  //============================================
  //           Declaration des constantes
  //============================================
  const BottomSheetRef = useRef();
  const [selectedDate, setSelectedDate] = useState(date);
  const [SelectedVilleArrive, setSelectedVilleArrive] = useState(null);
  const [SelectedVilleDepart, setSelectedVilleDepart] = useState(null);
  const [selectedSitesAgencesDepart, setSelectedSitesAgencesDepart] =
    useState(null);
  const [selectedClasse, setSelectedClasse] = useState(null);
  const [classeVoyage, setClasseVoyage] = useState([
    { id: "VIP", nom: "VIP" },
    { id: "CLASSIQUE", nom: "CLASSIQUE" },
  ]);
  const navigation = useNavigation();
  const [focus, setFocus] = useState(false);
  const [SiteDepart, setSiteDepart] = useState([
    { id: "Generale Mvan", nom: "Generale Mvan" },
    { id: "Generale Akwa", nom: "Generale Akwa" },
  ]);
  const [VilleDepart, setVilleDepart] = useState([
    { id: "Yaounde", nom: "Yaounde" },
    { id: "Douala", nom: "Douala" },
  ]);
  // Parametre de requette
  const [Trajets, setTrajets] = useState(initialData);
  const [allerSimple, setAllerSimple] = useState("true");
  //================================================================

  /*   Requette de recupperer   les sites de depart*/

  const getColor = (val) => {
    if (val === "Date de depart") {
      return Couleur.Black11;
    } else {
      return Couleur.Black10;
    }
  };
  //***********     GESTION  DES DATES       ************/
  const [valueDate, setValueDate] = useState("Date de depart");
  const [valueDate2, setValueDate2] = useState("Date de retour");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios"); // Cacher le sélecteur sur iOS
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setSelectedDate(currentDate);
    setValueDate(formatDate(selectedDate));

    // console.log("Date: " + valueDate);
    // console.log(currentDate);
    // console.log("Date: " + valueDate);

    // Appel de la fonction de rappel avec la date sélectionnée
    onDateSelected(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  useEffect(() => {
    console.log("Date net: " + valueDate);
  }, [valueDate]);
  /**********************************************************/

  //===================================================
  //        Effect asychrones et Services
  //===================================================

  /*   Requette  */
  useEffect(() => {
    const GetSite = async () => {
      try {
        const reponse = await axios.get(url + "/api/site/get", {
          params: { ville: SelectedVilleDepart },
        });
        console.log("Sites de AGENCES: " + JSON.stringify(reponse.data));
        console.log(reponse.data.message);
        setSiteDepart(reponse.data);
        // setDonnees(reponse.data);
      } catch (erreur) {
        console.error("Erreur lors de la récupération des sites :", erreur);
      }
    };

    const GetVille = async () => {
      try {
        const reponse = await axios.get(url + "/api/ville/get");
        setVilleDepart(reponse.data);
        console.log("Selected ville depart: " + SelectedVilleDepart);
        console.log("Villes departs:" + JSON.stringify(VilleDepart));
      } catch (erreur) {
        console.error("Erreur lors de la récupération des données :", erreur);
      }
    };

    // Appel de la fonction pour effectuer la requête lors du montage du composant
    GetSite();
    GetVille();

    // Logs
  }, [SelectedVilleDepart]);

  // useEffect(() => {
  //   setSelectedSitesAgencesDepart("");
  // }, [SelectedVilleDepart]);

  //================================================
  //              FONCTIONS
  //================================================
  const handleSearchTrajet = () => {
    if (SelectedVilleDepart == null || SelectedVilleArrive == null) {
      return ToastAndroid.show(
        "Ville de depart ou d'arrivée non renseigné !!!",
        ToastAndroid.SHORT
      );
    } else if (SelectedVilleDepart === SelectedVilleArrive) {
      return ToastAndroid.show(
        "La ville de depart doit etre différente de la ville d'arrivée !!!",
        ToastAndroid.SHORT
      );
    } else if (adultes + enfants == 0) {
      return ToastAndroid.show(
        "Entrer le nombre de passager",
        ToastAndroid.SHORT
      );
    } else {
      onClick(true);
      const data = {
        de: SelectedVilleDepart,
        vers: SelectedVilleArrive,
        site: selectedSitesAgencesDepart,
        classe: selectedClasse,
        date: date,
      };
      console.log(data);
      axios
        .get(url + "/api/voyage/get", {
          params: {
            de: SelectedVilleDepart,
            vers: SelectedVilleArrive,
            site: selectedSitesAgencesDepart,
            classe: selectedClasse,
            date: selectedDate,
          },
          //timeout: 5, // Timeout en millisecondes (ici 5000 pour 5 secondes)
        })
        .then((res) => {
          console.log(
            "\n\t\t==================================== Trajets Disponibles ===============================\n\n"
          );
          console.log(JSON.stringify(res.data.data));
          console.log(
            typeof res.data.data,
            "\n\t\t=======================================================================================\n"
          );
          setTrajets(res.data.data);
          const currentTrajets = res.data.data;
          if (!res.data.data) {
            onClick(false);
            return ToastAndroid.show(
              "Aucun voyage configure!!!",
              ToastAndroid.SHORT
            );
          } else {
            navigation.navigate("Voyages", {
              trajets: currentTrajets,
              enfants: enfants,
              adultes: adultes,
            });
          }

          onClick(false);
        })
        .catch((err) => {
          console.error("Erreur ! \n veillez reessayer");
          console.error(err);
          onClick(false);
          console.log(typeof Trajets);
          return ToastAndroid.show(
            "Probleme de connection internet",
            ToastAndroid.SHORT
          );
          // navigation.navigate("Voyages", {
          //   trajets: Trajets,
          //   enfants: enfants,
          //   adultes: adultes,
          // });
        });
    }
  };

  //============================================
  //      Formatage de la date
  //==========================================
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString("fr-FR", options);
  };

  //==========================================passager

  const [adultes, setAdultes] = useState(0);
  const [enfants, setEnfants] = useState(0);

  const incrementAdultes = () => {
    setAdultes(adultes + 1);
  };

  const decrementAdultes = () => {
    if (adultes > 0) {
      setAdultes(adultes - 1);
    }
  };

  const incrementEnfants = () => {
    setEnfants(enfants + 1);
  };

  const decrementEnfants = () => {
    if (enfants > 0) {
      setEnfants(enfants - 1);
    }
  };
  // ==========================Loading==========================

  //=======================================
  //            RENDU
  //======================================
  return (
    // {/* Contenu scrollable */}
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View
        Style={{
          width: Width * 0.9,

          alignItems: "center",
          alignContent: "center",
          backgroundColor: "white",
          paddingLeft: 0,
          height: "auto",
        }}
        className=" flex-col mb-0 pb-0"
      >
        <View
          className=" flex-col my-4"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View className="w-full h-auto flex flex-row ">
            <RadioButton.Group
              onValueChange={(newValue) => setAllerSimple(newValue)}
              value={allerSimple}
              className="flex flex-row w-full p-2  "
              style={{ display: "flex", flexDirection: "row" }}
            >
              <View className="flex flex-row">
                <View
                  className="flex w-1/2 flex-row items-center justify-start"
                  value="true"
                  color={"rgba(0, 129, 199, 1)"}
                >
                  <RadioButton
                    status="checked"
                    value="true"
                    color={"rgba(0, 129, 199, 1)"}
                  />
                  <Text className="text-left w-auto">Aller simple</Text>
                </View>
                <View className="flex w-1/2 flex-row items-center justify-start">
                  <RadioButton
                    value="false"
                    disabled
                    color={"rgba(0, 129, 199, 1)"}
                  />
                  <Text className="text-left w-auto">Aller retour </Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          {/* =======================Villes============================ */}
          <View
            className="  flex  flex-row  justify-between"
            style={{ width: Width * 0.9 }}
          >
            <View
              className="flex-col w-1/2"
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                alignContent: "center",
                // width: "49.2%",
              }}
            >
              <View className="flex-1 ">
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 0,
                    fontSize: 15,
                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  De <Text className="color-red-500">*</Text>
                </Text>
                <Dropdown
                  data={VilleDepart}
                  onChange={setSelectedVilleDepart}
                  placeholder="Ville Depart"
                  width={Width * 0.42}
                />
              </View>
            </View>

            <View
              className="  flex-col w-1/2"
              style={{
                alignItems: "flex-end",
                justifyContent: "center",
                alignContent: "center",
                // width: "49.2%",
              }}
            >
              <View className="flex-1">
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 0,
                    fontSize: 15,
                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  Vers <Text className="color-red-500">*</Text>
                </Text>
                <Dropdown
                  data={VilleDepart}
                  onChange={setSelectedVilleArrive}
                  placeholder="Ville Arrive"
                  width={Width * 0.42}
                />
              </View>
            </View>
          </View>

          {/* =========================Agences==================== */}
          {/* <View className="  flex flex-1 mt-2" style={{ width: Width * 0.9 }}>
            <Text
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontSize: 15,
                textAlign: "left",

                color: Couleur.Black10,
                fontFamily: FontFamily.RobotoMedium,
              }}
            >
              Agence{" "}
              <Text
                className=" color-Black4"
                style={{
                  fontSize: 14,

                  color: Couleur.Black5,
                  fontFamily: FontFamily.RobotoThin,
                }}
              >
                {`\t(`}optionel{`)`}
              </Text>
            </Text>
            <Dropdown
              data={SiteDepart}
              onChange={setSelectedSitesAgencesDepart}
              placeholder="Site Depart"
              width={Width * 0.9}
            />
          </View> */}
          {/* =====================Date de depart================== */}
          <View
            className="mt-2"
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View className="">
              <Text
                style={{
                  fontSize: 15,

                  color: Couleur.Black10,
                  fontFamily: FontFamily.RobotoMedium,
                }}
              >
                Aller
                <Text
                  className=" color-Black4"
                  style={{
                    fontSize: 14,

                    color: Couleur.Black5,
                    fontFamily: FontFamily.RobotoThin,
                  }}
                >
                  {`\t(`}optionel{`)`}
                </Text>
              </Text>
              <View className="my-1 w-full">
                {/* <MyDatePicker
                  onDateSelected={handleDateSelection}
                  name={selectedDate ? selectedDate : "Date de depart"}
                /> */}

                {/* ********************DATE******************* */}
                <View>
                  <Pressable
                    onPress={() => {
                      console.log("PressedDate");
                      setFocus(true);
                      showDatepicker();
                    }}
                    className="flex-row"
                    style={{
                      backgroundColor: Couleur.White,
                      fontSize: 12,
                      width: Width * 0.9,
                      height: 45,
                      borderRadius: 5,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "flex",
                      borderStyle: "solid",
                      borderWidth: 0.5,
                      borderColor: Couleur.Black1,
                      elevation: 1,
                      paddingLeft: 10,
                    }}
                  >
                    <Fontisto name="date" size={24} color={Couleur.Black11} />
                    <Text
                      style={{
                        fontFamily: FontFamily.RobotoMedium,
                        letterSpacing: 0.5,
                        lineHeight: 20,
                        fontSize: 16,
                        color: getColor(valueDate),
                        paddingLeft: 10,
                      }}
                    >
                      {valueDate}
                    </Text>
                  </Pressable>
                  {showDatePicker && (
                    <DateTimePicker
                      value={date}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      onChange={onChangeDate}
                      minimumDate={new Date()}
                    />
                  )}
                </View>
                {/* ******************************************* */}
              </View>
            </View>
          </View>
          {allerSimple === "false" && (
            <View
              className="mt-2"
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View className="">
                <Text
                  style={{
                    fontSize: 15,

                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  Retour
                  <Text
                    className=" color-Black4"
                    style={{
                      fontSize: 14,

                      color: Couleur.Black5,
                      fontFamily: FontFamily.RobotoThin,
                    }}
                  >
                    {`\t(`}indisponible{`)`}
                  </Text>
                </Text>
                <View className="my-1 w-full">
                  {/* <MyDatePicker
                  onDateSelected={handleDateSelection}
                  name={selectedDate ? selectedDate : "Date de depart"}
                /> */}

                  {/* ********************DATE******************* */}
                  <View>
                    <Pressable
                      onPress={() => {
                        console.log("PressedDate");
                        setFocus(true);
                        showDatepicker();
                      }}
                      className="flex-row"
                      style={{
                        backgroundColor: Couleur.White,
                        fontSize: 12,
                        width: Width * 0.9,
                        height: 45,
                        borderRadius: 5,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "flex",
                        borderStyle: "solid",
                        borderWidth: 0.5,
                        borderColor: Couleur.Black1,
                        elevation: 1,
                        paddingLeft: 10,
                      }}
                    >
                      <Fontisto name="date" size={24} color={Couleur.Black11} />
                      <Text
                        style={{
                          fontFamily: FontFamily.RobotoMedium,
                          letterSpacing: 0.5,
                          lineHeight: 20,
                          fontSize: 16,
                          color: getColor(valueDate),
                          paddingLeft: 10,
                        }}
                      >
                        {valueDate2}
                      </Text>
                    </Pressable>
                    {showDatePicker && (
                      <DateTimePicker
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeDate}
                        minimumDate={new Date()}
                      />
                    )}
                  </View>
                  {/* ******************************************* */}
                </View>
              </View>
            </View>
          )}

          {/* =======================Classe======================= */}
          {/* <View className="  flex flex-1" style={{ width: Width * 0.9 }}>
            <Text
              style={{
                marginTop: 5,
                marginBottom: 0,
                fontSize: 15,

                color: Couleur.Black10,
                fontFamily: FontFamily.RobotoMedium,
                textAlign: "left",
              }}
            >
              Classe{" "}
              <Text
                className=" color-Black4"
                style={{
                  fontSize: 14,

                  color: Couleur.Black5,
                  fontFamily: FontFamily.RobotoThin,
                }}
              >
                {`\t(`}optionel{`)`}
              </Text>
            </Text>
            <Dropdown
              data={classeVoyage}
              onChange={setSelectedClasse}
              placeholder="Classe de voyage"
              width={Width * 0.9}
            />
          </View> */}
        </View>
        <View className="w-full h-auto justify-center items-center px-5">
          <Pressable
            onPress={() => {
              BottomSheetRef.current.open();
            }}
            className="flex-row"
            style={{
              backgroundColor: Couleur.White,
              fontSize: 12,
              width: Width * 0.9,
              height: 45,
              borderRadius: 5,
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: Couleur.Black1,
              elevation: 1,
              paddingLeft: 10,
            }}
          >
            <Text>
              {adultes} adultes et {enfants} enfants
            </Text>
          </Pressable>
        </View>

        {/* ============= Bouton Rechercher=========================== */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            width: Width * 1,
          }}
          className="  my-3"
        >
          <TouchButton
            // width={Width * 0.9}
            title="Recherche"
            onPress={() => {
              console.log("Press");
              handleSearchTrajet();
              // navigation.navigate("trajet");
            }}
          />
          {/* </View> */}
          {/* ******************************************* */}
        </View>
      </View>

      {/* </View> */}
      <BottomSheet
        ref={BottomSheetRef}
        closeOnDragDown={true}
        height={Height * 0.6}
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
            <Text className="text-lg font-bold ">Passagers</Text>
          </View>
        </View>
        {/* filter  1 */}
        <View className="items-center justify-center flex flex-col w-full h-auto py-10 ">
          <Text>Nombre de passagers adultes: {adultes}</Text>
          <View
            style={{
              backgroundColor: "#FFF",
              fontSize: 12,
              width: Width * 0.9,
              height: 45,
              borderRadius: 5,
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: Couleur.Black1,
              elevation: 1,
              paddingLeft: 10,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Button title="  +  " onPress={incrementAdultes} />
            <Text> {adultes}</Text>
            <Button title="  -  " onPress={decrementAdultes} />
          </View>
          <Text>Nombre de passagers enfants: {enfants}</Text>
          <View
            style={{
              backgroundColor: Couleur.White,
              fontSize: 12,
              paddingVertical: 10,
              width: Width * 0.9,
              height: "auto",
              borderRadius: 5,
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: Couleur.Black1,
              elevation: 1,
              marginVertical: 10,
            }}
          >
            <Button title="  +  " onPress={incrementEnfants} />
            <Text> {enfants}</Text>
            <Button title="  -  " onPress={decrementEnfants} />
          </View>

          <View className=" w-11/12 h-20">
            <Button
              title="Confirmer"
              onPress={() => {
                BottomSheetRef.current.close();
              }}
            />
          </View>
        </View>
      </BottomSheet>
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
    width: Width,
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
