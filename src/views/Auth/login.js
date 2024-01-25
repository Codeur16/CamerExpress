import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { TextInput } from 'react-native-paper';

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    const user = { email: email, password: password}
    // console.log(user);
    axios.post("http://192.168.43.235:3000/api/user/login", user)
    .then((user)=>{
        if(user.data.data){
            console.log("user connected");
            console.log("\nMessage:\n"+user.data.message, "\n Data: \n "+user)
            Alert.alert(user.data.message)
            navigation.navigate("HomeRoot");   
        }
        console.log(user)
    })
    .catch((e)=>{
        Alert.alert("Erreur lors de la connexion ! \n veillez reessayer")
        console.log(e);
    })

  };

  return (
    <View className="flex-1 justify-center items-center">
       <Text className="text-3xl font-bold mb-20 font-salsa text-default" >Connexion</Text>
      
    <TextInput
        className={`w-64 h-12 p-2 border text-l text-black border-gray-300 rounded mb-6`}
        mode="Email"
        label="Email input"
        placeholder="Enter your email"
        right={<TextInput.Affix text="/100" />}
        // value={email}
    />
      <View className="relative w-64">
        <TextInput
           className={`w-64 h-10 p-2 border text-l text-black border-gray-300 rounded mb-6`}
          placeholder="Mot de passe"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className="absolute top-2 right-2"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mb-4">
        <TouchableOpacity className="mr-2">
          <Feather name="check-square" size={20} color="gray" />
        </TouchableOpacity>
        <Text className="text-gray-600">Se souvenir de moi</Text>
      </View>
      <TouchableOpacity
        className="bg-blue-500 rounded px-4 py-2"
        onPress={handleLogin}
      >
        <Text className="text-white">Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};
