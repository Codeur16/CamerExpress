import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import { FontFamily } from "../../GlobalStyles";
import color from "../utils/color";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { Height, Width } from "../utils/DimensionScreen";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchButton } from "../components/TouchableButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import om from "../assets/om1.png";
import momo from "../assets/momo1.png";
import carte from "../assets/carte3.png";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import { Toast } from "native-base";

let mode = AsyncStorage.getItem("modePaiement");
const showToast = (message) => {
  if (Platform.OS === "android") {
    const { ToastAndroid } = require("react-native");
    ToastAndroid.show(message, ToastAndroid.LONG);
  } else {
    console.log(message);
  }
};

// let reservationPrint = {
//   id: 7,
//   voyage: {
//     id: 1,
//     itineraire: {
//       id: 22,
//       site: {
//         id: 1,
//         agence: {
//           id: 3,
//           nom: "General",
//         },
//         ville: {
//           id: 6,
//           nom: "Yaounde",
//         },
//         quartier: "Mvan",
//         prixAnnulation: 1000.0,
//       },
//       villeDepart: {
//         id: 6,
//         nom: "Yaounde",
//       },
//       villeDestination: {
//         id: 2,
//         nom: "Maroua",
//       },
//       duree: 1,
//       prixClassique: 3500.0,
//       prixVip: 3500.0,
//       createdAt: "2024-04-09T15:36:43",
//     },
//     bus: {
//       id: 1,
//       site: {
//         id: 1,
//         agence: {
//           id: 3,
//           nom: "General",
//         },
//         ville: {
//           id: 6,
//           nom: "Yaounde",
//         },
//         quartier: "Mvan",
//         prixAnnulation: 1000.0,
//       },
//       capacite: 70,
//       code: "B1",
//       classe: "VIP",
//     },
//     code: "456WEFX",
//     dateDepart: "2024-12-04T15:40:10",
//   },
//   client: null,
//   prix: 500.0,
//   nom: "nomReservation2",
//   code: "R-cwihVyXa",
//   classe: "VIP",
//   dateReservation: "2024-05-19T16:33:12.863283909",
//   places: 1,
//   passagers: "[]",
//   bagages: "[]",
//   scanned: false,
//   statut: "",
//   alertsms: false,
// };
export const PaimentScreen = ({
  MontanTotal,
  NexStep,
  modePaiement,
  ReservationDetail,
  setReservationPrint,
}) => {
  "=====================send reservation========================";
  // useEffect(() => {
  //   setReservationPrint(reservationPrint);
  // }, []);
  const [isLoading, setisLoading] = useState(false);
  const [infoReservation, setInfoReservation] = useState([]);
  const handleSendReservation = () => {
    NexStep();
    // setisLoading(true);
    const data = {
      reservation: {
        voyage: {
          id: 2,
        },
        client: null,
        prix: 500,
        nom: "nomReservation",
        classe: "vip",
        dateReservation: "",
        places: 1,
        passagers: "[]",
        bagages: "[]",
        isAlertsms: false,
        statut: "",
      },
      bons: [],
    };
    console.log(data);

    axios
      .post(url + "/api/reservation/create", {
        reservation: {
          voyage: {
            id: 2,
          },
          client: null,
          prix: 500,
          nom: "nomReservation",
          classe: "vip",
          dateReservation: "",
          places: 1,
          passagers: "[]",
          bagages: "[]",
          isAlertsms: false,
          statut: "",
        },
        bons: [],
      })
      .then((res) => {
        console.log(
          "\n\t\t==================================== ReponseReservation ===============================\n\n"
        );
        console.log(JSON.stringify(res.data));
        console.log(
          "\n\t\t=======================================================================================\n"
        );
        //setReservationPrint(res.data);
        // =========================== ALLer a l'ecrant de confirmation =================================
        NexStep();
      })
      .catch((err) => {
        // setReservationPrint(reservationPrint);
        NexStep();
        console.error("Erreur ! \n veillez reessayer");
        console.error(err);
        // navigation.navigate("Voyages", { trajets: Trajets });
        // isLoading();
        // console.log(typeof Trajets);
        // setisLoading(false);
        // ToastAndroid.show(
        //   "Erreur lors de l'enregistrement des donnees!!!",
        //   ToastAndroid.SHORT
        // );
      });
  };

  console.log("=====================Mode de paiement========================");
  console.log(JSON.stringify(modePaiement));
  console.log("========================================================");
  let inputLabel = "Numero du payeur";

  const getImageMode = () => {
    if (ReservationDetail[2].value === "Mobile Money") {
      return momo;
    } else if (ReservationDetail[2].value === "Orange Money") {
      return om;
    } else if (ReservationDetail[2].value === "Carte bancaire") {
      inputLabel = "Numero de la carte bancaire";
      return carte;
    }
  };
  // const setLabelValue = () => {
  //   if (ReservationDetail[2].value === "Carte bancaire") {
  //     setLabel("Numero de la carte bancaire");
  //   } else {
  //     setLabel("Numero du payeur");
  //   }
  // };
  // setLabelValue();
  getImageMode();
  const navigation = useNavigation();
  // useEffect(() => {
  //   // Naviguer automatiquement vers Ecran2 après un délai de 2 secondes (2000 ms)
  //   const timer = setTimeout(() => {
  //     showTrans ? NexStep() : null;
  //   }, 6000);

  //   // N'oubliez pas de nettoyer le timer pour éviter les fuites de mémoire
  //   return () => clearTimeout(timer);
  // });

  useEffect(() => {
    const backAction = () => {
      // Naviguer vers l'écran de destination souhaité
      navigation.goBack();
      return true; // Indiquer que l'action de retour a été gérée
    };
    console.log("Mode" + JSON.stringify(mode));
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Retirer l'écouteur d'événement lorsque le composant est démonté
    return () => backHandler.remove();
  }, [navigation]);
  const [total, setTotal] = useState(JSON.stringify(MontanTotal));
  const [numero, setNumero] = useState(null);
  const [showTrans, setShowTrans] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Spinner
        visible={isLoading}
        textContent={"Chargement en cours..."}
        textStyle={styles.spinnerTextStyle}
        size={80}
        indicatorStyle={"#fff"}
        color="#fff"
        overlayColor="rgba(0,0,0,0.6)"
      />
      {!showTrans && (
        <View className="w-full justify-center items-center mt-2">
          {/* <Text>Informatin de paiement</Text> */}
          <View className="mt-5 mb-5 w-full flex flex-row rounded-lg justify-between items-center">
            <Image
              source={getImageMode()}
              style={{ width: 60, height: 60 }}
              className="rounded-lg"
            />
            <Text
              className="p-0"
              style={{
                fontFamily: FontFamily.RobotoBold,
                fontSize: Width * 0.055,
                color: Couleur.Limeblue9,
              }}
            >
              Paiement par {ReservationDetail[2].value}
            </Text>
          </View>
          <View
            className="flex w-full flex flex-row   justify-start items-start bg-Black1  border-l-8 border-l-Limeblue9"
            style={{ height: Height * 0.08 }}
          >
            <View className="justify-center items-center w-auto h-full p-1">
              <FontAwesome name="credit-card-alt" size={18} color="black" />
            </View>
            <Text
              className="flex flex-wrap justify-center items-center w-11/12 h-full text-xl  text-Black9"
              style={{
                fontFamily: FontFamily.RobotoMedium,
                fontSize: Width * 0.045,
                paddingLeft: 5,
              }}
            >
              Entrez vos informations ici pour pour pouvoir proceder au paiement
              !!!
            </Text>
          </View>

          <View className="mt-5">
            <TextInput
              disabled
              className="border-Black8 color-Black text-xl"
              mode="outlined"
              label="Montant (Fcfa)"
              style={{
                width: Width * 0.9,
                height: Height / 14,
                marginHorizontal: "2%",
                borderRadius: 20,
                color: Couleur.Black8,
              }}
              value={total + "\tFCFA"}
              theme={{
                colors: {
                  primary: Couleur.Limeblue9,
                },
              }}
            />
          </View>
          <View className="mt-10 mb-10 flex flex-row">
            <TextInput
              // className="border-Black8 color-Black text-xl"
              mode="outlined"
              label={inputLabel}
              style={{
                width: Width * 0.9,
                height: Height / 14,
                marginHorizontal: "2%",
                borderRadius: 20,
                color: Couleur.Black8,
              }}
              value={numero}
              onChangeText={(text) => setNumero(text)}
              keyboardType="numeric"
              theme={{
                colors: {
                  primary: Couleur.Limeblue9,
                },
              }}
              right={<TextInput.Icon name="eye" />}
            />
          </View>
          <TouchButton
            title={"Payer"}
            onPress={() => {
              handleSendReservation();
              numero === null
                ? showToast("Veuillez saisir le numéro de votre carte.")
                : setShowTrans(false);
            }}
          />
          {/* Ajoutez le contenu supplémentaire de votre écran ici */}
        </View>
      )}
      {showTrans && (
        <View className="flex-1 justify-start items-center h-64">
          <Text style={styles.message}>Votre transaction a ete initie!</Text>
          <Text style={styles.message}>
            Vous allez recevoir une demande de paiement sur votre telephone
          </Text>
          <Text className="bg-Limeblue3" style={styles.message}>
            A defaut tapez le *126#
          </Text>
          <View className="w-64 justify-center items-center mt-10">
            <TouchButton
              title={"Annuler"}
              onPress={() => {
                setShowTrans(false);
              }}
              color={"red"}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: Height,
    marginTop: Width * 0.0,
  },
  message: {
    fontSize: 16,
    color: color.Black6,
    fontFamily: FontFamily.RobotoBold,
    fontSize: 20,
    margin: 10,
  },
});
