import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import { ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchBar from "../components/searchBar";
export function SearchSreen() {
  // { route, navigation }) {
  // const { Id, Name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }} className="bg-white">
      {/* <View style={styles.container0} className=" bg-slate-0 "> */}
        <SearchBar />
      {/* </View> */}
    </View>
  );
}
