//===========================================================
//             Importations
//===========================================================

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
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { FontFamily } from "../../../GlobalStyles";
import bus from "../../assets/bus.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import { CustomSelect } from "../../components/select";
import MyDatePicker from "../../components/DatePicker";
import MyTimePicker from "../../components/TimePicked";
import axios from "axios";
import { Button } from "react-native-paper";
import Couleur from "../../utils/color";
// export function AnnotationSreen({ route, navigation }) {
import { AntDesign } from "@expo/vector-icons";
import Dropdown from "../../components/select-picker";
import { Width, Height } from "../../utils/DimensionScreen";
//=============================================
//         Ecran
//=============================================








export function ReservationForm() {











  //============================================
  //           Declaration des constantes
  //============================================

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [SelectedClasseVoyage, setSelectedClasseVoyage] = useState("");
  const [SelectedVilleArrive, setSelectedVilleArrive] = useState("Douala");
  const [SelectedVilleDepart, setSelectedVilleDepart] = useState("Yaounde");
   const [isPressed, setIsPressed] = useState(false);
  const [SelectedSitesAgencesDepart, setSelectedSitesAgencesDepart] =
    useState("Mvan");
  const [SelectedSitesAgencesArrive, setSelectedSitesAgencesArrive] =
    useState("Akwa");
  const [data, setdata] = useState();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0081c7" d="M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1m3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 0 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-1.09"/></svg>`;
  const customFont = {
    fontFamily: FontFamily.RobotoMedium, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "ligth",
    lineHeight: 15,
    fontSize: 16,
    color: "white",
  };
  const customFont2 = {
    fontFamily: FontFamily.RobotoMedium, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "ligth",
    lineHeight: 15,
    fontSize: 16,
    color: "red",
  };
  const customFont3 = {
    fontFamily: FontFamily.RobotoBold, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 1,
    // fontWeight: "ligth",
    lineHeight: 20,
    fontSize: 16,
    color: "white",
  };

  const [classeVoyage, setClasseVoyage] = useState([
    { id: "1", nom: "VIP" },
    { id: "2", nom: "Classique" },
  ]);

  const [VilleDepart, setVilleDepart] = useState([
    { id: "Yaounde", nom: "Yaounde" },
    { id: "Douala", nom: "Douala" },
  ]);

  const [VilleArrive, setVilleArrive] = useState([
    { id: "Yaounde", nom: "Yaounde" },
    { id: "Douala", nom: "Douala" },
  ]);

  const [sitesAgence, setSitesAgence] = useState([
    { id: "Mvan", nom: "Generale Mvan" },
    { id: "Akwa", nom: "Generale Akwa" },
  ]);
  const [Agence, setAgence] = useState([
    { id: "Generale", nom: "Generale Voyage" },
    { id: "Finex", nom: "Finex Voyage" },
    { id: "Pricess", nom: "Pricess Voyage" },
    { id: "Global", nom: "Global Voyage" },
  ]);

  /** Recherche dans le tables */
  const rechercherIdParNom = (tableau, nomRecherche) => {
    // Utilisation de la méthode find pour rechercher le premier objet par nom
    const objetTrouve = tableau.find((objet) => objet.nom === nomRecherche);

    // Retourne l'id si l'objet est trouvé, sinon retourne null
    return objetTrouve ? objetTrouve.id : null;
  };

  /*   Requette de recupperer   les sites de depart*/
  const [dataSiteDepart, setDataSiteDepart] = useState(sitesAgence);

  const getColor = (val) => {
    if (val === "Date de depart") {
      return Couleur.Black11;
    } else {
      return Couleur.Black10;
    }
  };
  //***********     GESTION  DES DATES       ************/
  const [valueDate, setValueDate] = useState("Date de depart");
  const [date, setDate] = useState(
    valueDate instanceof Date ? valueDate : new Date()
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [focus, setFocus] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios"); // Cacher le sélecteur sur iOS
    const currentDate = selectedDate || date;
    setDate(currentDate);
    // setValueDate(currentDate);
    setValueDate(formatDate(currentDate));
    console.log(currentDate);

    // Appel de la fonction de rappel avec la date sélectionnée
    onDateSelected(currentDate);
  };
  const customFontDate = {
    fontFamily: FontFamily.RobotoMedium,
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: 16,
    color: getColor(valueDate),
  };
  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  /**********************************************************/

  //===================================================
  //        Effect asychrones
  //===================================================

  /*   Requette  */
  useEffect(() => {
    const GetSite = async () => {
      try {
        const reponse = await axios.get(
          "http://192.168.43.63:8080/api/site/?ville=" +
            rechercherIdParNom(SelectedVilleDepart)
        );
        console.log(reponse.data);
        console.log(reponse.data.message);
        setDataSiteDepart(reponse.dataSiteDepart);
        // setDonnees(reponse.data);
      } catch (erreur) {
        console.error("Erreur lors de la récupération des sites :", erreur);
      }
    };
   

    const GetVille = async () => {
      try {
        const reponse = await axios.get("http://192.168.43.63:8080/api/ville");
        console.log(reponse.data);
        console.log(reponse.data.message);
        setdata(reponse.data);
        // setDonnees(reponse.data);
      } catch (erreur) {
        setdata(VilleDepart);
        console.error("Erreur lors de la récupération des données :", erreur);
      }
    };

    // Appel de la fonction pour effectuer la requête lors du montage du composant
    GetSite();
    GetVille();

    // Logs
    LOGS();
  }, []);



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

  //================================================
  //              FONCTIONS
  //================================================

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  // manege time picker
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };
  const [visible, setVisible] = React.useState(false);

  // test

  const LOGS = () => {
    console.log("Date : " + selectedDate);
    console.log("Heure: " + selectedTime);
    console.log("SelectedVilleDepart: " + SelectedVilleDepart);
    console.log("SelectedVilleArrive: " + SelectedVilleArrive);
    console.log("SelectedClasseVoyage: " + SelectedClasseVoyage);
    console.log("SelectedSitesAgencesDepart: " + SelectedSitesAgencesDepart);
  };
  // Rechaercher

  const rechercher = (
    villeDepart,
    villeArrivee,
    SelectedSitesAgencesDepart,
    SelectedSitesAgencesArrivee,
    selectedDate
  ) => {
    // Naviguer vers l'écran en utilisant les données fournies
    navigation.navigate("trajet", {
      villeDepart,
      villeArrivee,
      SelectedSitesAgencesDepart,
      SelectedSitesAgencesArrivee,
      selectedDate,
    });
  };
  const formatDate = (date) => {
    // if(typeof(date===String)){
    const options = {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("fr-FR", options); // Utilisez le format 'fr-FR' pour le français
    // }
    // else{
    //     return date;
    // }
  };



  /** Gestion des dropdown */
  const [selectedItem, setSelectedItem] = useState(null);

  // Définir la liste de données pour le dropdown
  const Data = [
    { id: "Option 1", nom: "option1" },
    { id: "Option 2", nom: "option2" },
    { id: "Option 3", nom: "option3" },
  ];

  // Fonction pour gérer le changement de sélection
  const handleChange = (value) => {
    setSelectedItem(value);
    console.log("Selected item:", value);
  };

  //=======================================
  //            RENDU
  //======================================
  return (
    // {/* Contenu scrollable */}
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View
        Style={{
          width: "100%",
          // top: "2%",
          minHeight: 700,

          alignItems: "center",
          alignContent: "center",
          backgroundColor: "white",
          paddingLeft: 0,
          height: "auto",
        }}
        className=" flex-col my-4"
      >
        <View
          className=" flex-col my-4"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View className="w-full flex  flex-row ">
            <View
              className=" w-1/2 flex-wrap flex-col"
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View className="flex-1 ">
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 0,
                    fontSize: 15,
                    fontWeight: "ligth",
                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  De:
                </Text>
                <Dropdown
                  data={VilleDepart}
                  onChange={setSelectedVilleDepart}
                  placeholder="Ville Depart"
                />
              </View>
            </View>

            <View
              className=" w-1/2 flex-wrap flex-col"
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View className="flex-1">
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 0,
                    fontSize: 15,
                    fontWeight: "ligth",
                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  Vers:
                </Text>
                <Dropdown
                  data={VilleArrive}
                  onChange={setSelectedVilleArrive}
                  placeholder="Ville Arrive"
                />
              </View>
            </View>
          </View>

          <View className="w-full flex  flex-row">
            <View
              className=" w-1/2 flex-wrap flex-col"
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View className="flex-1">
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 0,
                    fontSize: 15,
                    fontWeight: "ligth",
                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  De:
                </Text>
                <Dropdown
                  data={dataSiteDepart}
                  onChange={setSelectedSitesAgencesDepart}
                  placeholder="Site Depart"
                />
              </View>
            </View>
            <View
              className=" w-1/2 flex-wrap flex-col"
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View className="flex-1">
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 0,
                    fontSize: 15,
                    fontWeight: "ligth",
                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  Vers:
                </Text>
                <Dropdown
                  data={dataSiteDepart}
                  onChange={setSelectedSitesAgencesArrive}
                  placeholder="Site d'arrivee"
                />
              </View>
            </View>
          </View>

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
                  fontWeight: "ligth",
                  color: Couleur.Black10,
                  fontFamily: FontFamily.RobotoMedium,
                }}
              >
                Date de depart:
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
                      width: 330,
                      height: 45,
                      borderRadius: 5,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "flex",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: Couleur.Black4,
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

          {/* Agences */}
          <View className="w-full  flex  flex-row ">
            <View
              className=" w-full flex-col"
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View className="flex-1 ">
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 0,
                    fontSize: 15,
                    fontWeight: "ligth",
                    color: Couleur.Black10,
                    fontFamily: FontFamily.RobotoMedium,
                  }}
                >
                  Agence:
                </Text>
                <Dropdown
                  width={330}
                  data={Agence}
                  onChange={setSelectedVilleDepart}
                  placeholder="Nom Agence"
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.navigate("trajet");
            }}
            onPressIn={() => setIsPressed(true)}
            className="flex-row items-center content-center "
            style={{
              backgroundColor: isPressed
                ? Couleur.Limeblue7
                : Couleur.Limeblue9,

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
              Rechercher
            </Text>
          </TouchableOpacity>
          {/* </View> */}
          {/* ******************************************* */}
        </View>
      </View>
      {/* </View> */}
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






















 {
   /* <Button
            mode="contained"
            onPress={() => navigation.navigate("trajet")}
          >
            Rechercher
          </Button> */
 }

 {
   /* <Button
            // icon={<AntDesign name="search1" size={24} color="black" />}
            // icon="login"
            labelStyle={customFont3}
            theme={{ colors: { primary: "rgba(0,129,199,1)" }, roundness: 1 }}
            style={{
              marginTop: 10,
              marginBottom: 50,
              width: 320,
              height: 50,
              justifyContent: "center",
            }}
            // loading={isLoading}
            buttonColor="rgba(0,129,199,1)"
            mode="contained"
            onPress={() => {
              navigation.navigate("trajet");
              //setIsLoading(true);
              // console.log("Pressed");
              // navigation.navigate("trajet");
              // rechercher(
              //   SelectedVilleDepart,
              //   SelectedVilleArrive,
              //   SelectedSitesAgencesDepart,
              //   SelectedSitesAgencesArrive,
              //   selectedDate
              // );
            }}
          >
            Rechercher
          </Button> */
 }
 {
   /* <Button
            mode="contained"
            theme={{ colors: { primary: "rgba(0,129,199,1)" }, roundness: 1 }}
            labelStyle={customFont3}
            style={{
              marginTop: 10,
              marginBottom: 50,
              width: 320,
              height: 50,
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.navigate("trajet");
            }}
          >
            Recherche
          </Button> */
 }
 {
   /* <Pressable style={styles.pressable} onPress={navigation.navigate("trajet")}>
            <Text>Rechercher</Text>
          </Pressable> */
 }
 {
   /* <View className="my-1 w-full items-center content-center"> */
 }
 {
   /* <MyDatePicker
                  onDateSelected={handleDateSelection}
                  name={selectedDate ? selectedDate : "Date de depart"}
                /> */
 }

 {
   /* ********************DATE******************* */
 }
 {
   /* <View> */
 }