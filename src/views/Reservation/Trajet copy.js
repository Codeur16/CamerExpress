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
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import ActionSheet from "../../components/ActionSheet";
import { Width, Height } from "../../utils/DimensionScreen";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Swiper from "react-native-swiper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from "@react-navigation/native";
import Svg, { Ellipse, Path, Line, Circle } from "react-native-svg";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
const Tab = createMaterialTopTabNavigator();
//===========================================================
//            Fonction
//===========================================================
//
let Trajets = [
  {
    id: 1,
    itineraire: {
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      villeDepart: {
        id: 6,
        nom: "Yaounde",
      },
      villeDestination: {
        id: 1,
        nom: "Douala",
      },
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      capacite: 70,
      code: "B1",
    },
    classe: "SIMPLE",
    code: "V001",
    prixReservation: 4000,
    dateDepart: "2024-12-04T15:40:10",
    dateArriver: "2024-12-04T23:30:00",
  },
  {
    id: 1,
    itineraire: {
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      villeDepart: {
        id: 6,
        nom: "Yaounde",
      },
      villeDestination: {
        id: 1,
        nom: "Douala",
      },
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      capacite: 70,
      code: "B1",
    },
    classe: "SIMPLE",
    code: "V001",
    prixReservation: 4000,
    dateDepart: "2024-12-04T15:40:10",
    dateArriver: "2024-12-04T23:30:00",
  },
  {
    id: 1,
    itineraire: {
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      villeDepart: {
        id: 6,
        nom: "Yaounde",
      },
      villeDestination: {
        id: 1,
        nom: "Douala",
      },
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      capacite: 70,
      code: "B1",
    },
    classe: "SIMPLE",
    code: "V001",
    prixReservation: 4000,
    dateDepart: "2024-12-05T15:40:10",
    dateArriver: "2024-12-04T23:30:00",
  },
  {
    id: 1,
    itineraire: {
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      villeDepart: {
        id: 6,
        nom: "Yaounde",
      },
      villeDestination: {
        id: 1,
        nom: "Douala",
      },
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
        prixReservationSimple: 4000,
        prixReservationVip: 7000,
        prixAnnulation: 1000,
      },
      capacite: 70,
      code: "B1",
    },
    classe: "SIMPLE",
    code: "V001",
    prixReservation: 4000,
    dateDepart: "2024-12-05T15:40:10",
    dateArriver: "2024-12-04T23:30:00",
  },
];

function getFormattedTime(dateDepart) {
  const date = new Date(dateDepart);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
console.log(getFormattedTime(Trajets[0].dateDepart));
function getFormattedDate(dateDepart) {
  const date = new Date(dateDepart);
  const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const day = daysOfWeek[date.getDay()];
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const dayOfMonth = date.getDate().toString().padStart(2, "0");
  return `${day} ${dayOfMonth}-${month}`;
}

console.log(getFormattedDate(Trajets[0].dateDepart));

export function TabA() {
  const [ShowAction, setShowAction] = useState(true);
  const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const route = useRoute();

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
              <View
                className=" w-1/3 justify-between items-center"
                style={{ height: "85%" }}
              >
                <Text style={styles.text}>
                  {getFormattedTime(Trajets[0].dateDepart)}
                </Text>
                <Text style={styles.text}>
                  {getFormattedTime(Trajets[0].dateArriver)}
                </Text>
              </View>
              <View className=" w-auto" style={{ height: "100%" }}>
                <Svg
                  width="10"
                  height="80%"
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
                    cy="63"
                    r="60"
                    fill="white"
                    stroke="black"
                    stroke-width="5"
                  />
                  <Circle
                    cx="43"
                    cy="583"
                    r="60"
                    fill={Couleur.Black7}
                    stroke="black"
                    stroke-width="15"
                  />
                </Svg>
              </View>
              <View
                className=" w-2/3 justify-between  items-start pl-2"
                style={{ height: "85%" }}
              >
                <Text style={styles.text} className="">
                  {" "}
                  {Trajets[0].itineraire.villeDepart.nom}
                </Text>
                <Text style={styles.text}>
                  {Trajets[0].itineraire.villeDestination.nom}{" "}
                </Text>
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
              className="w-3/5"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Couleur.Black3,
              }}
            ></View>
            <Text className="w-2/5  color-Limeblue8 pl-1" style={styles.text}>
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
                  className="w-auto   rounded"
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
                <Text style={styles.text}>
                  {getFormattedTime(Trajets[0].dateDepart)}
                </Text>

                <View
                  className="w-auto   rounded"
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
                <Text style={styles.text2} className="text-left ">
                  {Trajets[0].prixReservation} Fcfa
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
              <View className=" items-end justify-end w-full pr-5">
                <Text style={styles.text2} className="  color-Limeblue9">
                  {Trajets[0].itineraire.site.agence.nom}
                </Text>
              </View>
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

