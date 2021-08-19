import React from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';
import CartaoDetalhesAmbiente from '../../componentes/formatadores/CartaoDetalhesAmbiente';

export default function DetalhesAmbiente(props) {
    const { ambiente } = props.route.params;
    return (
        <View style={estilos.conteiner}>
            <CartaoDetalhesAmbiente ambiente={ambiente} />
            <View style={estilos.conteinerBotao}>
                <Pressable style={estilos.botao}>
                    <Text style={estilos.texto}>Visualizar Reservas</Text>
                </Pressable>
                <Pressable style={estilos.botao}>
                    <Text style={estilos.texto}>Alterar Ambiente</Text>
                </Pressable>
                <Pressable style={estilos.botao}>
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


