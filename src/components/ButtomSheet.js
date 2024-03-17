import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
// npm i react-native-raw-bottom-sheet
import BottomSheet from "react-native-raw-bottom-sheet";
import Couleur from "../utils/color";
// npm i react-native-elements
import { Icon } from "react-native-elements";
import { Width, Height } from "../utils/DimensionScreen";
import { FontFamily } from "../../GlobalStyles";
import Svg, { Ellipse, Path, Line, Circle } from "react-native-svg";
import { TouchButton } from "./TouchableButton";
import { useNavigation } from "@react-navigation/core";
import carte from "../assets/carte3.png";
import momo from "../assets/momo1.png";
import om from "../assets/om1.png";

export default function ButtomSheet({
  BottomSheetRef,
  height,
  openDuration,
  contentSheet,
  data,
  index,
  title,
  modePaiement,
  NextStep,
  selectMode,
}) {
  //   const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const [onSelect, setOnSelect] = useState(false);
  const [press, setPress] = useState(false);
  const [Index, setIndex] = useState(null);
  const [mode, setMode] = useState("");
  const selected = (indexMode, mode) => {
    setIndex(indexMode);
    setMode(mode);
  };
  return (
    <BottomSheet
      ref={BottomSheetRef}
      closeOnDragDown={false}
      height={Height * 0.7}
      openDuration={350}
      animationType="slide"
      minClosingHeight={0}
      closeDuration={20}
      closeOnPressMask={true}
      customStyles={{
        wrapper: { backgroundColor: Couleur.Limeblue3 },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
        },
        draggableIcon: { backgroundColor: Couleur.Limeblue6 },
      }}
    >
      <View
        style={{
          width: "100%",
          height: "12%",
          borderBottomWidth: 1,
          borderBottomColor: Couleur.Black4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View className="w-full h-2/3 flex flex-row items-center  pt-4 ">
          <Text
            className="  color-Black8 text-left pl-4"
            style={{
              fontFamily: FontFamily.RobotoBold,
              fontSize: Width * 0.05,
              width: "90%",
            }}
          >
            {title}
          </Text>
          <Pressable
            onPress={() => {
              BottomSheetRef.current.close();
            }}
          >
            <AntDesign name="close" size={25} color={Couleur.Black6} />
          </Pressable>
        </View>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* //  */}

        {/* // Iterate over the ModePaiement array and display each item */}
        <View className="flex flex-row flex-wrap justify-betwen items-center">
          {modePaiement.map((item, index) => {
            // console.log(item.id, item.value);
            // You can also render the items in your JSX code
            return (
              <Pressable
                key={index}
                className={
                  onSelect && Index === index
                    ? "   flex flex-col items-center justify-start border-4 m-1 border-Limeblue7 rounded-xl shadow-inner-lg shadow-Black2"
                    : " flex flex-col items-center justify-start border-2 m-1 mt-10 border-Black2 rounded-xl  shadow-inner-lg shadow-Black2"
                }
                style={{ width: Width * 0.3, height: Height * 0.2 }}
                onPressIn={() => {
                  setOnSelect(true);
                  console.log("Press");
                }}
                onPress={() => {
                  selected(index, item.value);
                }}
              >
                <Image
                  className="w-full rounded-t-lg"
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "60%",
                    // borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    width: "100%",
                    fontFamily:
                      onSelect && Index === index
                        ? FontFamily.RobotoBold
                        : FontFamily.RobotoMedium,
                    fontSize: Width * 0.045,
                    textAlign: "center",
                    marginTop: "14%",
                    color:
                      onSelect && Index === index
                        ? Couleur.Limeblue9
                        : Couleur.Black7,
                  }}
                >
                  {item.value}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <View className="h-64 w-full items-center justify-center">
          <TouchButton
            title="Selectionner"
            onPress={() => {
              NextStep();
              selectMode(mode);
            }}
          />
        </View>
      </ScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 160,
  },
  text: {
    fontSize: Width * 0.045,
    // fontWeight: "",
    fontFamily: FontFamily.RobotoBold,
  },
  text2: {
    textAlign: "center",
    // fontWeight: "",
    fontFamily: FontFamily.RobotoMedium,
    padding: 2,
  },
  container2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
  },
});
