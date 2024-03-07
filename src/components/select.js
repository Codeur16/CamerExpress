import React from "react";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Box,
  Text,
} from "native-base";
import { FontFamily } from "../../GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Couleur from "../utils/color";
import { Color } from "../../GlobalStyles";
import { View } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
const CustomSelect = ({ options, onChange, placeholder , width}) => {
  let [service, setService] = React.useState("");

  // Créer un tableau en utilisant le modèle de données

  return (
    <NativeBaseProvider>
      <VStack
        alignItems="center"
        space={4}
        style={{ borderColor: "black" }}
        className="flex flex-row border-black rounded-md "
      >
        {/* <View className=" h-11 w-8  bg-blue-200   border-l-default rounded-l  justify-center content-center  ">
          <MaterialCommunityIcons
            name="seat-passenger"
            size={24}
            color={Color.limegreen}
          />
        </View> */}
        <Select
          shadow={2}
          selectedValue={service}
          minWidth="150"
          width={width? width : "auto"}
          minHeight="39"
          height="45"
          borderWidth="1"
          borderColor={Couleur.Black11}
          backgroundColor="white"
          accessibilityLabel="Classe de voyage"
          placeholder={placeholder}
          fontSize="16"
          paddingLeft="5"
          marginTop="2"
          fontFamily={FontFamily.RobotoMedium}
          color={Couleur.Black8}
          endIcon={
            <MaterialCommunityIcons name="arrow-down" size={24} color="black" />
          }
          dropdownIcon={
            <Entypo name="chevron-small-down" size={0} color={Couleur.Black5} />
          }
          _selectedItem={{
            bg: "rgba(0,129,199,0.65)",
            endIcon: <CheckIcon size="5" />,
          }}
          _light={{
            bg: "coolGray.100",
            _hover: {
              bg: "coolGray.200",
            },
            _focus: {
              bg: "coolGray.200:alpha.70",
            },
          }}
          _dark={{
            bg: "coolGray.800",
            _hover: {
              bg: "coolGray.900",
            },
            _focus: {
              bg: "coolGray.900:alpha.70",
            },
          }}
          onValueChange={(itemValue) => {
            setService(itemValue);
            onChange && onChange(itemValue); // Appel de la fonction de rappel
          }}
        >
          {options &&
            options.map((option) => (
              <Select.Item
                key={option.id}
                label={option.nom}
                value={option.nom}
              />
            ))}
        </Select>
      </VStack>
    </NativeBaseProvider>
  );
};

module.exports = { CustomSelect };
