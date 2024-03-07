//===========================================================
//             Importations
//===========================================================

import React, { useEffect, useState , useRef} from "react";
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
// npm install @react-navigation/material-top-tabs react-native-tab-view
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import {
  SimpleLineIcons,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { BackHandler } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SheetProvider } from "react-native-actions-sheet";
import ActionSheet from "../../components/ActionSheet";
import {Width, Height} from "../../utils/DimensionScreen"

//===========================================================
//            Fonction
//===========================================================

export function TrajetsScreen() {

  const [ShowAction, setShowAction] = useState(true);
  const bottomSheetRef = useRef();




  return (
    <SafeAreaView style={{ backgroundColor: "#fff", paddingTop: -50 }}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          justifyContent: "flex-start ",
          alignItems: "center",
        }}
      >
        <View
          className=" bg-white border-Black1 border shadow-lg shadow-Black5  rounded flex-col mt-5"
          style={styles.container}
        >
          <View
            className="h-1/2 w-full p-2 flex-row "
            style={{ marginBottom: -20 }}
          >
            <View className="w-1/2 h-full flex-row">
              <View className="h-full w-1/3 justify-between">
                <Text style={styles.text}>12:00</Text>
                <Text style={styles.text}>16:00</Text>
              </View>
              <View className="h-full w-1/3">
                <Image
                  source={require("../../../assets/fromTo.png")}
                  alt="FromTo"
                />
              </View>
              <View className="h-full w-1/3 justify-between">
                <Text style={styles.text} className="">
                  Yaounde
                </Text>
                <Text style={styles.text}>Douala</Text>
              </View>
            </View>
            <View className="w-1/2 h-full items-end">
              <Pressable
                onPress={() => {
                  bottomSheetRef.current.open();
                  setShowAction(true);
                }}
              >
                <AntDesign name="down" size={24} color={Couleur.Black7} />
              </Pressable>
            </View>
          </View>
          <View className="h-auto  p-2 flex-row items-center content-center">
            <View
              className="w-2/3"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Couleur.Black3,
              }}
            ></View>
            <Text className=" color-Limeblue8 pl-2" style={styles.text}>
              Presque Complet
            </Text>
          </View>

          <View className="h-1/2 w-full flex-row" style={{ marginTop: -15 }}>
            <View className="w-1/2 h-auto flex-col items-start ">
              <View
                className="  h-8 border-Black1 border shadow-sm  bg-white shadow-Black5 rounded-2xl mt-2 ml-1 flex-row items-center justify-around"
                style={{ width: "80%" }}
              >
                <FontAwesome5
                  name="bus-alt"
                  size={20}
                  color={Couleur.Limeblue9}
                />
                <View
                  className="w-auto shadow-lg shadow-Black2  rounded"
                  style={{
                    height: "80%",
                    borderLeftWidth: 2,
                    borderLeftColor: Couleur.Black3,
                  }}
                ></View>
                <Text style={styles.text}>Direct</Text>
                <Pressable
                  onPress={() => {
                    setShowAction(true);
                  }}
                >
                  <AntDesign name="down" size={20} color={Couleur.Black4} />
                </Pressable>
              </View>
              <View
                className="  h-8  bg-white mt-1 ml-1 flex-row items-center justify-around"
                style={{ width: "80%" }}
              >
                <Text style={styles.text}>11:00 h</Text>

                <View
                  className="w-auto shadow-lg shadow-Black2  rounded"
                  style={{
                    height: "80%",
                    borderLeftWidth: 2,
                    borderLeftColor: Couleur.Black3,
                  }}
                ></View>

                <AntDesign name="wifi" size={20} color="green" />
                <MaterialIcons
                  name="electrical-services"
                  size={20}
                  color="green"
                />
                {/* <Pressable
                  onPress={() => {
                    Alert.alert("OK");
                  }}
                >
                  <AntDesign name="down" size={20} color={Couleur.Black4} />
                </Pressable> */}
              </View>
            </View>
            <View className="items-end justify-center ">
              <View className="w-1/2 h-auto flex-row justify-end items-center pr-1">
                <Text style={styles.text2} className="text-center ">
                  5000 Fcfa
                </Text>
                <Pressable
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: Couleur.Limeblue9,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                    marginLeft: 5,
                  }}
                  onPress={() => {
                    bottomSheetRef.current.open();
                    setShowAction(true);
                  }}
                >
                  {/* <Ionicons
                    name="arrow-redo-sharp"
                    size={24}
                    color={Couleur.White}
                  /> */}
                  <AntDesign name="right" size={24} color={Couleur.White} />
                </Pressable>
              </View>
              <Text
                style={styles.text2}
                className="text-center justify-end items-center pr-4 color-Limeblue9"
              >
                Generale Voyage
              </Text>
            </View>
          </View>
        </View>

        <ActionSheet
          BottomSheetRef={bottomSheetRef}
          height={Height * 0.7}
          openDuration={600}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// export const TrajetsScreen = () => {
//   // const { villeDepart, villeArrivee, siteAgence } = route.params;
//   //   const [trajets, setTrajets] = useState([]);

//   const navigation = useNavigation();

//   // useEffect(() => {
//   //   const backAction = () => {
//   //     // Naviguer vers l'écran de destination souhaité
//   //     navigation.navigate("HomeRoot");
//   //     return true; // Indiquer que l'action de retour a été gérée
//   //   };

//   //   const backHandler = BackHandler.addEventListener(
//   //     "hardwareBackPress",
//   //     backAction
//   //   );

//   //   // Retirer l'écouteur d'événement lorsque le composant est démonté
//   //   return () => backHandler.remove();
//   // }, [navigation]);

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         style: {
//           backgroundColor: "#00000",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="TabA"
//         component={TabA}
//         options={{
//           tabBarLabel: "Lun 12-02",
//         }}
//       />
//       <Tab.Screen
//         name="TabB"
//         component={TabB}
//         options={{
//           tabBarLabel: "Mar 13-02",
//         }}
//       />
//       <Tab.Screen
//         name="TabC"
//         component={TabC}
//         options={{
//           tabBarLabel: "Mer 14-02",
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 160,
  },
  text: {
    fontSize: 12,
    // fontWeight: "",
    fontFamily: FontFamily.Poppins,
  },
  text2: {
    fontSize: 16,

    // fontWeight: "",
    fontFamily: FontFamily.Poppins,
  },
});
