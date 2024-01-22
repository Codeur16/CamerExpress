import React, { useState } from "react";
import {
  Box,
  NativeBaseProvider,
  Button,
  FormControl,
  Input,
  Modal,
  Radio,
} from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { RadioButton } from "react-native-paper";
import {Pressable} from 'react-native'
import { Color, FontFamily } from "../../GlobalStyles";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const ModelSelect = ({ options, onChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModall, setShowModall] = useState(true);
  const [service, setService] = useState("VIP");
  
  const Example = () => {
    return (
      <Radio.Group
        defaultValue="1"
        name="myRadioGroup"
        accessibilityLabel="Pick your favorite number"
        onValueChange={(itemValue) => {
          setService(itemValue);
          onChange && onChange(itemValue); // Appel de la fonction de rappel
        }}
      >
        {options.map((option) => (
            <Pressable className="flex font-bold  w-full h-14 border-black m-2 p-2 p-l-3 rounded-l content-center justify-center " style={{backgroundColor:"rgba(0,129,199,0.2)", fontFamily:FontFamily.Salsa}} >
          <Radio icon={ <FontAwesome name="check" size={24} color="#0081C7" /> } size={"9"}  key={option.value} value={option.value} className=" text-white">
          
            {option.label}{""}
          </Radio></Pressable>
        ))}
      </Radio.Group>
    );
  };

  const MyComponent = () => {
    const [value, setValue] = React.useState("first");
  
    return (
      <RadioButton.Group
        defaultValue="1"
        name="myRadioGroup"
        accessibilityLabel="Pick your favorite number"
        onValueChange={(itemValue) => {
          setService(itemValue);
          onChange && onChange(itemValue); // Appel de la fonction de rappel
        }}
      >
           {options.map((option) => (
            <RadioButton.Item key={option.value} value={option.value}>
              {" "}
              {option.label}{" "}
            </RadioButton.Item>
          ))}
        <RadioButton.Item label="First item" value="first" />
        <RadioButton.Item label="Second item" value="second" />
      </RadioButton.Group>
    );
  };
  

  return (
    <NativeBaseProvider>
        <Modal>
          <Modal.Content maxWidth="500px" width="90%">
            <Modal.CloseButton />
            <Modal.Header>Agences de Voyages </Modal.Header>
            <Modal.Body>
              {/* // code */}
              <Example />
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="red"
                  onPress={() => {
                    setShowModall(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModall(false);
                    // Ajoutez ici la logique de gestion de la connexion
                  }}
                >
                  Confirmer
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
    </NativeBaseProvider>
  );
};

export default ModelSelect;
