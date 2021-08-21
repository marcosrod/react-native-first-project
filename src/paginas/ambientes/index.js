import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CartaoAmbiente from '../../componentes/formatadores/CartaoAmbiente.js';
import CabecalhoNavegacao from '../../componentes/cabecalhoNavegacao';
import { connect } from 'react-redux';
import { atualizaLista } from '../../acoes';
import { useEffect } from 'react';

const Ambientes = props => {

    useEffect(() => {
        props.atualizaLista()
    }, [])

    return (
        <View>
            <CabecalhoNavegacao title={"Ambientes"} navigation={props.navigation} />
            <FlatList
                data={props.ambientes}
                renderItem={({ item }) => {
                    return (
                        <CartaoAmbiente
                            ambiente={item}
                            navegando={() => props.navigation.navigate('Detalhes do Ambiente', { ambiente: item })}
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
    const { ambientesLista } = estado

    const chavesAmbientes = Object.keys(ambientesLista)
    const ambientesVetor = chavesAmbientes.map(chaveAmbiente => {
        return { ...ambientesLista[chaveAmbiente], id: chaveAmbiente }
    })

    return { ambientes: ambientesVetor }
}

//export default Ambientes;

export default connect(mapStateToProps, { atualizaLista })(Ambientes)