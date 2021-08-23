import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions, Pressable } from 'react-native';
import CartaoAmbiente from '../../componentes/formatadores/CartaoAmbiente.js';
import CabecalhoNavegacao from '../../componentes/cabecalhoNavegacao';
import { connect } from 'react-redux';
import { atualizaLista } from '../../acoes';
import { useEffect } from 'react';
import Icone from 'react-native-vector-icons/FontAwesome';


Icone.loadFont();

const Ambientes = props => {

    useEffect(() => {
        props.atualizaLista()
    }, [])

    return (
        <View style={estilo.conteiner}>
            <CabecalhoNavegacao title={"Ambientes"} navigation={props.navigation} />
            <FlatList style={estilo.lista}
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
            <Pressable style={estilo.icone} onPress={() => {
                props.navigation.navigate('Novo Ambiente')
            }}>
                <Icone name="plus" size={20} color="black" />
            </Pressable>
        </View>
    )
}

const estilo = StyleSheet.create({
    icone: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#03DAC5',
        position: 'absolute',
        bottom: '5%',
        right: '5%',
    },
    conteiner: {
        height: '100%'
    },
    subconteiner: {
        height: Dimensions.get("window").height + 120,

    },
    lista: {

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