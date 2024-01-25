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
import Form from "../../components/formulairePlat";
import * as ImagePicker from "expo-image-picker";
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { FontFamily } from "../../../GlobalStyles";
import bus from "../../assets/bus.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Dialog, Portal } from "react-native-paper";
import { Icon, MD3Colors } from "react-native-paper";
import exchange from "../../assets/exchange.svg";
import { SvgXml } from "react-native-svg";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { CustomSelect } from "../../components/select";
import ModelSelect from "../../components/ModelSelect";
import MyDatePicker from "../../components/DatePicker";
import MyTimePicker from "../../components/TimePicked";
import { Provider } from "react-native-paper";
import axios from 'axios';
import url from "../../utils/url";

// export function AnnotationSreen({ route, navigation }) {

export function ReservationSreen() {
  const [focus, setFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0081c7" d="M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1m3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 0 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-1.09"/></svg>`;
  const customFont = {
    fontFamily: FontFamily.Salsa, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "bold",
    lineHeight: 15,
    fontSize: 16,
    color: "white",
  };
  const customFont2 = {
    fontFamily: FontFamily.Salsa, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "bold",
    lineHeight: 15,
    fontSize: 16,
    color: "red",
  };
  const customFont3 = {
    fontFamily: FontFamily.Poppins, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 18,
    color: "white",
  };
  const [SelectedClasseVoyage, setSelectedClasseVoyage] = useState("");
  const [SelectedVilleArrive, setSelectedVilleArrive] = useState("Douala");
  const [classeVoyage, setClasseVoyage] = useState([
    { id: "1", nom: "VIP" },
    { id: "2", nom: "Classique" },
  ]);
  const [SelectedVilleDepart, setSelectedVilleDepart] = useState("Yaounde");
  const [VilleDepart, setVilleDepart] = useState([
    { label: "Yaounde", value: "Yaounde" },
    { label: "Douala", value: "Douala" },
  ]);
  
  const [VilleArrive, setVilleArrive] = useState([
    { label: "Yaounde", value: "Yaounde" },
    { label: "Douala", value: "Douala" },
  ]);
  const [SelectedSitesAgencesDepart, setSelectedSitesAgencesDepart] = useState("Mvan");
  const [SelectedSitesAgencesArrive, setSelectedSitesAgencesArrive] = useState("Akwa");

  const [sitesAgence, setSitesAgence] = useState([
    { label: "Mvan", value: "Mvan" },
    { label: "Akwa", value: "Akwa" },
  ]);
const [data, setdata]=useState([])
const navigation = useNavigation();

/*   Requette de recupperer   les villes */

useEffect(() => {
  // Fonction pour effectuer la requête GET
  const fetchData = async () => {
    try {
      const reponse = await axios.get("http://192.168.43.63:8080/api/ville");
      console.log(reponse.data);
      console.log(reponse.data.message);
      setdata(reponse.data)
      // setDonnees(reponse.data);
    } catch (erreur) {
      
      console.error("Erreur lors de la récupération des données :", erreur);
    }
  };
  fetchData()
})

  /** Recherche dans le tables */
  const rechercherIdParNom = (tableau, nomRecherche) => {
    // Utilisation de la méthode find pour rechercher le premier objet par nom
    const objetTrouve = tableau.find(objet => objet.nom === nomRecherche);
  
    // Retourne l'id si l'objet est trouvé, sinon retourne null
    return objetTrouve ? objetTrouve.id : null;
  };


/*   Requette de recupperer   les sites de depart*/
const [dataSiteDepart, setDataSiteDepart]=useState([])

useEffect(() => {
  // Fonction pour effectuer la requête GET
  const fetchData = async () => {
    try {
      const reponse = await axios.get("http://192.168.43.63:8080/api/site/?ville="+rechercherIdParNom(SelectedVilleDepart));
      console.log(reponse.data);
      console.log(reponse.data.message);
      setDataSiteDepart(reponse.dataSiteDepart)
      // setDonnees(reponse.data);
    } catch (erreur) {
      
      console.error("Erreur lors de la récupération des sites :", erreur);
    }
  };



  
  // Appel de la fonction pour effectuer la requête lors du montage du composant
  fetchData();
},[]); // Le tableau vide en second argument assure que useEffect s'exécute une seule fois lors du montage du composant





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

  useEffect(() => {
    console.log("Date : " + selectedDate);
    console.log("Heure: " + selectedTime);
    console.log("SelectedVilleDepart: " + SelectedVilleDepart);
    console.log("SelectedVilleArrive: " + SelectedVilleArrive);
    console.log("SelectedClasseVoyage: " + SelectedClasseVoyage);
    console.log("SelectedSitesAgencesDepart: " + SelectedSitesAgencesDepart);
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className=" flex    flex-col w-full h-64 bg-white content-center justify-center items-center ">
        <View
          className=" w-full h-64 mb-3  flex-grow flex-shrink  flex-nowrap items-center  justify-start "
          style={{ position: "fixed" }}
        >
          <Image
            source={bus}
            className=" w-full   max-h-64  object-cover  
          
          "
          />

          <View
            className="w-full  h-64 absolute object-cover flex flex-col  
           "
            style={{ backgroundColor: "rgba(0,129,199,0.65)" }}
          >
            <View className=" w-full h-auto flex flex-row text-white text-base whitespace-nowrap shadow-sm justify-around items-center px-16 py-5 rounded-3xl top-5 left-0">
              {/* <Button >Aller-retour</Button> */}
              <Button
                labelStyle={customFont}
                className={
                  focus
                    ? "font-medium m-2  bg-sky-700"
                    : " font-semibold m-2 bg-none text-sky-700"
                }
                style={{ fontSize: 12 }}
                type="feather"
                theme={{
                  fontFamily: FontFamily.North,
                  colors: { primary: "rgba(0,129,199,1)" },
                }}
                mode={focus ? "contained" : "text"}
                buttonColor="rgba(0,129,199,1)"
                onPress={() => {
                  console.log("Pressed");
                  setFocus(focus);
                }}
              >
                Aller-retour
              </Button>
              <Button
                labelStyle={customFont}
                icon={!focus ? "check" : ""}
                className={
                  !focus
                    ? "font-semibold m-2  bg-sky-700"
                    : "font-semibold m-2  bg-white text-sky-700"
                }
                buttonColor="rgba(0,129,199,1)"
                style={{ fontFamily: FontFamily.Laila, fontSize: 12 }}
                theme={{ colors: { primary: "rgba(0,129,199,1)" } }}
                mode={!focus ? "contained" : "elevated"}
                onPress={() => {
                  console.log("Pressed");
                  setFocus(focus);
                }}
              >
                Aller-simple
              </Button>
            </View>
            <View className="flex flex-row max-w-[471px] items-center justify-between gap-5 px-5 my-5 ">
              <View className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <View className="flex flex-row content-center items-center  justify-center">
                  <Text
                    className="text-white text-lg font-light self-center whitespace-nowrap"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    De
                  </Text>
                  <Feather name="chevron-down" size={24} color="white" />
                </View>
                <View className="">
                  <Text
                    className="text-white text-3xl font-bold self-center whitespace-nowrap mt-0"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    {SelectedSitesAgencesDepart}
                  </Text>
                </View>
                <View className="w-100 items-center justify-center">
                  <Text
                    className=" text-white text-lg whitespace-nowrap mt-1"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    {SelectedVilleDepart}
                  </Text>
                </View>
              </View>
              <View
                className="bg-white"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5
                  name="exchange-alt"
                  size={24}
                  color="rgba(0,129,199,1)"
                />
              </View>
              <View className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <View className="flex flex-row content-center items-center  justify-center">
                  <Text
                    className="text-white text-lg  font-light self-center whitespace-nowrap"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    A
                  </Text>
                  <Feather name="chevron-down" size={24} color="white" />
                </View>
                <View className="">
                  <Text
                    className="text-white text-3xl font-bold self-center whitespace-nowrap mt-0"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    {SelectedSitesAgencesArrive}
                  </Text>
                </View>
                <View className="w-100 items-center justify-center">
                  <Text
                    className=" text-white text-lg whitespace-nowrap mt-1"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    {SelectedVilleArrive} 
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Contenu scrollable */}
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            top: "2%",
            height: "full",
            alignItems: "center",
            alignContent: "space-between",
          }}
        >
          <View className="my-1">
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
          </View>

          <>
            <CustomSelect
              options={data}
              onChange={setSelectedVilleDepart}
              placeholder="VilleDepart depart"
            />
           <CustomSelect
              options={data}
              onChange={setSelectedVilleArrive}
              placeholder="Ville  Arrive"
            />
          </>

       
            <CustomSelect
              options={dataSiteDepart} 
              onChange={setSelectedSitesAgencesDepart}
              placeholder="Sites de l'agence Depart"
            />
            
          
          
            <CustomSelect
              options={data}
              onChange={setSelectedClasseVoyage}
              placeholder="Vip / Classique"
            />
         

          {/* </View> */}
          <Button
            labelStyle={customFont3}
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
            onPress={() => {console.log("Pressed"); navigation.navigate("trajet");  } }
          >
            Rechercher
          </Button>
          <View className="h-64"></View>
        </View>
      </ScrollView>
    </ScrollView>
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
