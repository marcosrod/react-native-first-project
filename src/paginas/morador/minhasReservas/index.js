import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
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
        <View style={estilo.conteiner}>
            <CabecalhoNavegacao title={"Minhas Reservas"} navigation={props.navigation} />
            <ScrollView>
                <View style={estilo.subconteiner}>
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
            </ScrollView>
        </View>
    )

}

const estilo = StyleSheet.create({
    conteiner: {
        height: '100%'
    },
    subconteiner: {
        height: Dimensions.get("window").height + 110,

    },
})


const mapStateToProps = estado => {
    const { minhasReservasLista } = estado

    const chavesReservas = Object.keys(minhasReservasLista)
    const reservasVetor = chavesReservas.map((chaveReserva, i) => {
        return { ...minhasReservasLista[chaveReserva] }
    })
    return { reservas: reservasVetor }
}

export default connect(mapStateToProps, { atualizaListaMinhasReservas })(MinhasReservas)