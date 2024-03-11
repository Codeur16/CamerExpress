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

export default function ButtomSheet({
  BottomSheetRef,
  height,
  openDuration,
  contentSheet,
  data,
  index,
  NextStep,
  title,
}) {
  //   const bottomSheetRef = useRef();
  const navigation = useNavigation();

  //

  const [press, setPress] = useState(false);
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
        <View>
          <Text
            className="  color-Black4 text-left pl-4"
            style={{
              fontFamily: FontFamily.RobotoBold,
              fontSize: Width * 0.035,
              width: "90%",
            }}
          >
            Durée:{" "}
            {subtractTime(
              getFormattedTime(data[index].dateArriver),
              getFormattedTime(data[index].dateDepart)
            )}
          </Text>
        </View>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      ></ScrollView>
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
});
