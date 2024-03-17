import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontFamily } from "../../GlobalStyles";
import color from "../utils/color";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { Height, Width } from "../utils/DimensionScreen";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchButton } from "../components/TouchableButton";
export const PaimentConfirm = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Naviguer automatiquement vers Ecran2 après un délai de 2 secondes (2000 ms)
    const timer = setTimeout(() => {
      NexStep();
    }, 600);

    // N'oubliez pas de nettoyer le timer pour éviter les fuites de mémoire
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const backAction = () => {
      // Naviguer vers l'écran de destination souhaité
      navigation.goBack();
      return true; // Indiquer que l'action de retour a été gérée
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Retirer l'écouteur d'événement lorsque le composant est démonté
    return () => backHandler.remove();
  }, [navigation]);
  const [total, setTotal] = useState(JSON.stringify(MontanTotal));
  const [numero, setNumero] = useState(null);
  const [showTrans, setShowTrans] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!showTrans && (
        <View className="w-full justify-center items-center">
          <View
            className="flex w-full flex flex-row   justify-start items-start bg-Black1  border-l-8 border-l-Limeblue9"
            style={{ height: Height * 0.08 }}
          >
            <View className="justify-center items-center w-auto h-full p-1">
              <FontAwesome name="credit-card-alt" size={18} color="black" />
            </View>
            <Text
              className="flex flex-wrap justify-center items-center w-11/12 h-full text-xl  text-Black9"
              style={{
                fontFamily: FontFamily.RobotoMedium,
                fontSize: Width * 0.045,
                paddingLeft: 5,
              }}
            >
              Entrez vos informations ici pour pour pouvoir proceder au paiement
              !
            </Text>
          </View>

          <View className="mt-20">
            <TextInput
              className="border-Black8 color-Black text-xl"
              mode="outlined"
              label="Montant (Fcfa)"
              style={{
                width: Width * 0.9,
                height: Height / 14,
                marginHorizontal: "2%",
                borderRadius: 20,
                color: Couleur.Black8,
              }}
              value={total + "\tFCFA"}
              theme={{
                colors: {
                  primary: Couleur.Limeblue9,
                },
              }}
            />
          </View>
          <View className="mt-10 mb-10">
            <TextInput
              // className="border-Black8 color-Black text-xl"
              mode="outlined"
              label="Numero du payeur"
              style={{
                width: Width * 0.9,
                height: Height / 14,
                marginHorizontal: "2%",
                borderRadius: 20,
                color: Couleur.Black8,
              }}
              value={numero}
              onChangeText={(text) => setNumero(text)}
              keyboardType="numeric"
              theme={{
                colors: {
                  primary: Couleur.Limeblue9,
                },
              }}
              right={<TextInput.Icon name="eye" />}
            />
          </View>
          <TouchButton
            title={"Payer"}
            onPress={() => {
              setShowTrans(true);
            }}
          />
          {/* Ajoutez le contenu supplémentaire de votre écran ici */}
        </View>
      )}
      {showTrans && (
        <View className="flex-1 justify-start items-center h-64">
          <Text style={styles.message}>Votre transaction a ete initie!</Text>
          <Text style={styles.message}>
            Vous allez recevoir une demande de paiement sur votre telephone
          </Text>
          <Text className="bg-Limeblue3" style={styles.message}>
            A defaut tapez le *126#
          </Text>
          <View className="w-64 justify-center items-center mt-10">
            <TouchButton
              title={"Annuler"}
              onPress={() => {
                setShowTrans(false);
              }}
              color={"red"}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: Height,
  },
  message: {
    fontSize: 16,
    color: color.Black6,
    fontFamily: FontFamily.RobotoBold,
    fontSize: 20,
    margin: 10,
  },
});
