import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const types = ['bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInUp', 'fadeInUpBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'lightSpeedIn', 'slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight', 'zoomIn', 'zoomInDown', 'zoomInUp', 'zoomInLeft', 'zoomInRight']

export function AnimatableEntry() {
    const [animation, setAnimation] = useState({
        visible: false,
        type: ''
    })
    const animate = (type) => {
        setAnimation({ visible: false, type })
        setTimeout(() => {
            setAnimation({ visible: true, type })
        }, 250);
    }
    const prop = animation.visible ? { animation: animation.type } : {}
    return (
        <View style={styles.container}>
            <Animatable.View style={styles.view} {...prop}>
                <Text style={styles.type}>{animation.type}</Text>
            </Animatable.View>
            <ScrollView>
                {types.map((type => (
                    <View key={type}>
                        <Button title={'animate - ' + type} onPress={() => animate(type)} />
                        <View style={{ height: 5 }} />
                    </View>
                )))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    view: {
        height: 80,
        marginVertical: 20,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    type: {
        color: '#fff',
        fontSize: 17
    }
})

