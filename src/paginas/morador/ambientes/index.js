import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
import CartaoReservarAmbiente from '../../../componentes/formatadores/CartaoReservarAmbiente';
import CabecalhoNavegacao from '../../../componentes/cabecalhoNavegacao';
import { connect } from 'react-redux';
import { atualizaLista } from '../../../acoes';
import { useEffect } from 'react';

const Ambientes = props => {

    useEffect(() => {
        props.atualizaLista()
    }, [])

    return (
        <View style={estilo.conteiner}>
            <CabecalhoNavegacao title={"Ambientes"} navigation={props.navigation} />



                    <FlatList
                        data={props.ambientes}
                        renderItem={({ item }) => {
                            return (
                                <CartaoReservarAmbiente
                                    ambiente={item}
                                    navegando={() => props.navigation.navigate('Reservar Ambiente', { ambiente: item })}
                                />

                            );
                        }}
                        keyExtractor={item => item.id.toString()}
                    />

                
        </View>
    )
}

const estilo = StyleSheet.create({
    conteiner: {
        height: '100%'
    },
    subconteiner: {
        height: Dimensions.get("window").height + 120,

    },
})



const mapStateToProps = estado => {
    const { ambientesLista } = estado
    if (ambientesLista) {
        const chavesAmbientes = Object.keys(ambientesLista)
        const ambientesVetor = chavesAmbientes.map(chaveAmbiente => {
            return { ...ambientesLista[chaveAmbiente], id: chaveAmbiente }
        })
        return { ambientes: ambientesVetor }
    }
    return {}

}

export default connect(mapStateToProps, { atualizaLista })(Ambientes)