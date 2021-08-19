import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ambientes from '../../../ambientes.json';
import CartaoAmbiente from '../../componentes/formatadores/CartaoAmbiente.js';

const Ambientes = props => (
    <View>
        <FlatList
            data={ambientes}
            renderItem={({ item }) => {
                return (
                    <CartaoAmbiente 
                        ambiente ={item} 
                        navegando={() => props.navigation.navigate('Detalhes do Ambiente', {ambiente: item})}
                    />
                    
                );
            }}
        keyExtractor={item => item.id.toString()}
        />
    </View>
)

const estilo = StyleSheet.create({

})

export default Ambientes;