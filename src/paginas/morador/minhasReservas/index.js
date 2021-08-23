import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CabecalhoNavegacao from '../../../componentes/cabecalhoNavegacao'
import CartaoMinhasReservas from '../../../componentes/formatadores/CartaoMinhasReservas';
import { connect } from 'react-redux';
import { atualizaListaMinhasReservas } from '../../../acoes/';
import { useEffect } from 'react';

const MinhasReservas = props => {

    useEffect(() => {
        props.atualizaListaMinhasReservas()
    }, [props.reservas])

    return (
        <View>

            <CabecalhoNavegacao title={"Minhas Reservas"} navigation={props.navigation} />
            <FlatList
                data={props.reservas}
                renderItem={({ item }) => {
                    return (
                        <CartaoMinhasReservas
                            reserva={item}
                        />

                    );
                }}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    )

}

const estilo = StyleSheet.create({

})


const mapStateToProps = estado => {
    const { minhasReservasLista } = estado
    
    const chavesReservas = Object.keys(minhasReservasLista)
    const reservasVetor = chavesReservas.map((chaveReserva, i) => {
        return { ...minhasReservasLista[chaveReserva]}
    })
    return { reservas: reservasVetor }
}

export default connect(mapStateToProps, { atualizaListaMinhasReservas })(MinhasReservas)