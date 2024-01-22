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

import DateTimePicker from "@react-native-community/datetimepicker";
import Form from "../components/formulairePlat";
import * as ImagePicker from "expo-image-picker";
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";
import bus from "../assets/bus.jpg";
import cover from "../assets/cover.png";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Dialog, Portal } from "react-native-paper";
import { Icon, MD3Colors } from "react-native-paper";
import exchange from "../assets/exchange.svg";
import { SvgXml } from "react-native-svg";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { CustomSelect } from "../components/select";
import ModelSelect from "../components/ModelSelect";
import MyDatePicker from "../components/DatePicker";
import MyTimePicker from "../components/TimePicked";
import { Provider } from "react-native-paper";

// export function AnnotationSreen({ route, navigation }) {

export function AcceuilSreen() {
  const [focus, setFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState('');
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
  const [SelectedClasseVoyage, setSelectedClasseVoyage]=useState('')
  const [classeVoyage, setClasseVoyage]=useState( [
    { label: "VIP", value: "VIP" },
    { label: "Classique", value: "Classique" },
  ]);
  const [SelectedAgence, setSelectedAgence]=useState('')
  const [Agence, setAgence]=useState( [
    { label: "Generale Voyage", value: "Generale Voyage" },
    { label: "Finex", value: "Finex" },
  ]);
  const [SelectedSitesAgences, setSelectedSitesAgences]=useState('')
  const [sitesAgence, setSitesAgence]=useState( [
    { label: "Mvan", value: "Mvan" },
    { label: "Akwa", value: "Akwa" },
  ]);

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

useEffect(()=>{
  console.log("Date : "+selectedDate);
  console.log("Heure: "+selectedTime);
console.log("SelectedAgence: "+SelectedAgence);
console.log("SelectedClasseVoyage: "+SelectedClasseVoyage);
console.log("SelectedSitesAgences: "+SelectedSitesAgences);

})

  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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
                    Mvan
                  </Text>
                </View>
                <View className="w-100 items-center justify-center">
                  <Text
                    className=" text-white text-lg whitespace-nowrap mt-1"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    Yaounde, CMR
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
                    Akwa
                  </Text>
                </View>
                <View className="w-100 items-center justify-center">
                  <Text
                    className=" text-white text-lg whitespace-nowrap mt-1"
                    style={{ fontFamily: FontFamily.Laila }}
                  >
                    Douala, CMR
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        </View>
        {/* Contenu scrollable */}
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
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

            {/* <TextInput
              theme={{ colors: { primary: "rgba(0,129,199,1)" } }}
              style={{
                marginTop: 0,
                width: 320,
                height: 50,
                backgroundColor: "white",
              }}
              mode="outlined"
              label="Agence"
              placeholder="Entrer votre agence de voyage"
              right={<TextInput.Affix text="" />}
            /> */}
            {/* <TextInput
              theme={{
                colors: {
                  text: "rgba(0,129,199,1)",
                  primary: "rgba(0,129,199,1)",
                  placeholder: "rgba(0,129,199,1)",
                },
                roundness: 5,
                fonts: {
                  regular: {
                    fontFamily: FontFamily.Salsa,
                  },
                },
              }}
              style={{
                marginTop: 0,
                width: 320,
                height: 50,
                backgroundColor: "white",
              }}
              mode="outlined"
              label="Site d'agence"
              placeholder="Choisir un site"
              right={<TextInput.Affix text="" />}
            /> */}
            {/* <View> */}


            <CustomSelect options={Agence} onChange={setSelectedAgence} placeholder ="Agence" />

            <CustomSelect options={sitesAgence} onChange={setSelectedSitesAgences} placeholder ="Sites de l'agence" />

            <CustomSelect options={classeVoyage} onChange={setSelectedClasseVoyage}  placeholder ="Vip / Classique"/>
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
              onPress={() => console.log("Pressed")}
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
