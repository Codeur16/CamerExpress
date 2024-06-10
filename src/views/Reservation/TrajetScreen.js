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
import { PaimentScreen } from "../paiement";
import ConfirmationScreen from "./confirmationScreen";
import carte from "../../assets/carte3.png";
import momo from "../../assets/momo1.png";
import om from "../../assets/om1.png";
//===========================================================
//            Fonction
//===========================================================

function getFormattedTime(dateDepart) {
  const date = new Date(dateDepart);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function subtractTime(time1, time2) {
  const [hours1, minutes1] = time1.split(":");
  const [hours2, minutes2] = time2.split(":");

  const totalMontantMinutes1 = parseInt(hours1) * 60 + parseInt(minutes1);
  const totalMontantMinutes2 = parseInt(hours2) * 60 + parseInt(minutes2);

  const differenceMinutes = totalMontantMinutes1 - totalMontantMinutes2;

  const hours =
    Math.floor(differenceMinutes / 60)
      .toString()
      .padStart(2, "0") + "h";
  const minutes = (differenceMinutes % 60).toString().padStart(2, "0") + "mn";

  return `${hours}:${minutes}`;
}
function getFormattedDate(dateDepart) {
  const date = new Date(dateDepart);
  const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const day = daysOfWeek[date.getDay()];
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const dayOfMonth = date.getDate().toString().padStart(2, "0");
  return `${day} ${dayOfMonth}-${month}`;
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
//==========================================================================================================
// function Step1({ nextStep }) {
//   const [ShowAction, setShowAction] = useState(true);
//   const bottomSheetRef = useRef();
//   const navigation = useNavigation();
//   const route = useRoute();

//   return (
//     <SafeAreaView style={{ backgroundColor: "#fff", paddingTop: -50 }}>
//       <ScrollView
//         nestedScrollEnabled={true}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           flexDirection: "column",
//           width: "100%",
//           height: "100%",
//           backgroundColor: "white",
//           justifyContent: "flex-start ",
//           alignItems: "center",
//         }}
//       >
//         <View
//           className=" bg-white border-Black1 border shadow-lg shadow-Black5  rounded flex-col mt-5"
//           style={styles.container}
//         >
//           <View
//             className="h-1/2 w-full p-2 flex-row "
//             style={{ marginBottom: -20 }}
//           >
//             <View className="w-1/2 h-full flex-row">
//               <View
//                 className=" w-1/3 justify-between items-center"
//                 style={{ height: "85%" }}
//               >
//                 <Text style={styles.text}>
//                   {getFormattedTime(Trajets[0].dateDepart)}
//                 </Text>
//                 <Text style={styles.text}>
//                   {getFormattedTime(Trajets[0].dateArriver)}
//                 </Text>
//               </View>
//               <View className=" w-auto" style={{ height: "100%" }}>
//                 <Svg
//                   width="10"
//                   height="80%"
//                   viewBox="0 0 86 665"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <Path
//                     d="M43 583L43 83"
//                     stroke="black"
//                     stroke-width="5"
//                     stroke-linecap="round"
//                   />
//                   <Circle
//                     cx="43"
//                     cy="63"
//                     r="60"
//                     fill="white"
//                     stroke="black"
//                     stroke-width="5"
//                   />
//                   <Circle
//                     cx="43"
//                     cy="583"
//                     r="60"
//                     fill={Couleur.Black7}
//                     stroke="black"
//                     stroke-width="15"
//                   />
//                 </Svg>
//               </View>
//               <View
//                 className=" w-2/3 justify-between  items-start pl-2"
//                 style={{ height: "85%" }}
//               >
//                 <Text style={styles.text} className="">
//                   {" "}
//                   {Trajets[0].itineraire.villeDepart.nom}
//                 </Text>
//                 <Text style={styles.text}>
//                   {Trajets[0].itineraire.villeDestination.nom}{" "}
//                 </Text>
//               </View>
//             </View>
//             <View className="w-1/2 h-full items-end">
//               <Pressable
//                 onPress={() => {
//                   bottomSheetRef.current.open();
//                   setShowAction(true);
//                 }}
//               >
//                 <AntDesign name="down" size={24} color={Couleur.Black7} />
//               </Pressable>
//             </View>
//           </View>
//           <View className="h-auto  p-2 flex-row items-center content-center">
//             <View
//               className="w-3/5"
//               style={{
//                 borderBottomWidth: 1,
//                 borderBottomColor: Couleur.Black3,
//               }}
//             ></View>
//             <Text className="w-2/5  color-Limeblue8 pl-1" style={styles.text}>
//               Presque Complet
//             </Text>
//           </View>

//           <View className="h-1/2 w-full flex-row" style={{ marginTop: -15 }}>
//             <View className="w-1/2 h-auto flex-col items-start ">
//               <View
//                 className="  h-8 border-Black1 border shadow-sm  bg-white shadow-Black5 rounded-2xl mt-2 ml-1 flex-row items-center justify-around"
//                 style={{ width: "80%" }}
//               >
//                 <FontAwesome5
//                   name="bus-alt"
//                   size={20}
//                   color={Couleur.Limeblue9}
//                 />
//                 <View
//                   className="w-auto   rounded"
//                   style={{
//                     height: "80%",
//                     borderLeftWidth: 2,
//                     borderLeftColor: Couleur.Black3,
//                   }}
//                 ></View>
//                 <Text style={styles.text}>Direct</Text>
//                 <Pressable
//                   onPress={() => {
//                     setShowAction(true);
//                   }}
//                 >
//                   <AntDesign name="down" size={20} color={Couleur.Black4} />
//                 </Pressable>
//               </View>
//               <View
//                 className="  h-8  bg-white mt-1 ml-1 flex-row items-center justify-around"
//                 style={{ width: "80%" }}
//               >
//                 <Text style={styles.text}>
//                   {getFormattedTime(Trajets[0].dateDepart)}
//                 </Text>

//                 <View
//                   className="w-auto   rounded"
//                   style={{
//                     height: "80%",
//                     borderLeftWidth: 2,
//                     borderLeftColor: Couleur.Black3,
//                   }}
//                 ></View>

//                 <AntDesign name="wifi" size={20} color="green" />
//                 <MaterialIcons
//                   name="electrical-services"
//                   size={20}
//                   color="green"
//                 />
//                 {/* <Pressable
//                   onPress={() => {
//                     Alert.alert("OK");
//                   }}
//                 >
//                   <AntDesign name="down" size={20} color={Couleur.Black4} />
//                 </Pressable> */}
//               </View>
//             </View>
//             <View className="items-end justify-center ">
//               <View className="w-1/2 h-auto flex-row justify-end items-center pr-1">
//                 <Text style={styles.text2} className="text-left ">
//                   {Trajets[0].prixReservation} XAF
//                 </Text>
//                 <Pressable
//                   style={{
//                     width: 40,
//                     height: 40,
//                     borderRadius: 50,
//                     backgroundColor: Couleur.Limeblue9,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginRight: 10,
//                     marginLeft: 5,
//                   }}
//                   onPress={() => {
//                     bottomSheetRef.current.open();
//                     setShowAction(true);
//                   }}
//                 >
//                   {/* <Ionicons
//                     name="arrow-redo-sharp"
//                     size={24}
//                     color={Couleur.White}
//                   /> */}
//                   <AntDesign name="right" size={24} color={Couleur.White} />
//                 </Pressable>
//               </View>
//               <View className=" items-end justify-end w-full pr-5">
//                 <Text style={styles.text2} className="  color-Limeblue9">
//                   {Trajets[0].itineraire.site.agence.nom}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>
//         <ActionSheet
//           BottomSheetRef={bottomSheetRef}
//           height={Height * 0.7}
//           openDuration={600}
//           data={trajets}
//           index={0}
//           NextStep={() => {
//             bottomSheetRef.current.close();
//             nextStep();
//           }}
//           subtractTime={subtractTime}
//           getFormattedDate={getFormattedDate}
//           getFormattedTime={getFormattedTime}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

const TrajetsScreen = () => {
  const navigation = useNavigation();
  // Inside your component
  const route = useRoute();
  const [trajets, setTrajets] = useState(route.params.trajet);
  console.log("Trajet selectionnee :::::" + trajets.id);
  const [prixReservation, setPrixReservation] = useState(
    route.params.prixReservation
  );
  useEffect(() => {
    setPrixReservation(route.params.prixReservation);
    console.log("Prix de Reservationnnnn: " + prixReservation);
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const [totalMontant, settotalMontant] = useState(0);
  console.log("totalMontant = " + route.params.prixReservation);
  const [currentStep, setCurrentStep] = useState(0);

  //==================================DATA RESERVATION=======================
  const [nombrePassager, setNombrePassager] = useState(0);
  const [ListePassager, setListePassager] = useState("");
  const [modePaiement, setModePaiement] = useState("");
  const [classe, setClasse] = useState("");
  const [MontantTotal, setMontantTotal] = useState(0);
  const [ReservationDetail, setReservationDetail] = useState([]);
  const [ReservationPrint, setReservationPrint] = useState({
    id: 7,
    voyage: {
      id: 1,
      itineraire: {
        id: 22,
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
          prixAnnulation: 1000.0,
        },
        villeDepart: {
          id: 6,
          nom: "Yaounde",
        },
        villeDestination: {
          id: 2,
          nom: "Maroua",
        },
        duree: 1,
        prixClassique: 3500.0,
        prixVip: 3500.0,
        createdAt: "2024-04-09T15:36:43",
      },
      bus: {
        id: 1,
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
          prixAnnulation: 1000.0,
        },
        capacite: 70,
        code: "B1",
        classe: "VIP",
      },
      code: "456WEFX",
      dateDepart: "2024-12-04T15:40:10",
    },
    client: null,
    prix: 500.0,
    nom: "nomReservation2",
    code: "R-cwihVyXa",
    classe: "VIP",
    dateReservation: "2024-05-19T16:33:12.863283909",
    places: 1,
    passagers: "[Njiosseu Loic]",
    bagages: "[]",
    scanned: false,
    statut: "",
    alertsms: false,
  });
  // const setReservationPrint =(value)=>{
  //   ReservationPrint=value
  // }
  useEffect(() => {
    setReservationDetail([
      { id: 1, label: "nombrePassager", value: nombrePassager },
      { id: 2, label: "ListePassager", value: ListePassager },
      { id: 3, label: "modePaiement", value: modePaiement },
      { id: 4, label: "MontantTotal", value: MontantTotal },
      { id: 5, label: "classe", value: trajets.bus.classe },
    ]);

    console.log(
      "==================================Resevationnnnnnnnn================================="
    );
    // console.log("Nombre de passager:" + nombrePassager);
    // console.log("Nombre Liste des passagers:" + ListePassager);
    // console.log("Montant total: " + MontantTotal);
    // console.log("Mode de paiement:" + modePaiement);
    // console.log(JSON.stringify(ReservationDetail));
    console.log(
      "============================================================================="
    );
  }, [modePaiement]);

  const [modepaiement, setModePaiements] = useState([
    { id: "OM", value: "Orange Money", image: om },
    { id: "MOMO", value: "Mobile Money", image: momo },
    { id: "CARTE", value: "Carte bancaire", image: carte },
  ]);
  function isModePaiementExist() {
    // const modepaiement = [
    //   { id: "OM", value: "Orange Money", image: om },
    //   { id: "MOMO", value: "Mobile Money", image: momo },
    //   { id: "CARTE", value: "Carte bancaire", image: carte },
    // ];
    modepaiement.map((item) => {
      if (item.value === modePaiement) {
        console.log("Mode:" + JSON.stringify(item));
      }
    });
  }
  const val = isModePaiementExist();
  console.log("Mode:" + val);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        overflow: "scroll",
        // backgroundColor:,
      }}
    >
      <ProgressSteps
        progressBarColor={Couleur.Black1}
        completedStepIconColor={Couleur.Limeblue9}
        activeStepIconColor={Couleur.White}
        // activeStep={0}
        activeStepIconBorderColor={Couleur.Limeblue8}
        activeLabelColor={Couleur.Limeblue9}
        labelColor={Couleur.Black7}
        borderWidth={2}
        borderPadding={0}
        activeStepNumColor={Couleur.Black9}
        completedProgressBarColor={Couleur.Limeblue9}
        completedCheckColor={Couleur.White}
        completedStepNumColor={Couleur.Black9}
        completedLabelColor={Couleur.Limeblue9}
        disabledStepIconColor={Couleur.Black3}
        disabledStepNumColor={Couleur.White}
        disabledStepNumBorderColor={Couleur.Black9}
        activeStep={currentStep}

        // activeStepIconBorderColor={Couleur.Limeblue9}
      >
        <ProgressStep
          removeBtnRow={true}
          onPrevious={() => {
            setCurrentStep(currentStep - 1);
          }}
          onNext={() => {
            return setCurrentStep(currentStep - 1);
          }}
          scrollable={true}
          // nextBtnText={
          //   <AntDesign
          //     name="rightcircle"
          //     size={Width * 0.12}
          //     color={Couleur.Limeblue9}
          //   />
          // }
          // previousBtnText={
          //   <AntDesign
          //     name="leftcircle"
          //     size={Width * 0.12}
          //     color={Couleur.Limeblue9}
          //   />
          // }
          label="Details de voyages"
        >
          <EffectuerReservationScreen
            Trajets={trajets}
            getFormattedTime={getFormattedTime}
            getFormattedDate={getFormattedDate}
            subtractTime={subtractTime}
            NextStep={handleNextStep}
            prevStep={handlePrevStep}
            onTotalChange={setMontantTotal}
            prixReservation={prixReservation}
            setNombrePassager={setNombrePassager}
            setListePassager={setListePassager}
            setModePaiement={setModePaiement}
            setMontantTotal={setMontantTotal}
            modePaiement={modepaiement}
            setClasse={setClasse}
          />
        </ProgressStep>
        <ProgressStep
          onPrevious={() => {
            setCurrentStep(currentStep - 1);
          }}
          scrollable={true}
          label="Paiement"
          removeBtnRow={true}
        >
          <PaimentScreen
            Trajets={trajets}
            MontanTotal={MontantTotal}
            NexStep={handleNextStep}
            modePaiement={modepaiement}
            ReservationDetail={ReservationDetail}
            setReservationPrint={setReservationPrint}
          />
        </ProgressStep>
        <ProgressStep
          removeBtnRow={true}
          onPrevious={() => {
            setCurrentStep(currentStep - 1);
          }}
          scrollable={true}
          label="Confirmation"
          // nextBtnText={
          //   <AntDesign
          //     name="rightcircle"
          //     size={Width * 0.12}
          //     color={Couleur.Limeblue9}
          //   />
          // }
          // previousBtnText={
          //   <View style={{ width: 0.0001, height: 0.0001 }}></View>
          // }
          // finishBtnText={
          //   <Ionicons
          //     name="checkmark-done-circle"
          //     size={Width * 0.12}
          //     color={Couleur.Limeblue9}
          //   />
          // }
        >
          <ConfirmationScreen
            ReservationPrint={ReservationPrint}
            MontanTotal={MontantTotal}
            modePaiement={modepaiement}
            ReservationDetail={ReservationDetail}
          />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

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
  buttonTextStyle: {
    // backgroundColor: Couleur.Limeblue9,
    // color: Couleur.White,
    // fontSize: 16,
    // fontFamily: FontFamily.RobotoBold,
    // width: "auto",
    // height: 30,
    // borderRadius: 5,
    // textAlign: "center",
  },
});

export {
  TrajetsScreen,
  getFormattedTime,
  subtractTime,
  getFormattedDate,
  addTime,
};
