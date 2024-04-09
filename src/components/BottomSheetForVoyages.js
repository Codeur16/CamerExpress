import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import BottomSheet from "react-native-raw-bottom-sheet";
import Couleur from "../utils/color";
import { Icon } from "react-native-elements";
import { Width, Height } from "../utils/DimensionScreen";
import { FontFamily } from "../../GlobalStyles";
import Svg, { Ellipse, Path, Line, Circle } from "react-native-svg";
import { TouchButton } from "./TouchableButton";
import { useNavigation } from "@react-navigation/core";

export default function ActionSheet({
  BottomSheetRef,
  height,
  openDuration,
  contentSheet,
  trajet,
  index,
  NextStep,
  subtractTime,
  getFormattedTime,
  getFormattedDate,
}) {
  //   const bottomSheetRef = useRef();
  const navigation = useNavigation();

  const [press, setPress] = useState(false);
  return (
    <BottomSheet
      ref={BottomSheetRef}
      closeOnDragDown={true}
      height={Height * 0.8}
      openDuration={350}
      animationType="slide"
      minClosingHeight={0}
      closeDuration={20}
      closeOnPressMask={true}
      customStyles={{
        wrapper: { backgroundColor: Couleur.Black5 },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
        },
        draggableIcon: { backgroundColor: Couleur.Limeblue6 },
      }}
    >
      <View
        style={{
          width: "100%",
          height: "12%",
          borderBottomWidth: 1,
          borderBottomColor: Couleur.Black4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View className="w-full h-2/3 flex flex-row items-center  pt-4 ">
          <Text
            className="  color-Black8 text-left pl-4"
            style={{
              fontFamily: FontFamily.RobotoBold,
              fontSize: Width * 0.05,
              width: "90%",
            }}
          >
            {getFormattedDate(trajet?.dateDepart)}
          </Text>
          <Pressable
            onPress={() => {
              BottomSheetRef.current.close();
            }}
          >
            <AntDesign name="close" size={25} color={Couleur.Black6} />
          </Pressable>
        </View>
        <View>
          <Text
            className="  color-Black4 text-left pl-4"
            style={{
              fontFamily: FontFamily.RobotoBold,
              fontSize: Width * 0.035,
              width: "90%",
            }}
          >
            Durée:{" "}
            {subtractTime(
              getFormattedTime(trajet?.dateArriver),
              getFormattedTime(trajet?.dateDepart)
            )}
          </Text>
        </View>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "45%",
          }}
        >
          <View className="w-1/2 h-full flex-row pl-5 pt-5">
            <View className="h-full w-1/3 justify-between">
              <Text style={styles.text}>
                {getFormattedTime(trajet?.dateDepart)}
              </Text>
              <Text
                className="color-Black6 "
                style={{
                  fontFamily: FontFamily.RobotoMedium,
                  fontSize: Width * 0.039,
                }}
              >
                {subtractTime(
                  getFormattedTime(trajet?.dateArriver),
                  getFormattedTime(trajet?.dateDepart)
                )}
              </Text>
              <Text style={styles.text}>
                {" "}
                {getFormattedTime(trajet?.dateArriver)}
              </Text>
            </View>
            <View className="h-full w-1/4 flex-col items-center justify-center">
              {/* <FontAwesome name="circle-thin" size={14} color="black" />
              <Octicons
                name="dash"
                size={54}
                color="black"
                style={{ transform: [{ rotate: "90deg" }] }}
              />
              <MaterialCommunityIcons
                name="checkbox-blank-circle"
                size={14}
                color="black"
              /> */}
              <Svg
                width="86"
                height="100%"
                viewBox="0 0 86 665"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M43 583L43 83"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <Circle
                  cx="43"
                  cy="53"
                  r="30"
                  fill="white"
                  stroke="black"
                  stroke-width="5"
                />
                <Circle
                  cx="43"
                  cy="613"
                  r="30"
                  fill={Couleur.Black7}
                  stroke="black"
                  stroke-width="5"
                />
              </Svg>
            </View>
            <View className="h-full w-2/3 justify-between ">
              <View className="flex-row">
                <Entypo name="location-pin" size={20} color={Couleur.Black5} />
                <Text style={styles.text} className="">
                  {trajet?.itineraire.villeDepart.nom} {""}
                </Text>
              </View>

              {/* ========================Arrets======================== */}

              {/* <View>
                <View
                  className="  h-8 border-Black1 border shadow-sm  bg-white shadow-Black5 rounded-2xl mt-2 ml-1 flex-row items-center justify-around"
                  style={{ width: "90%" }}
                >
                  <FontAwesome5
                    name="bus-alt"
                    size={20}
                    color={Couleur.Black5}
                  />
                  <View
                    className="w-auto shadow-lg shadow-Black2  rounded"
                    style={{
                      height: "70%",
                      borderLeftWidth: 2,
                      borderLeftColor: Couleur.Black3,
                    }}
                  ></View>
                  <Text
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.04,
                    }}
                  >
                    Bus
                  </Text>
                </View>

                <View
                  className="  flex flex-row mt-4"
                  style={{
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.04,
                      paddingLeft: 5,
                    }}
                  >
                    1 Arret
                  </Text>
                  <Pressable className="ml-4">
                    <AntDesign name="down" size={20} color={Couleur.Black4} />
                  </Pressable>
                </View>
              </View> */}

              <View className="flex-row">
                <Entypo name="location-pin" size={20} color={Couleur.Black5} />
                <Text style={styles.text}>
                  {trajet?.itineraire.villeDestination.nom}
                  {""}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="w-full flex flex-row m-4 pl-4 items-center justify-start">
          <View className="w-1/3 flex flex-row items-center justify-start">
            <AntDesign name="wifi" size={20} color={Couleur.Limeblue6} />
            <Text className="ml-2 text-lg color-Black7" Style={styles.text2}>
              Wifi-gratuit
            </Text>
          </View>
          <View className="w-1/2 flex flex-row">
            <MaterialIcons
              name="electrical-services"
              size={20}
              color={Couleur.Limeblue6}
            />
            <Text className="ml-2 text-lg" Style={styles.text2}>
              Prises electriques
            </Text>
          </View>
        </View>
        <View
          className=" items-center  py-1 bg-Black1"
          style={{ width: "90%", height: "auto", borderRadius: 0 }}
        >
          <Text
            Style={{
              fontFamily: FontFamily.RobotoMedium,
              fontSize: 12,
            }}
            className="text-left  text-lg color-Black7 "
          >
            Veuillez vous assurer d’etre a l’agence 15minutes avant le depart
          </Text>
        </View>
        <View className=" w-11/12 h-auto border-b-0.5 border-b-Black5   my-2"></View>
        <View className="w-full h-auto flex flex-row py-2">
          <View className="w-6/12 flex flex-row items-start pl-5 justify-around">
            <FontAwesome name="user" size={20} color="black" />
            <FontAwesome name="user" size={20} color="black" />
            <FontAwesome name="user" size={20} color="black" />
            <Text
              style={{
                fontFamily: FontFamily.RobotoMedium,
                fontSize: Width * 0.045,
              }}
              className="text-center"
            >
              Presque complet
            </Text>
          </View>
          <View className="w-1/2 flex items-end justify-center pr-4">
            <Text
              style={{
                fontFamily: FontFamily.RobotoBold,
                fontSize: Width * 0.05,
              }}
              className="text-center"
            >
              {trajet?.prixReservation} XAF
            </Text>
          </View>
        </View>
        <View className=" w-full items-center justify-center mb-5 ">
          <TouchButton
            title="Selectionner ce trajet?"
            onPress={() => {
              NextStep();
            }}
          />
        </View>
      </ScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 160,
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
