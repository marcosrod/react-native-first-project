import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LinhaFormulario = (props) => {
    const { children } = props;

    return (
        <View style={estilos.conteiner}>
            {children}
        </View>
    )

}


const estilos = StyleSheet.create({
    conteiner: {
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#212529',
        
    }

})

export default LinhaFormulario;