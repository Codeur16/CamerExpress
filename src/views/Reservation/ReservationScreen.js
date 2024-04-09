//===========================================================
//             Importations
//===========================================================

import React, { useEffect, useState, useRef } from "react";
import {
  // Text,
  Image,
  View,
  Platform,
  Pressable,
  StyleSheet,
  Alert,
  // Text,
  SafeAreaView,
  ScrollView,
  DatePickerAndroid,
  Text,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons,
  Fontisto,
  FontAwesome5,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import Couleur from "../../utils/color";
import { FontFamily } from "../../../GlobalStyles";
import { Width, Height } from "../../utils/DimensionScreen";
import { TextInput } from "react-native-paper";
import { TouchButton } from "../../components/TouchableButton";
import url from "../../utils/url";

import BottomSheet from "react-native-raw-bottom-sheet";
import { Searchbar } from "react-native-paper";
import { Dialog } from "react-native-simple-dialogs";

import { BackHandler } from "react-native";
//=============================================
//         Ecran
//=============================================

export function ReservationSreen() {
  //============================================
  //           Declaration des constantes
  //============================================
  const [numReservation, setNumReservation] = useState("13b13");
  const [showRservation, setShowReservation] = useState(false);
  const [visibleDialogInvalide, setVisibleDialogInvalide] = useState(false);
  const [visibleDialogReconduction, setVisibleDialogReconduction] =
    useState(false);
  const [showListeReservation, setShowListeReservation] = useState(false);
  const [agences, setAgences] = useState([]);
  const [reconduction, setReconduction] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const showDialog = () => setVisibleDialogInvalide(true);
  const hideDialog = () => setVisibleDialogInvalide(false);
  const [reservation, setReservation] = useState([
    {
      numeroReservation: "12b12",
      destination: "Yaounde-Douala",
      date: "16 janvier 2024",
      horaire: "07:00 a 12:00",
      nombreDePlace: "03",
      prix: "12000",
    },
    {
      numeroReservation: "13b13",
      destination: "Yaounde-Douala",
      date: "17 janvier 2024",
      horaire: "07:00 a 12:00",
      nombreDePlace: "01",
      prix: "12000",
    },
  ]);
  const refRBSheet = useRef();
  const showToast = (message) => {
    if (Platform.OS !== "web") {
      const { ToastAndroid } = require("react-native");
      ToastAndroid.show(message, ToastAndroid.LONG);
    } else {
      console.log(message);
    }
  };

  const [selectOptionAnnulation, setSelectOptionAnnul] = useState(null);
  const [showCancelOption, setShowCancelOption] = useState(true);
  const [numRembourssement, setNumRembourssement] = useState(
    "Numero beneficiaire du depot"
  );

  const ButtomSheet = (
    <>
      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        height={Height * 0.4}
        openDuration={350}
        animationType="slide"
        minClosingHeight={0}
        closeDuration={20}
        closeOnPressMask={false}
        customStyles={{
          wrapper: { backgroundColor: Couleur.Black5 },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            borderWidth: 1,
            borderColor: Couleur.Black2,
          },
          draggableIcon: { backgroundColor: Couleur.Limeblue6 },
        }}
      >
        {showCancelOption && (
          <>
            <View
              style={{
                width: "100%",
                height: "25%",
                borderBottomWidth: 2,
                borderBottomColor: Couleur.Black2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View className="w-12/12 h-full flex-1 items-end justify-center  pr-5  ">
                {/* <Text
              className="  color-Black8 text-left pl-4"
              style={{
                fontFamily: FontFamily.RobotoBold,
                fontSize: Width * 0.05,
                width: "90%",
              }}
            >
              Annuler Reservation
            </Text> */}
                <Pressable
                  onPress={() => {
                    refRBSheet.current.close();
                    setSelectOptionAnnul(null);
                  }}
                >
                  <AntDesign name="closecircleo" size={25} color={"red"} />
                </Pressable>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "88%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Pressable
                onPressIn={() => {
                  setSelectOptionAnnul(1);
                }}
                onPress={() => {
                  setShowCancelOption(false);
                }}
                className="w-full flex-row border-b-2 border-b-Black2 pl-5"
                style={{
                  height: "45%",
                  backgroundColor:
                    selectOptionAnnulation === 1
                      ? Couleur.Limeblue
                      : Couleur.White,
                }}
              >
                <View
                  className=" justify-center items-start"
                  style={{ width: "5%" }}
                >
                  {selectOptionAnnulation === 1 ? (
                    <FontAwesome name="dollar" size={24} color="white" />
                  ) : (
                    <FontAwesome name="dollar" size={24} color="black" />
                  )}
                </View>
                <View className=" w-full flex-col justify-center items-star pl-5">
                  <Text
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.042,
                      width: "90%",
                      color:
                        selectOptionAnnulation === 1
                          ? Couleur.White
                          : Couleur.Black8,
                    }}
                  >
                    Cliquez ici si vous voulez annuler votre Reservation{" "}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FontFamily.RobotoItalic,
                      fontSize: Width * 0.032,
                      color:
                        selectOptionAnnulation === 1
                          ? Couleur.White
                          : Couleur.Black8,
                    }}
                  >
                    les frais de votre reservation vous seront retournes
                  </Text>
                </View>
              </Pressable>

              <Pressable
                className="w-full border-b-0.5 flex-row pl-4 pb-4"
                style={{
                  height: "50%",
                  width: "auto",
                  backgroundColor:
                    selectOptionAnnulation === 2
                      ? Couleur.Limeblue
                      : Couleur.White,
                }}
                onPressIn={() => {
                  setSelectOptionAnnul(2);
                }}
                onPress={() => {
                  setVisibleDialogReconduction(true);
                  setSelectOptionAnnul(2);
                }}
              >
                <View className="w-auto justify-center items-start">
                  {selectOptionAnnulation === 2 ? (
                    <MaterialIcons
                      name="published-with-changes"
                      size={24}
                      color="white"
                    />
                  ) : (
                    <MaterialIcons
                      name="published-with-changes"
                      size={24}
                      color="black"
                    />
                  )}
                </View>
                <View className=" flex-col justify-center items-start pl-5 ">
                  <Text
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.042,
                      width: "90%",
                      display: "flex",
                      color:
                        selectOptionAnnulation === 2
                          ? Couleur.White
                          : Couleur.Black8,
                    }}
                  >
                    Cliquez ici si vous voulez Reconduire votre Reservation
                  </Text>
                </View>
              </Pressable>
            </View>
          </>
        )}
        {!showCancelOption && selectOptionAnnulation === 1 && (
          <>
            <View
              style={{
                width: "100%",
                height: showCancelOption ? "25%" : "20%",
                borderBottomWidth: 1,
                borderBottomColor: Couleur.Black2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View className="w-full h-full flex-row  items-center justify-center  pr-3  ">
                <Text
                  className="  color-Black8 text-left pl-4"
                  style={{
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: Width * 0.05,
                    width: "90%",
                  }}
                >
                  Annuler Reservation
                </Text>
                <Pressable
                  onPress={() => {
                    refRBSheet.current.close();
                    setShowCancelOption(true);
                    setSelectOptionAnnul(null);
                  }}
                >
                  <AntDesign name="closecircleo" size={25} color={"red"} />
                </Pressable>
              </View>
            </View>
            <View className="flex flex-1 flex-col w-full h-auto justify-between items-start p-2">
              <View className="w-full  h-12 bg-Black1 border-l-4 border-l-Limeblue7 flex flex-row">
                <View className="w-1/5 h-full p-1 justify-center items-center">
                  <Ionicons name="card" size={24} color="black" />
                </View>
                <View className=" w-full justify-center items-center flex flex-1">
                  <Text
                    className=" w-full text-left "
                    numberOfLines={2}
                    style={{ fontFamily: FontFamily.RobotoMedium }}
                  >
                    Des pemalites de 500 seront retires sur le montant que vous
                    avez deverse
                  </Text>
                </View>
              </View>
              <View className="w-full flex flex-1 justify-center items-center">
                <TextInput
                  className="border-Black8 color-Black text-xl"
                  mode="outlined"
                  label="Telephone"
                  placeholder="Numero beneficiaire du depot"
                  style={{
                    width: Width * 0.85,
                    height: Height / 14,
                    marginHorizontal: "2%",
                    borderRadius: 20,
                    color: Couleur.Black8,
                  }}
                  value={numRembourssement}
                  theme={{
                    colors: {
                      primary: Couleur.Limeblue9,
                    },
                  }}
                  onPressIn={() => {
                    setNumRembourssement(null);
                  }}
                  onChangeText={setNumRembourssement}
                />
              </View>
              <View className="w-full justify-center items-center">
                <TouchButton title={"Valider"} radius={30} />
              </View>
            </View>
          </>
        )}
        {visibleDialogReconduction && selectOptionAnnulation === 2 && (
          <Dialog
            visibleDialogInvalide={visibleDialogReconduction}
            title=""
            onTouchOutside={() => {
              setVisibleDialogReconduction(false);
            }}
            overlayStyle={{
              width: "100%",
              backgroundColor: Couleur.Black3,
            }}
            contentStyle={{ height: "auto" }}
          >
            <View
              className="flex justify-between items-center p-4 "
              style={{
                height: Height * 0.25,
                width: "100%",
                borderBottomEndRadius: 30,
              }}
            >
              <View className="h-1/3">
                <Ionicons name="close" size={44} color="red" />
              </View>
              <Text
                className="h-1/3"
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  fontSize: Width * 0.06,
                  color: Couleur.Black6,
                }}
              >
                Reservation reconduite avec succes
              </Text>
              <Pressable
                onPress={() => {
                  setVisibleDialogReconduction(false);
                  setNumReservation(null);
                  setShowCancelOption(false);
                  setReconduction(numReservation);
                }}
                className="  bg-red-600  w-4/6 h-1/4 justify-center items-center text-white color-white  rounded-3xl "
              >
                <Text
                  className="text-white"
                  style={{
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: Width * 0.05,
                  }}
                >
                  OK
                </Text>
              </Pressable>
            </View>
          </Dialog>
        )}
      </BottomSheet>
    </>
  );
  const findReservationIndex = (numReservation) => {
    for (let i = 0; i < reservation.length; i++) {
      if (reservation[i].numeroReservation === numReservation) {
        return i;
      }
    }
    return false;
  };
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(findReservationIndex(numReservation));
    console.log(numReservation);
    console.log("index:" + index);
    console.log(reservation);
  });
  useEffect(() => {
    const backAction = () => {
      // Naviguer vers l'écran de destination souhaité
      setShowListeReservation(false);
      setShowReservation(true);

      return true; // Indiquer que l'action de retour a été gérée
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    backHandler;
  });

  ///============================================
  //           Fonction
  //============================================
  const searchReservation = async () => {
    if (index === false) {
      setVisibleDialogInvalide(true);
    } else {
      setShowReservation(true);
    }
    try {
      const reponse = await axios.get(url + "/api/reservation");

      setReservation(reponse.data);
    } catch (erreur) {
      console.error("Erreur lors de la récupération des données :", erreur);
    }
  };

  const card = (
    <Pressable
      className="flex justify-between  flex-col border-0.5 border-Black1 rounded-lg bg-white shadow-lg shadow-Black5 mt-5 ml-2 mr-2 pl-3 pt-2 pb-2 "
      style={{ width: Width / 1.1, height: Height / 7 }}
    >
      <View className="w-full h-1/4 flex-row items-center justify-start ">
        <Entypo name="ticket" size={24} color="black" />
        <Text
          style={{ fontFamily: FontFamily.RobotoBold, fontSize: Width * 0.045 }}
        >
          16 Janvier 2024
        </Text>
      </View>
      <View className="flex-col ">
        <Text style={styles.textReserve}>
          -{"\t"} YAOUNDE -{">"} DOUALA
        </Text>
        <Text style={styles.textReserve}>-{"\t"} 21 000 XAF</Text>
        <Text style={styles.textReserve}>-{"\t"} 03 PLACES</Text>
      </View>
    </Pressable>
  );

  //=======================================
  //            RENDU
  //======================================
  return (
    // {/* Contenu scrollable */}
    <ScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: showListeReservation ? "#f1f5f9" : Couleur.White,
        height: "100%",
        width: Width,
      }}
    >
      {!showRservation && !showListeReservation && (
        <View
          className="flex flex-col items-start justify-between mt-10 ml-5"
          style={{
            width: Width * 1,
            // height: Height / 3,
          }}
        >
          <View className="flex flex-row items-start justify-center my-10">
            <Ionicons name="square" size={24} color={Couleur.Limeblue9} />
            <Text
              style={{
                textAlign: "left",
                fontFamily: FontFamily.RobotoBold,
                // fontSize: Width * 0.06,
                color: Couleur.Black7,
              }}
              className=" text-lg"
            >
              Votre numero de reservation
            </Text>
          </View>
          <Text
            style={{
              textAlign: "left",
              fontFamily: FontFamily.RobotoItalic,
              fontSize: Width * 0.045,
              color: Couleur.Black4,
              width: Width * 0.8,
              marginBottom: 40,
            }}
          >
            Entrez le numero de reservation qui vous a ete donne dans le message
            de confirmation
          </Text>

          <TextInput
            className="border-Black8 color-Black text-xl"
            mode="outlined"
            label="Numero de réservation"
            placeholder="Numero de réservation"
            style={{
              width: Width * 0.85,
              height: Height / 14,
              marginHorizontal: "2%",
              borderRadius: 20,
              color: Couleur.Black8,
            }}
            value={numReservation}
            theme={{
              colors: {
                primary: Couleur.Limeblue9,
              },
            }}
            // onPressIn={() => {
            //   setNumReservation(null);
            // }}
            onChangeText={setNumReservation}
          />

          <View
            style={{ width: Width * 0.95 }}
            className="items-start justify-center mt-5"
          >
            <TouchButton
              title="Rechercher"
              onPress={() => {
                numReservation != null
                  ? searchReservation()
                  : showToast("Veuillez rentrer un nombre de reservation");
              }}
            />
          </View>

          <View
            style={{ width: Width * 0.95 }}
            className="items-start justify-center mt-5"
          >
            <TouchButton
              title="Voir la liste des reservations"
              onPress={() => {
                showToast("Vous devez vous enregistrer !!!");
                setShowListeReservation(true);
              }}
              color={Couleur.Black3}
            />
          </View>
        </View>
      )}
      {showRservation && !showListeReservation && (
        <ScrollView contentContainerStyle={styles.container}>
          <View
            className="flex-1 flex-col justify-center  border border-Black3 rounded-lg pb-4 mt-5"
            style={{ width: Width * 0.9, height: Height * 0.7 }}
          >
            <View
              className="  justify-start items-center flex-row w-full "
              style={{
                height: "10%",
                width: "100%",
                borderBottomWidth: 3,
                borderBottomColor: Couleur.Limeblue8,
                borderStyle: "solid",
              }}
            >
              <Text
                className="text-center ml-0  w-auto text-xl"
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  // fontSize: Width * 0.06,
                  color: Couleur.Black7,
                }}
                // numberOfLines={1}
              >
                Votre Reservation (Confirmée)
              </Text>
              <Pressable
                onPress={() => {
                  setShowReservation(false);
                }}
                className=" w-4/12 justify-center items-center"
              >
                <AntDesign name="closecircleo" size={24} color="black" />
              </Pressable>
            </View>
            <View
              className="flex-1 flex-col   justify-start items-center w-full"
              style={{
                height: "90%",
                width: "100%",
              }}
            >
              <View className="flex-row w-11/12 h-1/5 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <Entypo
                    name="location-pin"
                    size={30}
                    color={Couleur.Black7}
                  />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Destination
                  </Text>

                  <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                    {reservation[index].destination}
                  </Text>
                </View>
              </View>
              <View className="flex-row w-11/12 h-1/5 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <Fontisto name="date" size={30} color={Couleur.Black7} />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Date
                  </Text>
                  <Text
                    className="h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.037,
                      color: Couleur.Black7,
                    }}
                  >
                    {reservation[index].date}
                  </Text>
                </View>
              </View>
              <View className="flex-row w-11/12  h-1/5 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <MaterialIcons
                    name="hourglass-full"
                    size={30}
                    color={Couleur.Black7}
                  />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Horaire
                  </Text>

                  <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                    {reservation[index].horaire}
                  </Text>
                </View>
              </View>
              <View className="flex-row w-11/12 h-1/5 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <FontAwesome5
                    name="user-friends"
                    size={30}
                    color={Couleur.Black7}
                  />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Passagers
                  </Text>
                  <Text
                    className="h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.037,
                      color: Couleur.Black7,
                    }}
                  >
                    <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                      {reservation[0].nombreDePlace} Passagers
                    </Text>
                  </Text>
                </View>
              </View>

              <View className="flex-col w-full h-2/6  justify-between items-center ">
                {/* <View className=" flex flex-row  w-full h-1/4 justify-between items-center mt-2 pl-2 pr-2">
                  <Text style={styles.text3}>Total:</Text>
                  <Text style={styles.text3}>{total} XAF</Text>
                </View> */}
                <View className="w-full justify-between items-center">
                  {!reconduction ? (
                    <TouchButton
                      title="Annuler la reservation"
                      color={"red"}
                      onPress={() => {
                        // setShowReservation(!showRservation);
                        refRBSheet.current.open();
                        // navigation.navigate("Paiement");
                      }}
                    />
                  ) : (
                    <></>
                  )}
                  {ButtomSheet}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      {visibleDialogInvalide && !showListeReservation && (
        <Dialog
          visibleDialogInvalide={visibleDialogInvalide}
          title=""
          onTouchOutside={() => hideDialog()}
          overlayStyle={{
            width: "100%",
            backgroundColor: Couleur.Black3,
          }}
          contentStyle={{ height: "auto" }}
        >
          <View
            className="flex justify-between items-center p-4 "
            style={{
              height: Height * 0.25,
              width: "100%",
              borderBottomEndRadius: 30,
            }}
          >
            <View className="h-1/3">
              <Ionicons name="close" size={44} color="red" />
            </View>
            <Text
              className="h-1/3"
              style={{
                fontFamily: FontFamily.RobotoBold,
                fontSize: Width * 0.06,
                color: Couleur.Black6,
              }}
            >
              Reservation invalide
            </Text>
            <Pressable
              onPress={() => {
                hideDialog();
                setNumReservation("");
              }}
              className="  bg-red-600  w-4/6 h-1/4 justify-center items-center text-white color-white  rounded-3xl "
            >
              <Text
                className="text-white"
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  fontSize: Width * 0.05,
                }}
              >
                OK
              </Text>
            </Pressable>
          </View>
        </Dialog>
      )}
      {showListeReservation && (
        <ScrollView contentContainerStyle={styles.container}>
          <View
            className="  justify-center items-center flex-row w-full bg-slate-100 "
            style={{
              height: "10%",
              width: Width * 1,
              marginTop: 5,
              borderBottomWidth: 3,
              borderBottomColor: Couleur.Limeblue8,
              borderStyle: "solid",
              marginBottom: 10,
            }}
          >
            <Text
              className="text-center w-3/5"
              style={{
                fontFamily: FontFamily.RobotoBold,
                fontSize: Width * 0.06,
                color: Couleur.Black7,
              }}
            >
              Vos Reservation
            </Text>
            <Pressable
              onPress={() => {
                setShowListeReservation(false);
              }}
              className=" w-1/6 justify-center items-end"
            >
              <AntDesign name="closecircleo" size={24} color="black" />
            </Pressable>
          </View>
          <View
            style={{ width: Width * 0.9, marginTop: 10 }}
            className="bg-slate-100"
          >
            <Searchbar
              placeholder="Recharcher une agence"
              inputStyle={{
                color: Couleur.Black9,
                fontFamily: FontFamily.RobotoItalic,
              }}
              onChangeText={setSearchQuery}
              value={searchQuery}
              // selectionColor={"#fff"}
              underlineColorAndroid={"rgba(0, 0, 0, 0.05)"}
              // traileringRippleColor={"#fff"}
              style={{ backgroundColor: "#fff" }}
              className="shadow-inner-lg shadow-Black9 border border-Black3"
            />
          </View>

          <View className="flex flex-col flex-wrap justify-center items-center bg-slate-100 ">
            {card}
            {card}
            {card}
            {card}
            <View style={{ height: Height * 0.1 }}></View>
          </View>
        </ScrollView>
      )}
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
  text1: {
    fontFamily: FontFamily.RobotoBold,
    fontSize: Width * 0.05,
    color: Couleur.Black7,
    textAlign: "center",
  },
  text3: {
    fontFamily: FontFamily.RobotoBold,
    fontSize: Width * 0.05,
    color: Couleur.Black7,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    width: Width,
    height: "auto",
    // marginBottom: Height * 0.2,
  },
  textReserve: {
    fontFamily: FontFamily.RobotoMedium,
    fontSize: Width * 0.04,
  },
  text: {
    fontSize: Width * 0.045,
    // fontWeight: "",
    fontFamily: FontFamily.RobotoBold,
  },
  text2: {
    textAlign: "center",
    // fontWeight: "",
    fontFamily: FontFamily.RobotoMedium,
    padding: 2,
  },
});
