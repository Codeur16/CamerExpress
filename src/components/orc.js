// import React, { useState } from "react";
// import { View, Pressable, Image, Text } from "react-native";
// import TesseractOcr  from "react-native-tesseract-ocr";

// const ImageTextExtractor = ({ img }) => {
//   const [extractedText, setExtractedText] = useState("");

//   const extractTextFromImage = async () => {
//     try {
//       const pathToImage = img; // Remplacez cela par le chemin de votre image
//       const tessOptions = {
//         whitelist: null,
//         blacklist: null,
//       };
//       const extractedText = await TesseractOcr.recognize(
//         pathToImage,
//         "LANG_ENGLISH",
//         tessOptions
//       );
//       setExtractedText(extractedText);
//     } catch (error) {
//       console.error("Erreur lors de l'extraction du texte :", error);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Image
//         source={{ uri: "chemin/vers/votre/image.jpg" }}
//         style={{ width: 200, height: 200, margin: 10 }}
//       />
//       <Pressable
//         onPress={extractTextFromImage}
//         style={{
//           backgroundColor: "blue",
//           padding: 10,
//           alignItems: "center",
//           marginBottom: 20,
//         }}
//       >
//         <Text style={{ color: "white" }}>Extraire le texte de l'image</Text>
//       </Pressable>
//       <Text>Texte extrait :</Text>
//       <Text>{extractedText}</Text>
//     </View>
//   );
// };

// export default ImageTextExtractor;
