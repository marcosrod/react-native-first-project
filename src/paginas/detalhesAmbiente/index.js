import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable, Alert } from 'react-native';
import CartaoDetalhesAmbiente from '../../componentes/formatadores/CartaoDetalhesAmbiente';
import { setarCamposAmbiente } from '../../acoes';
import { connect } from 'react-redux';

function DetalhesAmbiente(props) {
    
    const { ambiente } = props.route.params;

    useEffect(() => {
        props.setarCamposAmbiente(ambiente)
    },[])

    return (
        <View style={estilos.conteiner}>
            <CartaoDetalhesAmbiente ambiente={props.ambienteDetalhes} />
            <View style={estilos.conteinerBotao}>
                <Pressable style={estilos.botao} onPress={() => props.navigation.navigate('Reservas Ativas')}>
                    <Text style={estilos.texto} >Visualizar Reservas</Text>
                </Pressable>
                <Pressable style={estilos.botao} onPress={() => {
                    props.navigation.navigate('Alterar Ambiente')
                    }}>
                    <Text style={estilos.texto}>Alterar Ambiente</Text>
                </Pressable>
                <Pressable 
                    style={estilos.botao} 
                    onPress={() => Alert.alert('Confirmar Exclusão de Ambiente?', 'Esta ação não pode ser desfeita!', 
                    [{text: 'Sim', onPress: () => {}}, 
                    {text: 'Não', onPress: () => {}}])}>
                    <Text style={estilos.texto}>Deletar Ambiente</Text>
                </Pressable>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'white'
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        height: '20%',
        width: '75%'
    },
    texto: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
    },
    imagem_perfil: {
        resizeMode: 'cover',
        height: 80,
        borderRadius: 5,
        flex: 1,
    },
    conteinerBotao: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '40%',
        width: '100%',
    }


})

const mapStateToProps = (estado) => {
    return ({
        ambienteDetalhes: estado.ambienteAlt
    })

}

const mapDispatchToProps = {
    setarCamposAmbiente
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesAmbiente);