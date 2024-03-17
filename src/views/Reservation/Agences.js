import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import Couleur from "../../utils/color";
import { FontFamily } from "../../../GlobalStyles";
import ActionSheet from "../../components/ActionSheet";
import { Height, Width } from "../../utils/DimensionScreen";
import { Searchbar } from "react-native-paper";
import BusGenerale from "../../assets/general.png";
import { TouchButton } from "../../components/TouchableButton";
export const AgenceScreen = () => {
  const navigation = useNavigation();
  const [agences, setAgences] = useState([]);
  // useEffect(() => {
  //   const backAction = () => {
  //     // Naviguer vers l'écran de destination souhaité
  //     navigation.navigate("HomeRoot");
  //     return true; // Indiquer que l'action de retour a été gérée
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );
  // });
  // Retirer l'écouteur d'événement lorsque le composant est démonté
  //   return () => backHandler.remove();
  // })
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    const getAgences = async () => {
      try {
        const reponse = await axios.get(url + "/api/agences");
        console.log("AGENCES: " + JSON.stringify(reponse.data));
        setAgences(reponse.data);
        console.log(reponse.data.message);
        // setDonnees(reponse.data);y
      } catch (erreur) {
        console.error("Erreur lors de la récupération des sites :", erreur);
      }
    };
  });
  const card = (
    <View
      className="flex justify-between items-center flex-col border-0.5 border-Black1 rounded-lg bg-white shadow-lg shadow-Black5 mt-5 ml-2 mr-2 "
      style={{ width: Width / 2.5, height: Height / 3.1 }}
    >
      <View className="w-full h-autojustify-start items-center bg-white rounded-lg">
        <Image
          alt="bus"
          width={10}
          height={10}
          source={BusGenerale}
          style={{ width: Width / 2.5, height: Height / 3.5 / 2 }}
          className="rounded-t-lg"
        />
      </View>
      <View className="flex flex-col pt-2">
        <Text style={{ fontFamily: FontFamily.RobotoBold }}>
          Agence: Generale
        </Text>
        <Text style={{ fontFamily: FontFamily.RobotoBold }}>Sites: 08</Text>
        <Text>
          Au Cameroun, le processus de réservation de billets est souvent
          difficile pour les
        </Text>
      </View>
      <View className="w-11/12 jus  items-center pt-2">
        <TouchButton title="voir plus" height={"35%"} radius={30} />
      </View>
    </View>
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        className="flex justify-center items-center border-b-2 border-b-Limeblue9"
        style={{ width: Width * 0.9 }}
      >
        <Text
          style={{
            fontFamily: FontFamily.RobotoBold,
            fontSize: Width * 0.05,
            padding: 7,
          }}
        >
          Liste des agences
        </Text>
      </View>
      <View style={{ width: Width * 0.9, marginTop: 10 }}>
        <Searchbar
          placeholder="Recharcher une agence"
          inputStyle={{
            color: Couleur.Black9,
            fontFamily: FontFamily.RobotoItalic,
          }}
          onChangeText={setSearchQuery}
          value={searchQuery}
          // selectionColor={"#fff"}
          underlineColorAndroid={"rgba(0, 0, 0, 0.05)"}
          // traileringRippleColor={"#fff"}
          style={{ backgroundColor: "#fff" }}
          className="shadow-inner-lg shadow-Black9 border border-Black3"
        />
      </View>
      <View className="flex flex-row flex-wrap justify-center items-center ">
        {card}
        {card}
        {card}
        {card}
      </View>

      {/* Ajoutez le contenu supplémentaire de votre écran ici */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    paddingTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  message: {
    fontSize: 16,
    fontWeight: "medium",
    color: Couleur.Black2,
    fontFamily: FontFamily.Poppins,
    fontSize: 20,
  },
});
