import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icone from 'react-native-vector-icons/FontAwesome';

Icone.loadFont();

export default function cabecalhoNavegacao({title, navigation}) {
    return (
        <View style={estilos.conteiner}>
            <View style={estilos.conteinerButton}>
                <TouchableOpacity style={estilos.button} onPress={()=>{navigation.openDrawer()}}>
                    <Icone name="bars" size={28} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={estilos.conteinerTitle}>
                <Text style={estilos.text}>{title}</Text>
            </View>
        </View>
    )

}

const estilos = StyleSheet.create({
    conteiner: {
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
    conteinerTitle: {
        backgroundColor: '#212529',
        width: '80%',

    },
    conteinerButton: {
        justifyContent: 'center',
        backgroundColor: '#212529',
        paddingHorizontal: 10
    }
})