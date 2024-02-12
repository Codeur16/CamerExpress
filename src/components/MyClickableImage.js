import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MyClickableImage = ({ source, style, onPress }) => {
  return (
    <TouchableOpacity  onPress={onPress}>
      <Image
        source={source}
        style={[styles.image, style]} // Fusionnez le style personnalisé avec le style de base
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30, // Style de base (vous pouvez personnaliser ici)
    height: 30, // Style de base (vous pouvez personnaliser ici)
  },
});

export default MyClickableImage;
