import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { CustomSelect } from "../../components/select";
import MyDatePicker from "../../components/DatePicker";
import { FontFamily } from "../../../GlobalStyles";
import Svg, { Circle, Rect, Path, ClipPath, Polygon } from "react-native-svg";
import Bus from "../../assets/bus2.png";
import SvgComponent from "../../components/svg";
import { ReservationForm } from "../Reservation/Reservationform";
import Couleur from "../../utils/color";
import Carte from "../../assets/carte1.png";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingScreen from "../loading/loadingScreen";
import { Width, Height } from "../../utils/DimensionScreen";
import Spinner from "react-native-loading-spinner-overlay";
console.log("Largeur de l'écran : ", Width);
console.log("Hauteur de l'écran : ", Height);
import { useRoute } from "@react-navigation/native";

export function AcceuilSreen() {
  const [date, setDate] = useState(null);
  const route = useRoute();
  let enfants = route.params?.enfants;
  let adultes = route.params?.adultes;

  useEffect(() => {
    adultes = route.params?.adultes;
    enfants = route.params?.enfants;
    console.log(
      "===========================Enfants=============================:",
      enfants,
      "=====================================Adultes===========================",
      adultes
    );
  }, [enfants, adultes]);
  const navigation = useNavigation();
  const handleDateSelection = (date) => {
    setDate(date);
    console.log(date);
  };
  // ====================Loading====================
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    // Ici, vous pouvez mettre votre logique de chargement
    // Par exemple, une requête réseau ou un traitement asynchrone.

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000); // Simuler une opération asynchrone pendant 3 secondes
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", paddingTop: -Height * 0.04 }}
    >
      <Spinner
        visible={isLoading}
        textContent={"Chargement en cours..."}
        textStyle={styles.spinnerTextStyle}
        size={80}
        indicatorStyle={"#fff"}
        color="#fff"
        overlayColor="rgba(0,0,0,0.6)"
      />
      <View style={styles.container}>
        {/* <View className=" flex    flex-col w-full h-64 bg-white content-center justify-center items-center "> */}
        <View
          className=" w-full   flex-grow  items-center justify-center"
          style={{ position: "fixed", height: Height * 0.25 }}
        >
          <Image
            source={Bus}
            // className=" w-full   max-h-64 "
            style={{
              // position: "fixed",5
              width: Width * 0.95,
              height: "100%",
              resizeMode: "contain",
              marginTop: 0,
              objectFit: "cover",
              borderRadius: 20,
            }}
          />
        </View>
        {/* <View
        className="w-full  h- absolute object-cover "
        style={{ backgroundColor: "rgba(0,129,199,0.65)", height:"30%" }}
      ></View> */}
        {/* Ajoutez le contenu supplémentaire de votre écran ici */}
        <ScrollView
          className="bg-white"
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            height: "auto",
            width: Width,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReservationForm onClick={setIsLoading} />
          {/* <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View
              className="w-full  rounded-sm"
              style={{
                borderBottomWidth: 3,
                borderBottomColor: Couleur.Black2,
                // marginTop: -80,
              }}
            ></View>
          </View> */}

          <Pressable
            className=" mt-2 flex-1 flex-grow items-center content-start border-t-2 rounded-t-md border-t-Black2 w-full"
            onPress={() => {
              navigation.navigate("Agences");
            }}
          >
            <Text
              className="pt-2 pb-2 m-1 text-xl"
              style={{
                // fontSize: Width * 0.045,
                color: Couleur.Limeblue8,
                fontFamily: FontFamily.Poppins,
                textAlign: "center",
              }}
              numberOfLines={1}
            >
              Decouvrez nos Agences et leurs sites
            </Text>
            {/* <View></View> */}
            <Image
              source={Carte}
              alt="carte"
              style={{
                // position: "fixed",
                width: Width * 0.9,
                height: Height * 0.5,
                resizeMode: "cover",
                marginTop: 0,
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          </Pressable>
          <View className="w-full h-36"></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Couleur.White,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
  },
  message: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.2)",
    fontFamily: FontFamily.RobotoMedium,
    fontSize: 30,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
