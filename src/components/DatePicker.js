import React, { useState } from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, IconButton } from "react-native-paper";
import { FontFamily, Color } from "../../GlobalStyles";
import { Fontisto } from "@expo/vector-icons";
import Couleur from '../utils/color';
const MyDatePicker = ({ onDateSelected, name }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios"); // Cacher le sélecteur sur iOS
    setDate(formatDate(currentDate));

    // Appel de la fonction de rappel avec la date sélectionnée
    onDateSelected(formatDate(currentDate));
  };
  const [focus, setFocus] = useState(false);
  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  const customFont = {
    fontFamily: FontFamily.Poppins, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "medium",
    lineHeight: 20,
    fontSize: 16,
    color: Couleur.Black6,
  };

  // formatage de la date
  const formatDate = (date) => {
    // if(typeof(date===String)){
    const options = {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("fr-FR", options); // Utilisez le format 'fr-FR' pour le français
    // }
    // else{
    //     return date;
    // }
  };

  return (
    <View>
      <Button
        labelStyle={customFont}
        icon={() => (
          <Fontisto name="date" size={24} color="rgba(0,129,199,1)" />
        )}
        style={{
          fontFamily: FontFamily.Laila,
          fontSize: 12,
          width: 320,
          height: 50,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "flex-start",
          display: "flex",
        }}
        theme={{ colors: { primary: "rgba(0,129,199,1)" } }}
        mode={!focus ? "outlined" : "outlined"}
        onPress={() => {
          console.log("Pressed");
          setFocus(focus);
          showDatepicker();
        }}
      >
        {name && typeof name.toLocaleDateString === "function"
          ? formatDate(name)
          : name}
      </Button>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyDatePicker;
