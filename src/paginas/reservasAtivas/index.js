import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import reservas from '../../../reservas.json'
import CartaoReserva from '../../componentes/formatadores/CartaoReservas';
import { connect } from 'react-redux';
import { atualizaListaReservas } from '../../acoes';
import { useEffect } from 'react';


const Reservas = (props) => {

    useEffect(() => {
        props.atualizaListaReservas(props.route.params)
    }, [])

    return (
        <View>
            <FlatList
                data={props.reservas}
                renderItem={({ item }) => {
                    return (
                        <CartaoReserva
                            reserva={item}
                        />

                    );
                }}
                keyExtractor={item => item.data.toString()}
            />
        </View>
    )

}

const estilo = StyleSheet.create({

})

const mapStateToProps = estado => {
    const { reservasLista } = estado
    return {reservas: reservasLista}
}

export default connect(mapStateToProps, { atualizaListaReservas })(Reservas)