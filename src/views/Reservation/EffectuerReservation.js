import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  Pressable,
  Alert,
  Image,
} from "react-native";
import { FontFamily } from "../../../GlobalStyles";
import Couleur from "../../utils/color";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { Width, Height } from "../../utils/DimensionScreen";
import { TextInput } from "react-native-paper";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Fontisto,
  FontAwesome6,
  FontAwesome5,
} from "@expo/vector-icons";
import { TouchButton } from "../../components/TouchableButton";
import * as ImagePicker from "expo-image-picker";

export const EffectuerReservationScreen = ({
  Trajets,
  index,
  getFormattedTime,
  getFormattedDate,
  subtractTime,
}) => {
  const [image, setImage] = useState(null);
  async function getPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access image library is required!");
    }
  }
  async function pickImage() {
    let result = await ImagePicker.launchCameraAsync({
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
  const navigation = useNavigation();
  const [name, setName] = useState("Nom");
  const [showNext, setShowNext] = useState(false);
  const [passager, setPassager] = useState(1);
  function convertNumberToWords(number) {
    const units = [
      "",
      "un",
      "deux",
      "trois",
      "quatre",
      "cinq",
      "six",
      "sept",
      "huit",
      "neuf",
      "dix",
      "onze",
      "douze",
      "treize",
      "quatorze",
      "quinze",
      "seize",
      "dix-sept",
      "dix-huit",
      "dix-neuf",
    ];
    const tens = [
      "",
      "",
      "vingt",
      "trente",
      "quarante",
      "cinquante",
      "soixante",
      "soixante-dix",
      "quatre-vingt",
      "quatre-vingt-dix",
    ];

    if (number === 0) {
      return "zéro";
    }

    if (number < 0) {
      return "moins " + convertNumberToWords(Math.abs(number));
    }

    let words = "";

    if (Math.floor(number / 1000000) > 0) {
      words += convertNumberToWords(Math.floor(number / 1000000)) + " million ";
      number %= 1000000;
    }

    if (Math.floor(number / 1000) > 0) {
      words += convertNumberToWords(Math.floor(number / 1000)) + " mille ";
      number %= 1000;
    }

    if (Math.floor(number / 100) > 0) {
      words += convertNumberToWords(Math.floor(number / 100)) + " cent ";
      number %= 100;
    }

    if (number > 0) {
      if (number < 20) {
        words += units[number];
      } else {
        words += tens[Math.floor(number / 10)];
        if (number % 10 > 0) {
          words += "-" + units[number % 10];
        }
      }
    }

    return words.trim();
  }
  const [press, setPress] = useState(false);
  const [numeroBon, setNumeroBon] = useState("Numero du bon");
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
  const [disabled, setDisabled] = useState(true);
  const [total, setTotal] = useState(Trajets[index].prixReservation * passager);
  return (
    <SafeAreaView>
      {!showNext && (
        <ScrollView
          adjustsScrollViewInsets={false}
          contentContainerStyle={styles.container}
        >
          {/* Ajoutez le contenu supplémentaire de votre écran ici */}

          <View
            style={{
              width: Width * 0.95,
              height: Height / 6,
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: Couleur.Black3,
              shadowOpacity: 0.4,
              shadowColor: Couleur.Black4,
              backgroundColor: "#fff",
            }}
          >
            <View className="w-full h-auto flex flex-row items-center border-b-0.5 p-1.5">
              <View className=" w-7 h-7 rounded bg-Limeblue8 m-1 p-1 items-center justify-center">
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: Width * 0.05,
                  }}
                >
                  1
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  fontSize: Width * 0.06,
                  textAlign: "center",
                  paddingLeft: 5,
                }}
              >
                Passagers
              </Text>
            </View>
            <View className="w-full h-auto flex flex-row items-center">
              {/* <TextInput
                mode="outlined"
                label="nom"
                placeholder="Votre Nom"
                style={{
                  width: "45%",
                  height: Height / 14,
                  marginHorizontal: "2%",
                }}
                // right={<TextInput.Affix text="/100" />}
              /> */}
              <TextInput
                className={`  text-l text-black bg-white text-default border-white rounded `}
                mode="outlined"
                label="Nom"
                placeholder="Enter your email"
                right={<TextInput.Affix />}
                style={{
                  width: "46%",
                  height: Height / 14,
                  marginHorizontal: "2%",
                }}
                value={name}
                // onFocus={setfocusEmail}
                // onPress={setfocusEmail}
                onChangeText={setName}
                theme={{
                  colors: {
                    primary: Couleur.Limeblue9,
                  },
                }}
              />
              <View
                className="  flex flex-row items-center justify-center rounded border-0.5 mt-1.5 border-Black"
                style={{ height: Height / 13.5, width: "47%" }}
              >
                <Pressable onPress={() => setPassager(passager + 1)}>
                  <Ionicons
                    name="add-circle-sharp"
                    size={30}
                    color={Couleur.Limeblue9}
                  />
                </Pressable>
                <Text
                  style={{
                    width: "60%",
                    textAlign: "center",
                    fontFamily: FontFamily.RobotoMedium,
                    fontSize: Width * 0.049,
                  }}
                >
                  {passager}
                </Text>
                <Pressable onPress={() => setPassager(passager - 1)}>
                  <AntDesign
                    name="minuscircle"
                    size={26}
                    color={Couleur.Limeblue9}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              width: Width * 0.95,
              height: Height / 5,
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: Couleur.Black3,
              shadowOpacity: 0.4,
              shadowColor: Couleur.Black4,
              marginTop: "7%",
              backgroundColor: "#fff",
            }}
          >
            <View className="w-full h-auto flex flex-row items-center border-b-0.5 p-1.5">
              <View className=" w-7 h-7 rounded bg-Limeblue8 m-1 p-1 items-center justify-center">
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: Width * 0.05,
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  fontSize: Width * 0.06,
                  textAlign: "center",
                  paddingLeft: 5,
                }}
              >
                Bon de Reduction
              </Text>
            </View>
            <View className="w-full h-auto flex flex-row items-center pt-3">
              {/* <TextInput
                mode="outlined"
                label="nom"
                placeholder="Votre Nom"
                style={{
                  width: "45%",
                  height: Height / 14,
                  marginHorizontal: "2%",
                }}
                // right={<TextInput.Affix text="/100" />}
              /> */}
              <TextInput
                className={`  text-l text-black bg-white text-default border-white rounded `}
                mode="outlined"
                label="Numero"
                placeholder="Enter le numero"
                right={<TextInput.Affix />}
                style={{
                  width: "56%",
                  height: Height / 14,
                  marginHorizontal: "2%",
                }}
                value={numeroBon}
                // onFocus={setfocusEmail}
                // onPress={setfocusEmail}
                onChangeText={setName}
                theme={{
                  colors: {
                    primary: Couleur.Limeblue9,
                  },
                }}
              />
              <View
                className="  flex items-center justify-center rounded mt-1 "
                style={{ height: Height / 13.5, width: "40%" }}
              >
                <TouchButton
                  title="Appliquer"
                  font={FontFamily.RobotoMedium}
                  radius={12}
                  height={Height / 13.5}
                  onPress={() => {
                    Alert.alert(
                      "Pas de bon de reduction disponible pour le moment"
                    );
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: Width * 0.95,
              height: Height / 2,
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: Couleur.Black3,
              shadowOpacity: 0.4,
              shadowColor: Couleur.Black4,
              marginTop: "7%",
              backgroundColor: "#fff",
            }}
          >
            <View className="w-full  h-auto flex flex-row items-center border-b-0.5 p-1.5">
              <View className=" w-7 h-7 rounded bg-Limeblue8 m-1 p-1 items-center justify-center">
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: Width * 0.05,
                  }}
                >
                  3
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  fontSize: Width * 0.06,
                  textAlign: "center",
                  paddingLeft: 5,
                }}
              >
                Plus d'informations
              </Text>
            </View>
            <View className="w-full h-auto flex  flex-col items-center">
              <View>
                <Pressable onPress={pickImage}>
                  <TextInput
                    className="border-Black8 color-Black"
                    mode="outlined"
                    showSoftInputOnFocus={true}
                    label="CNI"
                    value="Photo de la CNI"
                    placeholder="Photo de la CNI"
                    style={{
                      width: Width * 0.9,
                      height: Height / 14,
                      marginHorizontal: "2%",
                      // Ajoutez ici le style personnalisé pour le mode disable
                      // backgroundColor: disabled ? Couleur.White : "white",
                      // borderColor: disabled ? Couleur.Black8 : Couleur.Black8,
                      // borderWidth: disabled ? 1 : 1,
                      borderRadius: 20,
                      color: Couleur.Black9,
                      // Autres styles personnalisés...
                    }}
                    disabled={disabled}
                    theme={{
                      colors: {
                        primary: Couleur.Limeblue9,
                      },
                    }}
                  />
                </Pressable>
                <View
                  className="flex relative "
                  style={{
                    bottom: Height * 0.057,
                    left: Width * 0.8,
                  }}
                >
                  <MaterialCommunityIcons
                    name="camera-plus"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
              <View>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{
                      width: Width * 0.85,
                      height: Height * 0.3,
                      maxHeight: 200,
                      resizeMode: "contain",
                      borderRadius: 10,
                    }}
                  />
                )}
              </View>
            </View>
          </View>
          {/* <View className=" w-full h-auto  justify-center items-center mt-5"> */}
          <View className=" flex flex-row  w-full  justify-between m-5 pl-5 pr-5">
            <Text style={styles.text3}>Total:</Text>
            <Text style={styles.text3}>{total} XAF</Text>
          </View>
          <TouchButton
            title="Continuer"
            onPress={() => {
              setShowNext(true);
            }}
          />
          {/* </View> */}
          <View className="h-10"></View>
        </ScrollView>
      )}
      {showNext && (
        <ScrollView contentContainerStyle={styles.container}>
          {/* Ajoutez le contenu supplémentaire de votre écran ici */}
          <View
            className="flex-1 flex-col justify-center  border border-Black3 rounded-lg pb-4"
            style={{ width: Width * 0.9, height: Height * 0.85 }}
          >
            <View
              className="  justify-start  w-full"
              style={{
                height: "7%",
                width: "100%",
                borderBottomWidth: 3,
                borderBottomColor: Couleur.Limeblue8,
                borderStyle: "solid",
              }}
            >
              <Text
                className="text-center ml-5 mt-2"
                style={{
                  fontFamily: FontFamily.RobotoBold,
                  fontSize: Width * 0.06,
                  color: Couleur.Black7,
                }}
              >
                Votre Reservation
              </Text>
            </View>
            <View
              className="flex-1 flex-col   justify-start items-center w-full"
              style={{
                height: "93%",
                width: "100%",
              }}
            >
              <View className="flex-row w-11/12 h-1/6 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <Entypo
                    name="location-pin"
                    size={30}
                    color={Couleur.Black7}
                  />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Destination
                  </Text>
                  <Text
                    className="h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.037,
                      color: Couleur.Black7,
                    }}
                  >
                    De
                    <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                      {" "}
                      {Trajets[index].itineraire.villeDepart.nom} {`\t`}
                    </Text>
                    <AntDesign
                      name="arrowright"
                      size={17}
                      color={Couleur.Black7}
                    />{" "}
                    {`\t`} vers{" "}
                    <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                      {Trajets[0].itineraire.villeDestination.nom}{" "}
                    </Text>
                  </Text>
                </View>
              </View>
              <View className="flex-row w-11/12 h-1/6 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <Fontisto name="date" size={30} color={Couleur.Black7} />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Date
                  </Text>
                  <Text
                    className="h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.037,
                      color: Couleur.Black7,
                    }}
                  >
                    vous souhaitez quitter la ville de Yaounde pour le 16
                    janvier 2024
                  </Text>
                </View>
              </View>
              <View className="flex-row w-11/12  h-1/6 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <MaterialIcons
                    name="hourglass-full"
                    size={30}
                    color={Couleur.Black7}
                  />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Horaire
                  </Text>
                  <Text
                    className="h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.037,
                      color: Couleur.Black7,
                    }}
                  >
                    vous souhaitez effectuer votre Voyage de{" "}
                    <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                      {getFormattedTime(Trajets[0].dateDepart)} a{" "}
                      {getFormattedTime(Trajets[0].dateArriver)}
                    </Text>{" "}
                    donc une duree de{" "}
                    <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                      {subtractTime(
                        getFormattedTime(Trajets[0].dateArriver),
                        getFormattedTime(Trajets[0].dateDepart)
                      )}
                    </Text>
                  </Text>
                </View>
              </View>
              <View className="flex-row w-11/12 h-1/6 justify-center items-start border-b-0.5 border-b-Black4">
                <View className="w-1/5 h-4/5 justify-center items-center">
                  <FontAwesome5
                    name="user-friends"
                    size={30}
                    color={Couleur.Black7}
                  />
                </View>
                <View className="w-4/5 h-5/5 justify-center items-start pt-3">
                  <Text
                    className="  h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoBold,
                      fontSize: Width * 0.05,
                      color: Couleur.Black9,
                    }}
                  >
                    Passagers
                  </Text>
                  <Text
                    className="h-1/2"
                    style={{
                      fontFamily: FontFamily.RobotoMedium,
                      fontSize: Width * 0.037,
                      color: Couleur.Black7,
                    }}
                  >
                    votre Reservation comprends{" "}
                    <Text style={{ fontFamily: FontFamily.RobotoBold }}>
                      {" "}
                      {convertNumberToWords(passager)}({passager}){" "}
                    </Text>{" "}
                    Passagers
                  </Text>
                </View>
              </View>

              <View className="flex-col w-full h-2/6  justify-between items-center ">
                <View className=" flex flex-row  w-full h-1/4 justify-between items-center mt-2 pl-2 pr-2">
                  <Text style={styles.text3}>Total:</Text>
                  <Text style={styles.text3}>{total} XAF</Text>
                </View>
                <View className="w-full justify-between items-center">
                  <TouchButton
                    title="Proceder au paiment"
                    onPress={() => {
                      navigation.navigate("Paiement");
                    }}
                  />
                  <TouchButton
                    color={Couleur.Black6}
                    title="Modifier ces informations"
                    onPress={() => {
                      setShowNext(false);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    width: Width,
    height: "auto",
    // marginBottom: Height * 0.2,
  },
  message: {
    fontSize: Width * 0.055,
    color: Couleur.Black9,
    fontFamily: FontFamily.RobotoMedium,
  },
  text3: {
    fontFamily: FontFamily.RobotoBold,
    fontSize: Width * 0.05,
    color: Couleur.Black7,
  },
});

// s
