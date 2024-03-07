import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import { ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchBar from "../../components/searchBar";
import { Dimensions } from "react-native";
import ActionSheet from "../../components/ActionSheet";
import MonDropdown from "../../components/select-picker";
const { width, height } = Dimensions.get("window");

export function AgendaSreen() {
  // { route, navigation }) {
  // const { Id, Name } = route.params;
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      className="bg-white"
    >
      {/* <View style={styles.container0} className=" bg-slate-0 "> */}
      <Text>Agenda de voyage</Text>

      <View style={[styles.container, { width, height }]}>
        <Text>Contenu de l'application</Text>
      </View>
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
