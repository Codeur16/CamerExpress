//===========================================================
//             Importations
//===========================================================

import React, { useEffect, useState } from "react";
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
  ToastAndroid,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialIcons,
  Fontisto,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import Couleur from "../../utils/color";
import { FontFamily } from "../../../GlobalStyles";
import { Width, Height } from "../../utils/DimensionScreen";
import { TextInput } from "react-native-paper";
import { TouchButton } from "../../components/TouchableButton";
import url from "../../utils/url";

import { Dialog } from "react-native-simple-dialogs";
//=============================================
//         Ecran
//=============================================

export function ReservationSreen() {
  //============================================
  //           Declaration des constantes
  //============================================
  const [numReservation, setNumReservation] = useState("13b13");
  const [showRservation, setShowReservation] = useState(false);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
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
  ///============================================
  //           Fonction
  //============================================
  const searchReservation = async () => {
    if (index === false) {
      setVisible(true);
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
      {!showRservation ? (
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
                  : ToastAndroid.show(
                      "Veuillez rentrer un nombre de reservation",
                      ToastAndroid.LONG
                    );
              }}
            />
          </View>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {/* Ajoutez le contenu supplémentaire de votre écran ici */}
          <View
            className="flex-1 flex-col justify-center  border border-Black3 rounded-lg pb-4 mt-5"
            style={{ width: Width * 0.9, height: Height * 0.7 }}
          >
            <View
              className="  justify-start  w-full "
              style={{
                height: "10%",
                width: "100%",
                borderBottomWidth: 3,
                borderBottomColor: Couleur.Limeblue8,
                borderStyle: "solid",
              }}
            >
              <Text
                className="text-center ml-5 mt-2"
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  fontSize: Width * 0.06,
                  color: Couleur.Black7,
                }}
              >
                Votre Reservation
              </Text>
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
                  <TouchButton
                    title="Annuler la reservation"
                    color={"red"}
                    onPress={() => {
                      setShowReservation(!showRservation);
                      // navigation.navigate("Paiement");
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      {visible && (
        <Dialog
          visible={visible}
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
});
