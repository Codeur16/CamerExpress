import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontFamily } from '../../GlobalStyles';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Ajoutez ici le code pour effectuer la recherche en fonction de la valeur de la barre de recherche
    console.log('Recherche lancée avec le texte:', searchText);
    Alert.alert(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher..."
        value={searchText}
        onChangeText={ setSearchText}
        // onSubmitEditing={handleSearch}
      />
      <Ionicons
        name="search"
        size={24}
        color="#888"
        style={styles.icon}
        onPress={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontFamily:FontFamily.Salsa
  },
  icon: {
    marginLeft: 10,
  },
});
