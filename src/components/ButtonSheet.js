import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";
const ButtonSheet = ({ options, onPress }) => {
  return (
    <BottomSheet
      ref={(ref) => {
        this.bottomSheet = ref;
      }}
      height={200}
      duration={250}
      closeOnDragDown
      customStyles={{
        container: {
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
        },
        wrapper: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => {
            onPress(option);
            this.bottomSheet.close();
          }}
        >
          <Text style={styles.buttonText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ButtonSheet;
