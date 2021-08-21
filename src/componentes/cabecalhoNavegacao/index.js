import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function cabecalhoNavegacao({title, navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="bars" size={28} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#212529'
    },
    button: {
        backgroundColor: '#F8F9FA'
    },
    text: {
        color: 'white',
        padding: 5,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    containerTitle: {
        backgroundColor: '#212529',
        width: '80%',

    },
    containerButton: {
        justifyContent: 'center',
        backgroundColor: '#212529',
        paddingHorizontal: 10
    }
})