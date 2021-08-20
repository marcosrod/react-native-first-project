import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const CriarConta = props => (
    <View style={estilo.tela}>
        <Text style={estilo.textoTitulo}>Nova Conta</Text>
        <View style={estilo.imagem}></View>
        <TouchableOpacity style={estilo.botaoFoto}><Text style={estilo.textoBotaoFoto}>Carregar Foto</Text></TouchableOpacity>
        <View style={estilo.conteiner}>
            <TextInput style={estilo.texto} placeholder="Nome Completo" ></TextInput>
            <TextInput style={estilo.texto} placeholder="Apartamento"></TextInput>
            <TextInput style={estilo.texto} placeholder="E-mail"></TextInput>
            <TextInput style={estilo.texto} placeholder="Senha"></TextInput>
            <TextInput style={estilo.texto} placeholder="Confirmar Senha"></TextInput>
            <TouchableOpacity style={estilo.botao}><Text style={estilo.textoBotao}>Confirmar Cadastro</Text></TouchableOpacity>
            <TouchableOpacity style={estilo.botao}><Text style={estilo.textoBotao}>Voltar</Text></TouchableOpacity>
        </View>
    </View>
)


const estilo = StyleSheet.create({
    texto: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        backgroundColor: '#E5E5E5',
        width: 333,
        alignSelf: 'center'
    },
    conteiner: {
    },
    descricao: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        padding: 10,
        margin: 10,
        backgroundColor: '#E5E5E5',
        height: 141,
        marginBottom: 60
    },
    botao: {
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        width: 333,
        height: 50,
        padding: 10,
        marginTop: 0,
        marginBottom: 10,
    },
    textoBotao: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    textoBotaoFoto: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center'
    },
    imagem: {
        width: 150,
        height: 100,
        backgroundColor: '#E5E5E5',
        marginLeft: 130,
        marginTop: 5,
        borderRadius: 30
    },
    botaoFoto: {
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        borderWidth: 0.9,
        borderColor: 'black',
        borderRadius: 5,
        width: 150,
        padding: 6,
        marginTop: 1,
    },
    textoTitulo: {
        fontSize: 35,
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    tela: {
        backgroundColor: '#212529',
        height: '100%'
    }

})

export default CriarConta;