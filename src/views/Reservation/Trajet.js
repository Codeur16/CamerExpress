import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

export const TrajetsScreen = ({ route, navigation }) => {
  const { villeDepart, villeArrivee, siteAgence } = route.params;
  const [trajets, setTrajets] = useState([]);

  useEffect(() => {
    const fetchTrajets = async () => {
      try {
        const response = await axios.get('URL_DE_VOTRE_API/trajets', {
          params: {
            villeDepart,
            villeArrivee,
            siteAgence
          }
        });
        setTrajets(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des trajets :", error);
      }
    };

    fetchTrajets();
  }, [villeDepart, villeArrivee, siteAgence]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trajets.map((trajet, index) => (
        <View key={index} style={styles.trajetContainer}>
          <Text style={styles.nomTrajet}>{trajet.nom}</Text>
          <Text style={styles.siteDepart}>Site de départ : {trajet.siteDepart}</Text>
          {/* Ajoutez d'autres informations du trajet si nécessaire */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  trajetContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
  },
  nomTrajet: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  siteDepart: {
    fontSize: 16,
  },
  // Ajoutez d'autres styles selon vos besoins
});