export function TabB() {
  const [ShowAction, setShowAction] = useState(true);
  const bottomSheetRef = useRef();
  const navigation = useNavigation();

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
        <ActionSheet
          BottomSheetRef={bottomSheetRef}
          height={Height * 0.7}
          openDuration={600}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export function TabC() {
  const [ShowAction, setShowAction] = useState(true);
  const bottomSheetRef = useRef();
  const navigation = useNavigation();

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
        <ActionSheet
          BottomSheetRef={bottomSheetRef}
          height={Height * 0.7}
          openDuration={600}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
let TabScreens = [
  { name: "Tab A", component: TabA, tabBarLabel: "Mar 13-02" },
  { name: "Tab B", component: TabB, tabBarLabel: "Mar 13-03" },
  { name: "Tab C", component: TabC, tabBarLabel: "Mar 13-04" },
  { name: "Tab d", component: TabC, tabBarLabel: "Mar 13-05" },
];
const generateTabComponent = (tabName, tabComponents) => {
  const existingTab = tabComponents.find((tab) => tab.name === tabName);

  if (existingTab) {
    const TabComponent = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{tabName}</Text>
        </View>
      );
    };

    existingTab.component = TabComponent;
  } else {
    const TabComponent = ({ rendu }) => {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{tabName}</Text>
        </View>
      );
    };

    tabComponents.push({
      name: tabName,
      component: TabComponent,
      tabBarLabel: tabName,
    });
  }

  // return existingTab ? existingTab.component : TabComponent;
};

export const TrajetsScreen = () => {
  const navigation = useNavigation();
  // Inside your component
  const route = useRoute();
  const [trajets, setTrajets] = useState(route.params.trajets);
  // Trajets = route.params.trajets;
  // Now you can use the paramName variable in your component
  console.log("Trajets Params: " + typeof Trajets);
  let tabComponents = [];
  function searchElement(arr, element) {
    const index = arr.indexOf(element);
    return index !== -1 ? index : false;
  }
  function reach(tab) {
    let result = [];
    let liste = {},
      j;
    for (var i = 0; i < tab.length; i++) {
      const date = getFormattedDate(tab[i].dateDepart);
      j = i;
      while (getFormattedDate(tab[j].dateDepart) === date && j < tab.length) {
        liste.push(tab[j].id);
        j++;
      }
    }
  }
  Trajets.forEach((tab, index) => {
    generateTabComponent(getFormattedDate(tab.dateDepart), tabComponents);
    // TabScreens[index].component = TabComponent;
    // TabScreens[index].tabBarLabel = getFormattedDate(tab.dateDepart);
    // TabScreens[index].name = getFormattedDate(tab.dateDepart);
  });

  console.log("TabScreens: ", TabScreens);
  console.log("tabComponents: ", tabComponents);
  console.table(TabScreens);
  console.table(tabComponents);
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          backgroundColor: "#00000",
          width: "100%",
        },
        tabBarScrollEnabled: true,
        // tabBarIndicatorStyle: {

        //   width: "auto",
        // },
        tabBarStyle: {
          width: "100%",
          overflow: "scroll",
        },
      }}
    >
      <Tab.Screen
        key={index}
        name={getFormattedDate(Trajets[0].dateDepart)}
        component={TabA}
        options={{
          tabBarLabel: getFormattedDate(Trajets[0].dateDepart),
        }}
      />
      {/* ))} */}
    </Tab.Navigator>
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
});
