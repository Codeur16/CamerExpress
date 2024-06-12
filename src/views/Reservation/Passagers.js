import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-paper";
import Couleur from "../../utils/color";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import { FontFamily } from "../../../GlobalStyles";
import axios, { AxiosError } from "axios";
import Dropdown from "../../components/select-picker";
import { Width, Height } from "../../utils/DimensionScreen";
import { TouchButton } from "../../components/TouchableButton";
import url from "../../utils/url";
import { RadioButton } from "react-native-paper";
// code une composant react native a l'aide de react native paper qui permettra de d'ajouter le nombre de passager adultes et le nombres de passager enfant
export const Passagers = () => {
  const navigation = useNavigation();
  const [adultes, setAdultes] = useState(0);
  const [enfants, setEnfants] = useState(0);

  const incrementAdultes = () => {
    setAdultes(adultes + 1);
  };

  const decrementAdultes = () => {
    if (adultes > 0) {
      setAdultes(adultes - 1);
    }
  };

  const incrementEnfants = () => {
    setEnfants(enfants + 1);
  };

  const decrementEnfants = () => {
    if (enfants > 0) {
      setEnfants(enfants - 1);
    }
  };

  const goBackWithParams = () => {
    navigation.navigate("HomeRoot", { enfants: enfants, adultes: adultes });
  //  navigation.goBack();
  };

  return (
    <View className="items-center justify-center flex flex-col w-full h-auto py-10 ">
      <Text>Nombre de passagers adultes: {adultes}</Text>
      <View
        style={{
          backgroundColor: "#FFF",
          fontSize: 12,
          width: Width * 0.9,
          height: 45,
          borderRadius: 5,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          borderStyle: "solid",
          borderWidth: 0.5,
          borderColor: Couleur.Black1,
          elevation: 1,
          paddingLeft: 10,
          marginVertical: 10,
          flexDirection: "row",
        }}
      >
        <Button title="  +  " onPress={incrementAdultes} />
        <Text> {adultes}</Text>
        <Button title="  -  " onPress={decrementAdultes} />
      </View>
      <Text>Nombre de passagers enfants: {enfants}</Text>
      <View
        style={{
          backgroundColor: Couleur.White,
          fontSize: 12,
          paddingVertical: 10,
          width: Width * 0.9,
          height: "auto",
          borderRadius: 5,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          borderStyle: "solid",
          borderWidth: 0.5,
          borderColor: Couleur.Black1,
          elevation: 1,
          marginVertical: 10,
        }}
      >
        <Button title="  +  " onPress={incrementEnfants} />
        <Text> {enfants}</Text>
        <Button title="  -  " onPress={decrementEnfants} />
      </View>

      <View className=" w-11/12 h-20">
        <Button title="Confirmer" onPress={goBackWithParams} />
      </View>
    </View>
  );
};
