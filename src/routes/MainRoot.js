import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingSreen,  } from "../views/landingScreen";
import { LogoTitle } from "../components/logoTitle";
import { FontFamily } from "../../GlobalStyles";
import { HomeRoot } from "./HomeRoot";
import { AuthRoot } from "./AuthRoot";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { NotificationScreen } from "../views/Notification";
import { AgenceScreen } from "../views/index"
import {TrajetsScreen } from "../views/Reservation/Trajet"
import { useNavigation } from "@react-navigation/native";
import Couleur from "../utils/color";

// import DropdownMenu from "../components/DropdwonMenu";
const Stack = createNativeStackNavigator();

export default function MainRoot() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        unmountOnBlur: false,
        headerTitleStyle: {
          fontFamily: FontFamily.Salsa,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#29C752",
        },
        headerTintColor: "#ffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarOptions: {
          style: {
            backgroundColor: "#ffff", // Remplacez 'votreCouleur' par la couleur de votre choix
          },
        },
      }}
    >
      
      {/* <Stack.Screen
        name="Landing"
        component={LandingSreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="AuthRoot"
        component={AuthRoot}
        options={{
          title: "GoodFood",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#29C752",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: FontFamily.Salsa,
            fontSize: 25,
            fontWeight: "200",
          },
          headerLeft: (props) => <LogoTitle {...props} />,
          // headerRight: () => (
          //   <View
          //     style={{
          //       flexDirection: "row",
          //       alignItems: "center",
          //       marginRight: 10,
          //     }}
          //   >
          //     <TouchableOpacity
          //       onPress={() => {
          //         navigation.navigate("Notification")
          //       }}
          //     >
          //       <Ionicons
          //         name="notifications"
          //         size={24}
          //         color="#fff"
          //         style={{ marginRight: 10 }}
          //       />
          //     </TouchableOpacity>
            
          //   </View>
          // ),
        }}
      /> */}
      <Stack.Screen
        name="HomeRoot"
        component={HomeRoot}
        options={{
          headerShown: false,
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Couleur.Limeblue9,
            // width: Dimensions.get('window').width ,
            height: 12,
          },
          headerTintColor: Couleur.White,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            // headerLeft: (props) => <LogoTitle {...props} />,
            // headerRight: () => (
            //   <View
            //     style={{
            //       flexDirection: "row", // headerLeft: (props) => <LogoTitle {...props} />,
            // headerRight: () => (
            //   <View
            //     style={{
            //       flexDirection: "row",
            //       alignItems: "center",
            //       marginRight: 10,
            //     }}
            //   > // headerLeft: (props) => <LogoTitle {...props} />,
            // headerRight: () => (
            //   <View
            //     style={{
            //       flexDirection: "row",
            //       alignItems: "center",
            //       marginRight: 10,
            //     }}
            //   >
            //     <TouchableOpacity
            //       onPress={() => {
            //         navigation.navigate("Notification");
            //       }}
            //     >
            //       <Ionicons
            //         name="notifications"
            //         size={24}
            //         color="#fff"
            //         style={{ marginRight: 10 }}
            //       />
            //     </TouchableOpacity>
            //   </View>
            // ),
            //     <TouchableOpacity
            //       onPress={() => {
            //         navigation.navigate("Notification");
            //       }}
            //     >
            //       <Ionicons
            //         name="notifications"
            //         size={24}
            //         color="#fff"
            //         style={{ marginRight: 10 }}
            //       />
            //     </TouchableOpacity>
            //   </View>
            // ),
            //       alignItems: "center",
            //       marginRight: 10,
            //     }}
            //   >
            //     <TouchableOpacity
            //       onPress={() => {
            //         navigation.navigate("Notification");
            //       }}
            //     >
            //       <Ionicons
            //         name="notifications"
            //         size={24}
            //         color="#fff"
            //         style={{ marginRight: 10 }}
            //       />
            //     </TouchableOpacity>
            //   </View>
            // ),
            fontFamily: FontFamily.Poppins,
            fontSize: 20,
            fontWeight: "500",
          },
          // headerLeft: (props) => <LogoTitle {...props} />,
          // headerRight: () => (
          //   <View
          //     style={{
          //       flexDirection: "row",
          //       alignItems: "center",
          //       marginRight: 10,
          //     }}
          //   >
          //     <TouchableOpacity
          //       onPress={() => {
          //         navigation.navigate("Notification");
          //       }}
          //     >
          //       <Ionicons
          //         name="notifications"
          //         size={24}
          //         color="#fff"
          //         style={{ marginRight: 10 }}
          //       />
          //     </TouchableOpacity>
          //   </View>
          // ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: true,
          title: "Notification",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Couleur.Limeblue9,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: FontFamily.Poppins,
            fontSize: 18,
            fontWeight: "600",
          },
        }}
      />
      <Stack.Screen
        name="Agences"
        component={AgenceScreen}
        options={{
          headerShown: true,
          title: "Agences",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Couleur.Limeblue9,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: FontFamily.Poppins,
            fontSize: 18,
            fontWeight: "600",
          },
        }}
      />
      <Stack.Screen
        name="trajet"
        component={TrajetsScreen}
        options={{
          headerShown: true,
          title: "Trajets disponibles",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Couleur.Limeblue9,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: FontFamily.Poppins,
            fontSize: 18,
            fontWeight: "600",
          },
          // headerLeft: (props) => <LogoTitle {...props} />,

          // headerRight: () => (
          //   <View
          //     style={{
          //       flexDirection: "row",
          //       alignItems: "center",
          //       marginRight: 10,
          //     }}
          //   >
          //     <TouchableOpacity
          //       onPress={() => {
          //         navigation.navigate("Notification");
          //       }}
          //     >
          //       <Ionicons
          //         name="notifications"
          //         size={24}
          //         color={Couleur.Black4}
          //         style={{ marginRight: 10 }}
          //       />
          //     </TouchableOpacity>
          //   </View>
          // ),
        }}
      />
    </Stack.Navigator>
  );
}
