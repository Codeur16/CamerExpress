import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Couleur from "../utils/color";
import { Fontisto, FontAwesome } from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";

const MonDropdown = ({ data, onChange, placeholder, width }) => {
  const colore = (val, place) => {
    if (val == place) {
      return Couleur.Black9;
    } else {
      return Couleur.Black9;
    }
  };
  const [selectedValue, setSelectedValue] = useState(placeholder);
  const placeholderStyle = StyleSheet.create({
    color: { color: "#000", backgroundColor: "#000" },
  });
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 4,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontFamily: FontFamily.RobotoMedium,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: Couleur.Black3,
      borderRadius: 4,
      elevation: 2,
      color: colore(selectedValue, placeholder),
      paddingRight: 30, // to ensure the text is never behind the icon
      width: width,
      minWidth: 150,
      backgroundColor: Couleur.White,
    },
  });

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => {
          setSelectedValue(value);
          onChange(value);
        }}
        items={data?.map((item) => ({
          label: item.nom ? item.nom : item.agence.nom + "\t" + item.quartier,
          value: item.id,
        }))}
        placeholder={{
          label: placeholder,
          value: null,
        }}
        useNativeAndroidPickerStyle={false}
        value={selectedValue}
        // textInputProps={{
        //   style: {
        //     fontSize: 26, // Taille du texte
        //     fontFamily: FontFamily.RobotoMedium, // Police de caractères
        //     color: "black", // Couleur du texte
        //   },
        // }}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // fontFamily: FontFamily.RobotoMedium,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // borderWidth: 1,
    // borderColor: Couleur.Black11,
    // borderRadius: 5,
    // minWidth: 150,
    // width: "90%",
    // // color: Couleur.Black9,
    // height: 45,
    // // justifyContent: "center",
    // // alignItems: "center",
    // backgroundColor: Couleur.White,
  },
});

export default MonDropdown;
