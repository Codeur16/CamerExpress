import React, { useState} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native';
// import { Select, VStack, CheckIcon, Center, NativeBaseProviderBox, Text } from "native-base";
import { CustomSelect } from "../components/select";
import LoginModel from '../components/Model';
import ModelSelect from '../components/ModelSelect';
import MyDatePicker from '../components/DatePicker';
import { FontFamily } from '../../GlobalStyles';
const RecommendationSreen = () => {
  const [date, setDate] = useState(null);

  const handleDateSelection = (date) => {
    setDate(date);
    console.log(date)
  };

  return (
   
     <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.message}>Notification</Text>

     <Text style={styles.message} className=" p-11 ">
      
    transformFile (/home/developpeur/Documents/Frontend/CamerExpress/node_modules/metro/src/DeltaBundler/Worker.flow.js:73:36)
    at Object.transform (/home/developpeur/Documents/Frontend/CamerExpress/node_modules/metro/src/DeltaBundler/Worker.flow.js:48:10)
    at execFunction (/home/developpeur/Documents/Frontend/CamerExpress/node_modules/jest-worker/build/workers/processChild.js:137:17)
    at execHelper (/home/developpeur/Documents/Frontend/CamerExpress/node_modules/jest-worker/build/workers/processChild.js:116:5)
    at execMethod (/home/developpeur/Documents/Frontend/CamerExpress/node_modules/jest-worker/build/workers/processChild.js:120:5)
    at process.messageListener (/home/developpeur/Documents/Frontend/CamerExpress/node_modules/jest-worker/build/workers/processChild.js:38:7)
    at process.emit (node:events:514:28)
    at emit (node:internal/child_process:951:14)
    at process.processTicksAndReject
     </Text>
     <View>
      <Text>Date sélectionnée : {date ? date.toDateString() : 'Aucune'}</Text>
      <MyDatePicker onDateSelected={handleDateSelection} />
    </View>
     {/* Ajoutez le contenu supplémentaire de votre écran ici */}
 </ScrollView>
  );
};

module.exports = { RecommendationSreen }


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