import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text, Alert } from "react-native";
import * as Print from "expo-print";
import { Height, Width } from "../../utils/DimensionScreen";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Couleur from "../../utils/color";
import ticket from "../../components/ticket";
import { FontFamily } from "../../../GlobalStyles";
// import { addTime, getFormattedDate, getFormattedTime, subtractTime } from "./TrajetScreen";

const ConfirmationScreen = (
  MontanTotal,
  modePaiement,
  ReservationDetail,
  ReservationPrint,
  addTime,
  getFormattedDate,
  getFormattedTime,
  subtractTime
) => {
  const [pdfPath, setPdfPath] = useState("");
  // const [htmlContent, setHtmlContent] = useState(
  //   `<html><body><h1>Hello World!</h1></body></html>`
  // );

  const htmlContent =
    ticket();
    // ReservationPrint,
    // MontanTotal,
    // addTime,
    // getFormattedDate,
    // getFormattedTime,
    // subtractTime

  //   useEffect(() => {
  //     // Récupérer le code HTML du serveur
  //     const html = "<html><body><h1>Hello World!</h1></body></html>";

  //     // Générer le PDF à partir du HTML
  //     const generatePDF = async () => {
  //       const options = {
  //         html,
  //         fileName: "myPDF",
  //         directory: "Documents",
  //       };

  //       const pdf = await RNHTMLtoPDF.convert(options);
  //       setPdfPath(pdf.filePath);
  //     };

  //     generatePDF();
  //   }, []);

  // Fonction pour générer et imprimer le PDF à partir du contenu HTML
  console.log("Ticket paiement:::" + ReservationPrint);
  const generateAndPrintPDF = async () => {
    try {
      // Générer le PDF à partir du contenu HTML
      const { uri } = await Print.printToFileAsync({ html: htmlContent });

      // Afficher un message de réussite
      Alert.alert("PDF généré et imprimé avec succès");

      // Facultatif : ouvrir le PDF dans l'application de visualisation de PDF par défaut
      await Print.printAsync({ uri });
    } catch (error) {
      console.error(
        "Erreur lors de la génération ou de l'impression du PDF :",
        error
      );
      Alert.alert(
        "Erreur",
        "Une erreur s'est produite lors de la génération ou de l'impression du PDF."
      );
    }
  };
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: Couleur.White,
          height: Height * 0.7,
          width: Width,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: Height * 0.2,
        }}
      >
        <MaterialCommunityIcons
          name="cellphone-check"
          size={60}
          color={Couleur.Limeblue9}
        />

        <Text
          style={{
            fontFamily: FontFamily.RobotoItalic,
            fontSize: Width * 0.055,
            color: Couleur.Limeblue,
            textAlign: "center",
            marginVertical: Height * 0.05,
            width: Width * 0.8,
          }}
        >
          Félicitation Votre paiement a été effectuée avec succes
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Button title="Imprimer le billet" onPress={generateAndPrintPDF} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
