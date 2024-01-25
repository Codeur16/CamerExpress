import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontFamily } from '../../GlobalStyles';
import color from '../utils/color';

export const NotificationScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.message}>Notification</Text>

            <Text style={styles.message}>
                
            </Text>
            {/* Ajoutez le contenu supplémentaire de votre écran ici */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontSize: 16,
        fontWeight: 'medium',
        color: color.Black3 ,
        fontFamily: FontFamily.Poppins,
        fontSize: 30,
    },
});
