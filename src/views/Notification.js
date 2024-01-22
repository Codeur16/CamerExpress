import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontFamily } from '../../GlobalStyles';

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
        color: 'rgba(0, 0, 0, 0.2)',
        fontFamily: FontFamily.Poppins,
        fontSize: 30,
    },
});
