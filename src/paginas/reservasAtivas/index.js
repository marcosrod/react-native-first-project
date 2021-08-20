import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import reservas from '../../../reservas.json'
import CartaoReserva from '../../componentes/formatadores/CartaoReservas';

const Reservas = props => (
    <View>
        <FlatList
            data={reservas}
            renderItem={({ item }) => {
                return (
                    <CartaoReserva 
                        reserva ={item} 
                    />
                    
                );
            }}
        keyExtractor={item => item.id.toString()}
        />
    </View>
)

const estilo = StyleSheet.create({

})

export default Reservas;