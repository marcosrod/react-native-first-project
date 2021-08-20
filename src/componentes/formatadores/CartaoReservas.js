import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CartaoReserva = ({ reserva }) => (
    <View
        style={estilos.conteiner}
    >
        <View style={estilos.cartao}>
            <Image
                style={estilos.imagem_perfil}
                source={{
                    uri: reserva.foto,
                }}
            />
            <View style={estilos.conteinerReserva}>
                <Text style={estilos.nome}>{`${reserva.nome}`}</Text>
                <Text style={estilos.apartamento}>{"Apartamento: "+`${reserva.apartamento}`}</Text>
                <Text style={estilos.data}>{"Data: "+`${reserva.data}`}</Text>
            </View>
        </View>
    </View>

);

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1
    },
    cartao: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: "center",
    },
    imagem_perfil: {
        resizeMode: 'cover',
        height: 120,
        borderRadius: 50,
        flex: 1,
    },
    nome: {
        flex: 2,
        marginLeft: 40,
        marginTop: 15,
        fontSize: 20,
        color: '#484848',
        fontWeight: 'bold'
    },
    apartamento: {
        flex: 2,
        marginLeft: 110,
        fontSize: 18,
        color: '#484848',
    },
    data: {
        flex: 2,
        marginLeft: 110,
        fontSize: 18,
        color: '#484848',
    },
    conteinerReserva: {
        flex: 2,
        flexDirection: 'column'
    }

});

export default CartaoReserva;

