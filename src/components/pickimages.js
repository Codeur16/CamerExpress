import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  Image,
  View,
  Platform,
  Pressable,
  StyleSheet,
  Alert
} from "react-native";
import Form from "../components/formulairePlat";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, Ionicons, Feather,MaterialIcons } from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";
export function pickImage({ route, navigation }) {
  const [image, setImage] = useState(null);
  // Platform permission
  async function getPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access image library is required!");
    }
  }
  // function to picked image
  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        // Access the selected asset's URI from the assets array
        const selectedImageURI = result.assets[0].uri;
        setImage(result.assets[0].uri);
        console.log(selectedImageURI);
        // You can also upload the image to a server or display it in your UI.
      }
    }
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        // const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
          // alert('Sorry, we need camera permissions to make this work!');
        }
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
      }}
    >
      {!image ? (
        <>
         
          <Text
            style={{
              fontFamily: FontFamily.Poppins,
              color: "rgba(0, 0, 0, 0.5)",
            }}
            className="italic mt-5"
          >
            "Select a meal photo to start annotation"
          </Text>
          {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
          <Pressable style={styles.pressable} className=" "
          onPress={pickImage}>
            <Ionicons name="cloud-upload" size={70} color="#29c7" />
            <Text
              style={{ fontFamily: FontFamily.Laila, color: "#29c7" }}
              className="font-bold text-2xl"
            >
              Upload a food Image
            </Text>
          </Pressable>
        </>
      ) : (
        <>
          
          <Image source={{ uri: image }} style={styles.shadow} />
         <View className="flex flex-row">
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "red",
            }}
            className="m-5 w-32 h-12  content-center items-center rounded-lg "
            onPress={() => {
              setImage(null)
            }}
          >
            <Text className="font-semibold text-lg color-white">Delete</Text>
            <MaterialIcons name="delete" size={24} color="white" />
          </Pressable>
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#29c752",
            }}
            className="m-5 w-32 h-12  content-center items-center rounded-lg "
            onPress={() => {
              Alert.alert("Annotation Api")
              console.log("ok");
            }}
          >
            <Text className="font-semibold text-lg color-white">Pocessing</Text>
            <Feather name="chevrons-right" size={24} color="white" />
          </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 50,
    width: 200,
    height:200,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    margin:20
  },
  pressable: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "colum",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
    height: 250,
    marginTop: 20,
    borderRadius: 5,
    borderStyle: "dashed", // Le style de bordure
    borderWidth: 2, // L'épaisseur de la bordure
    borderColor: "#29c7", // La couleur de la bordure
    borderRadius: 5, // Le rayon de la bordure
    padding: 10, // L'espacement intérieur
  },
});
