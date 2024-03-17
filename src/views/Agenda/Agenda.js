import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { TextInput } from "react-native-paper";
import DialogBox from "../Reservation/dialog";
import { Pressable } from "react-native";
import { Dialog } from "react-native-simple-dialogs";
import { Ionicons } from "@expo/vector-icons";
import { FontFamily } from "../../../GlobalStyles";
import { Height, Width } from "../../utils/DimensionScreen";
import Couleur from "../../utils/color";
export function AgendaSreen() {
  // { route, navigation }) {
  // const { Id, Name } = route.params;
  const [visible, setVisible] = useState(true);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
