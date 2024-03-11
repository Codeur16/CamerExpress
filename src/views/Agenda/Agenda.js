import React, { useEffect } from "react";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import { Dimensions } from "react-native";
import { ScrollingPage } from "../../components/ScrollingPage";
import { CustomTextInput } from "../../components/CustomTextInput";
const { width, height } = Dimensions.get("window");
import { TextInput } from "react-native-paper";
export function AgendaSreen() {
  // { route, navigation }) {
  // const { Id, Name } = route.params;
  return (
    <View>
      <View className="bg-black  w-full border ">
        {/* <CustomTextInput
          mode="outlined"
          label="Rechercher"
          placeholder="Rechercher"
        /> */}
      </View>
      <View className="flex flex-col mb-4">
        <TextInput
          className={`w-64  text-l text-black bg-white text-default border-white rounded `}
          mode="outlined"
          label="Email input"
          placeholder="Enter your email"
          right={<TextInput.Affix />}
          // value={email}
          // onFocus={setfocusEmail}
          // onPress={setfocusEmail}
          // onChangeText={onChangeText}
          theme={{
            colors: {
              primary: "rgba(41, 199, 82, 1)",
            },
          }}
        />
      </View>
      <View className="bg-white h-fullza w-full border ">
        <ScrollingPage />
      </View>
    </View>
    // <View
    //   style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    //   className="bg-white"
    // >
    //   {/* <View style={styles.container0} className=" bg-slate-0 "> */}
    //   <Text>Agenda de voyage</Text>

    //   <View style={[styles.container, { width, height }]}>
    //     <Text>Contenu de l'application</Text>
    //   </View>
    //   {/* </View> */}
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
