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
} from "react-native";
import DatePicker from "react-native-datepicker";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons,
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

export function ReservationSreen() {
  const [focus, setFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [SelectedClasseVoyage, setSelectedClasseVoyage] = useState("");
  const [SelectedVilleArrive, setSelectedVilleArrive] = useState("Douala");
  const [SelectedVilleDepart, setSelectedVilleDepart] = useState("Yaounde");
  const [SelectedSitesAgencesDepart, setSelectedSitesAgencesDepart] =
    useState("Mvan");
  const [SelectedSitesAgencesArrive, setSelectedSitesAgencesArrive] =
    useState("Akwa");
  const [data, setdata] = useState(VilleDepart);
  const navigation = useNavigation();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0081c7" d="M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1m3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 0 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-1.09"/></svg>`;
  const customFont = {
    fontFamily: FontFamily.Salsa, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "ligth",
    lineHeight: 15,
    fontSize: 16,
    color: "white",
  };
  const customFont2 = {
    fontFamily: FontFamily.Salsa, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "ligth",
    lineHeight: 15,
    fontSize: 16,
    color: "red",
  };
  const customFont3 = {
    fontFamily: FontFamily.Poppins, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 1,
    fontWeight: "ligth",
    lineHeight: 20,
    fontSize: 18,
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

  /** Recherche dans le tables */
  const rechercherIdParNom = (tableau, nomRecherche) => {
    // Utilisation de la méthode find pour rechercher le premier objet par nom
    const objetTrouve = tableau.find((objet) => objet.nom === nomRecherche);

    // Retourne l'id si l'objet est trouvé, sinon retourne null
    return objetTrouve ? objetTrouve.id : null;
  };

  /*   Requette de recupperer   les sites de depart*/
  const [dataSiteDepart, setDataSiteDepart] = useState(sitesAgence);

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
        console.error("Erreur lors de la récupération des données :", erreur);
      }
    };

    // Appel de la fonction pour effectuer la requête lors du montage du composant
    GetSite();
    GetVille();

    // Logs
    LOGS();
  }, []);

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

  const rechercher = (villeDepart, villeArrivee, siteAgence) => {
    // Naviguer vers l'écran en utilisant les données fournies
    // Exemple de code de navigation :
    navigation.navigate("trajet", { villeDepart, villeArrivee, siteAgence });
  };

  return (
    // {/* Contenu scrollable */}
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: "100%",
          top: "2%",
          height: "full",
          alignItems: "flex-start",
          alignContent: "space-between",
          backgroundColor: "white",
          paddingLeft: 20,
        }}
      >
        {/* <View className="my-1">
            <MyDatePicker
              onDateSelected={handleDateSelection}
              name={selectedDate ? selectedDate : "Date de depart"}
            />
          </View>
          <View className="my-1">
            <MyTimePicker
              onDateSelected={handleTimeSelection}
              name={selectedTime ? selectedTime : "Heure de Depart"}
            />
          </View> */}

        <>
          <Text
            style={{
              marginTop: 5,
              marginBottom: -5,
              fontSize: 15,
              fontWeight: "ligth",
              color: Couleur.Limeblue7,
              fontFamily: FontFamily.Poppins,
            }}
          >
            De:
          </Text>
          <CustomSelect
            options={data}
            onChange={setSelectedVilleDepart}
            placeholder="Ville Depart"
          />
          <Text
            style={{
              marginTop: 5,
              marginBottom: -5,
              fontSize: 15,
              fontWeight: "ligth",
              color: Couleur.Limeblue7,
              fontFamily: FontFamily.Poppins,
            }}
          >
            Site de depart:
          </Text>
          <CustomSelect
            options={dataSiteDepart}
            onChange={setSelectedSitesAgencesDepart}
            placeholder="Site Depart"
          />
          <Text
            style={{
              marginTop: 5,
              marginBottom: -5,
              fontSize: 15,
              fontWeight: "ligth",
              color: Couleur.Limeblue7,
              fontFamily: FontFamily.Poppins,
            }}
          >
            Date de depart:
          </Text>
          <View className="my-1">
            <MyDatePicker
              onDateSelected={handleDateSelection}
              name={selectedDate ? selectedDate : "Date de depart"}
            />
          </View>
          <Text
            style={{
              marginTop: 5,
              marginBottom: -5,
              fontSize: 15,
              fontWeight: "ligth",
              color: Couleur.Limeblue7,
              fontFamily: FontFamily.Poppins,
            }}
          >
            A:
          </Text>
          <CustomSelect
            options={data}
            onChange={setSelectedVilleArrive}
            placeholder="Ville  Arrive"
          />

          <Text
            style={{
              marginTop: 5,
              marginBottom: -5,
              fontSize: 15,
              fontWeight: "ligth",
              color: Couleur.Limeblue7,
              fontFamily: FontFamily.Poppins,
            }}
          >
            Site d'arrivee:
          </Text>
          <CustomSelect
            options={dataSiteDepart}
            onChange={setSelectedSitesAgencesDepart}
            placeholder="Site d'arrivee"
          />
        </>
        {/* <CustomSelect
            options={data}
            onChange={setSelectedClasseVoyage}
            placeholder="Vip / Classique"
          /> */}

        {/* </View> */}
        <Button
          idStyle={customFont3}
          theme={{ colors: { primary: "rgba(0,129,199,1)" }, roundness: 1 }}
          style={{
            marginTop: 10,
            marginBottom: 50,
            width: 320,
            height: 50,
            justifyContent: "center",
          }}
          buttonColor="rgba(0,129,199,1)"
          mode="contained"
          onPress={() => {
            console.log("Pressed");
            navigation.navigate("trajet");
          }}
        >
          Rechercher
        </Button>
        <View className="h-64"></View>
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
    backgroundColor: "white",
    display: "flex",
    flexDirection: "colum",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
    height: 250,
    marginTop: 20,
    borderRadius: 5,
    borderStyle: "dashed", // Le style de bordure
    borderWidth: 2, // L'épaisseur de la bordure
    borderColor: "#29c7", // La couleur de la bordure
    borderRadius: 5, // Le rayon de la bordure
    padding: 10, // L'espacement intérieur
  },
});
