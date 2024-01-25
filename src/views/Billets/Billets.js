import React, { useState} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native';
// import { Select, VStack, CheckIcon, Center, NativeBaseProviderBox, Text } from "native-base";
import { CustomSelect } from "../../components/select";
import LoginModel from '../../components/Model';
import ModelSelect from '../../components/ModelSelect';
import MyDatePicker from '../../components/DatePicker';
import { FontFamily } from '../../../GlobalStyles';

export const BilletsSreen = () => {
  const [date, setDate] = useState(null);

  const handleDateSelection = (date) => {
    setDate(date);
    console.log(date)
  };

  return (
   
     <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.message}>Reservations Effectuee</Text>

     
     {/* Ajoutez le contenu supplémentaire de votre écran ici */}
 </ScrollView>
  );
}; 




const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  message: {
      fontSize: 16,
      fontWeight: 'medium',
      color: 'rgba(0, 0, 0, 0.2)',
      fontFamily: FontFamily.Poppins,
      fontSize: 30,
  },
});