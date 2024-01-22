
import React, { useState, useEffect } from "react";
import { StyleSheet, View,Button, Text, TextInput,Pressable, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, Feather,MaterialIcons } from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";


export default function Form() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [origine, setOrigine] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

 const handleSubmit = async () => {
  
 
async function getPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access image library is required!");
    }
  }
  // function to picked image

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
    
      setImage(result.assets[0].uri);
    }

    

  };

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
    })();  })


    // Note: import the cpu and webgl backend and add them to package.json as peer dependencies.




  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Text className="font-bold text-xl justify-center  ">FORMULAIRE D'ENREGISTREMENT</Text>
        <View style={styles.inputContainer}>
          <Text>NOM</Text>
          <TextInput
          
            style={styles.inputField}
            placeholder="Nom"
            value={nom}
            onChangeText={text => setNom(text)}
          />
          <Text>DESCRIPTION</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Description"
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <Text>ORIGINE</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Origine"
            value={origine}
            onChangeText={text => setOrigine(text)}
          />
          <Text>TYPE</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Type"
            value={type}
            onChangeText={text => setType(text)}
          />
        </View>
        {/* <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.imageButtonText}>Choisir une image</Text>
        </TouchableOpacity> */}
         <Pressable  className="border-solid justify-center align-middle"
           onPress={pickImage}>
            <Ionicons name="cloud-upload" size={70} color="#29c7" />
            <Text
              style={{ fontFamily: FontFamily.Laila, color: "#29c7" }}
              className="font-bold text-2xl"
            >
              Upload a food Image
            </Text>
          </Pressable>
        {image && (
          <View>
            <Image source={{ uri: image }} style={{width:100, height:100}} />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Soumettre</Text>
            </TouchableOpacity>
          </View>
        )}
      
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer: {
    marginTop: 10,
    width: 250,
   
  },
  inputField: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F5FCFF",
    marginBottom: 10,
    width: "100%",
  },
  imageButton: {
    backgroundColor: "#200",
    marginTop: 10,
  },
  imageButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    marginBottom: 10,
  },
  imagePreview: {
    width: "80%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});























