import React, { useState } from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, IconButton } from "react-native-paper";
import { FontFamily } from "../../GlobalStyles";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import Couleur from "../utils/color";
const MyTimePicker = ({ onTimeSelected, name }) => {
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === "ios"); // Cacher le sélecteur sur iOS
    setTime(formatTime(currentTime));

    // Appel de la fonction de rappel avec l'heure sélectionnée
    onTimeSelected(formatTime(currentTime));
  };
//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === "ios"); // Cacher le sélecteur sur iOS
//     setDate(formatDate(currentDate));

//     // Appel de la fonction de rappel avec la date sélectionnée
//     onDateSelected(formatDate(currentDate));
//   };
  const [focus, setFocus] = useState(false);
  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const customFont = {
    fontFamily: FontFamily.Poppins, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 0,
    fontWeight: "medium",
    lineHeight: 20,
    fontSize: 16,
    color: Couleur.Black6 ,
  };

  // formatage de la date
  const formatTime = (date) => {
    const options = { hour: "numeric", minute: "numeric" };
    return date.toLocaleTimeString("fr-FR", options); // Utilisez le format 'fr-FR' pour le français
  };

  return (
    <View>
      <Button
        labelStyle={customFont}
        icon={() => (
          <Ionicons name="time" size={24} color="rgba(0,129,199,1)" />
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
          console.log(time);
          showTimepicker();
        }}
      >
        {typeof time2 === "object" &&
        typeof time2.toLocaleTimeString === "function"
          ? formatTime(time2)
          : name}
      </Button>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time" // Définir le mode sur 'time' pour sélectionner uniquement l'heure
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyTimePicker;
