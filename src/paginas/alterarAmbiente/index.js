import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const AlterarAmbiente = props => (
    <View>
        <View style={estilo.imagem}></View>
        <TouchableOpacity style={estilo.botaoFoto}><Text style={estilo.textoBotao}>Carregar Foto</Text></TouchableOpacity>
        <View style={estilo.conteiner}>
            <TextInput style={estilo.texto} placeholder="Nome do Ambiente" ></TextInput>
            <TextInput style={estilo.texto} placeholder="Lotação Máxima do Ambiente"></TextInput>
            <TextInput style={estilo.descricao} placeholder="Descrição do Ambiente" ></TextInput>
            <TouchableOpacity style={estilo.botao}><Text style={estilo.textoBotao}>Confirmar Alteração</Text></TouchableOpacity>
        </View>
    </View>
)


const estilo = StyleSheet.create({
    texto: {
        borderWidth: 1,
        borderColor: '#707070',
        padding: 10,
        margin: 10,
        backgroundColor: '#E5E5E5'
    },
    conteiner: {
        height: 70,
        marginTop: 30,

    },
    descricao: {
        borderWidth: 1,
        borderColor: '#707070',
        marginTop: 10,
        padding: 10,
        margin: 10,
        backgroundColor: '#E5E5E5',
        height: 141,
        marginBottom: 60
    },
    botao: {
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        borderColor: '#707070',
        borderWidth: 1,
        width: 333,
        height: 50,
        padding: 10,
        marginTop: -15,
    },
    textoBotao: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center'
    },
    imagem: {
        width: 170,
        height: 120,
        backgroundColor: '#E5E5E5',
        marginLeft: 120,
        marginTop: 12,
        borderRadius: 30,
        borderColor: '#707070',
        borderWidth: 1
    },
    botaoFoto: {
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        borderWidth: 0.9,
        borderColor: '#707070',
        borderRadius: 5,
        width: 170,
        padding: 6,
        marginTop: 3,
    }

})

export default AlterarAmbiente;