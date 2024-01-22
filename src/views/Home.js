import React from "react";
import {
  Platform,
  StyleSheet,
  Button,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontFamily } from "../../GlobalStyles";
import Navbar from "../components/Navbar";
import SearchBar from "../components/searchBar";
import AutoScrollImageSlider from "../components/AutoSrool";
import { useNavigation } from "@react-navigation/core";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { AnnotationSreen } from "./Acceuil";

// function d'un autre ecran de navigation

export function HomeSreen({ navigation }) {
  // on utilise la fonction useEffect pour charger le composant une seule fois au chargement du component

  return (
    <View style={styles.container} className="bg-white">
      <View style={styles.container0} className=" bg-slate-0 ">
        <SearchBar />
      </View>
      <View style={styles.container1}>
        <View
          style={{
            // backgroundColor: "rgba(0, 0, 0, 0.3)" ,
            backgroundColor: "rgba(41, 199, 82, 0.3)",
          }}
          className=" absolute w-full h-full z-10"
        ></View>
        <AutoScrollImageSlider />
      </View>
      <View
        style={styles.container2}
        className=" content-center items-center  "
      >
        <Pressable
          style={styles.container00}
          className="w-80 h-14 my-4 "
          onPress={() => {
            navigation.navigate("Annotation");
          }}
        >
          <View style={styles.shadow} className="bg-white ">
            <AntDesign name="form" size={24} color="#29c752" />
          </View>
          <Text
            style={{
              fontFamily: FontFamily.Salsa,
              color: "rgba(0, 0, 0, 0.5)",
            }}
            className=" mx-10 color-default font-medium  text-xl "
          >
            Start Annotation
          </Text>
          <Ionicons name="md-arrow-redo-sharp" size={30} color="#29C752" />
        </Pressable>
        <Pressable
          style={styles.container00}
          className="w-80 h-14 m-1 "
          onPress={() => {
            navigation.navigate("Recommendation");
          }}
        >
          <View style={styles.shadow} className="bg-white ">
            <Ionicons name="fast-food-sharp" size={24} color="#29c752" />
          </View>
          <Text
            style={{
              fontFamily: FontFamily.Salsa,
              color: "rgba(0, 0, 0, 0.5)",
            }}
            className=" mx-3 color-default font-medium  text-xl "
          >
            Show recommendations
          </Text>
          <Ionicons name="md-arrow-redo-sharp" size={30} color="#29C752" />
        </Pressable>
      </View>
      <View style={styles.container3}>
        {/* <Navbar navigation={navigation} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  container00: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, // Pour Android
    justifyContent: "space-around",
    alignItems: "center",
    ...Platform.select({
      web: {
        backgroundColor: "white",
        // width:"20%",
        height: 50,
        margin: 10,
      },
    }),
  },

  container: {
    display: "block",
    height: "100%",
    width: "100%",

    // ...Platform.select({
    //   web: {
    //     backgroundColor: 'lightblue',
    //   }})

    // justifyContent:'center',
    // alignItem:'center'
  },
  container0: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    position: "absolute",
  },
  container1: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItem: "center",
    top: 67,
  },
  container2: {
    width: "100%",
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    //   alignItem:'center',
  },
  container3: {
    display: "flex",
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
    ...Platform.select({
      web: {
        width: "auto",
      },
    }),

    // alignItem: "flex-end",
  },
});
