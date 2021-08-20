import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ambientes from '../../../ambientes.json';
import CartaoAmbiente from '../../componentes/formatadores/CartaoAmbiente.js';
import CabecalhoNavegacao from '../../componentes/cabecalhoNavegacao';

const Ambientes = props => (
    <View>
        <CabecalhoNavegacao title={"Ambientes"} navigation={props.navigation}/>
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