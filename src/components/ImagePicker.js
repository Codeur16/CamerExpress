import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent() {
  const [image, setImage] = useState(null);
  async function getPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (status !== 'granted') {
      alert('Permission to access image library is required!');
    }
  }

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
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            // const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            // alert('Sorry, we need camera permissions to make this work!');
            }
        }
        })();
    }, []);  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
