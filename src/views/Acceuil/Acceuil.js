import React, { useState } from "react";
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

import { Width, Height } from "../../utils/DimensionScreen";

console.log("Largeur de l'écran : ", Width);
console.log("Hauteur de l'écran : ", Height);

export function AcceuilSreen() {
  const [date, setDate] = useState(null);
  const navigation = useNavigation();
  const handleDateSelection = (date) => {
    setDate(date);
    console.log(date);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: -20 }}>
      <View style={styles.container}>
        {/* <View className=" flex    flex-col w-full h-64 bg-white content-center justify-center items-center "> */}
        <View
          className=" w-full min-h-64  flex-grow  items-center"
          style={{ position: "fixed" }}
        >
          <Image
            source={Bus}
            // className=" w-full   max-h-64 "
            style={{
              position: "fixed",
              width: "97%",
              minHeight: 200,
              height: "30%",
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
          contentContainerStyle={{ height: "auto" }}
        >
          <ReservationForm />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View
              className="w-full h-4 shadow-lg  shadow-Black5  rounded-sm"
              style={{
                borderBottomWidth: 3,
                borderBottomColor: Couleur.Black2,
                marginTop: -50,
              }}
            ></View>
          </View>

          <Pressable
            className="flex-1 flex-grow items-center content-start"
            onPress={() => {
              navigation.navigate("Agences");
            }}
          >
            <Text
              className="mt-5 pb-5 m-1"
              style={{
                fontSize: Width ** 0.545,
                color: Couleur.Limeblue8,
                fontFamily: FontFamily.Poppins,
                borderBottomWidth: 5,
                borderBottomColor: Couleur.Black2,
                textAlign:'center'
              }}
            >
              Decouvrez nos Agences et leurs sites
            </Text>
            {/* <View></View> */}
            <Image
              source={Carte}
              alt="carte"
              style={{
                // position: "fixed",
                width: Width*0.9,
                height: Height*0.5,
               resizeMode:"cover",
                marginTop: 0,
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          </Pressable>
          <View className="w-full h-80"></View>
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
    fontWeight: "medium",
    color: "rgba(0, 0, 0, 0.2)",
    fontFamily: FontFamily.Poppins,
    fontSize: 30,
  },
});
