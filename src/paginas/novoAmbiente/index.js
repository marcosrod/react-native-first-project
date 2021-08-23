import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CabecalhoNavegacao from '../../componentes/cabecalhoNavegacao';
import { setarCampoAmbiente, salvarAmbiente } from '../../acoes/acoesAmbienteCadastro'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();

const NovoAmbiente = ({ ambienteCad, setarCampoAmbiente, salvarAmbiente, navigation}) => (

    <View style={estilo.tela}>
        <CabecalhoNavegacao title={"Novo Ambiente"} navigation={navigation} />
        <View style={estilo.imagem}></View>
        <TouchableOpacity style={estilo.botaoFoto}><TextInput style={estilo.textoBotaoFoto} placeholder={"Carregar Foto"} value={ambienteCad.foto} onChangeText={valor => setarCampoAmbiente('foto', valor)}></TextInput></TouchableOpacity>
        <View style={estilo.conteiner}>
            <TextInput style={estilo.texto} placeholder="Nome do Ambiente" value={ambienteCad.nome} onChangeText={valor => setarCampoAmbiente('nome', valor)} ></TextInput>
            <TextInput style={estilo.texto} placeholder="Lotação Máxima do Ambiente" value={ambienteCad.lotacaoMaxima} onChangeText={valor => setarCampoAmbiente('lotacaoMaxima', valor)}></TextInput>
            <TextInput style={estilo.descricao} placeholder="Descrição do Ambiente" value={ambienteCad.descricao} onChangeText={valor => setarCampoAmbiente('descricao', valor)} ></TextInput>
            <TouchableOpacity
                style={estilo.botao}
                onPress={async () => {
                    await salvarAmbiente(ambienteCad)
                    navigation.goBack()
                }}>
                <Icon name= "check" size={40} color="black" />
                <Text style={estilo.textoBotao} >CONFIRMAR CADASTRO</Text>
            </TouchableOpacity>
        </View>
    </View>
)


const estilo = StyleSheet.create({
    tela: {
        height: '100%'
    },
    texto: {
        borderWidth: 1,
        borderColor: 'black',
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
        borderColor: 'black',
        marginTop: 10,
        padding: 10,
        margin: 10,
        backgroundColor: '#E5E5E5',
        height: 141,
        marginBottom: 60,
    },
    botao: {
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        borderColor: 'black',
        width: 333,
        height: 60,
        padding: 10,
        marginTop: -15,
        flexDirection: 'row'
    },
    textoBotao: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginLeft: 20
    },
    textoBotaoFoto: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center'
    },
    imagem: {
        width: 170,
        height: 120,
        backgroundColor: '#E5E5E5',
        marginLeft: 120,
        marginTop: 12,
        borderRadius: 30
    },
    botaoFoto: {
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        borderWidth: 0.9,
        borderColor: 'black',
        borderRadius: 5,
        width: 150,
        height: 40,
        padding: 0,
        marginTop: 3,
    }

})

const mapStateToProps = (estado) => {
    return ({
        ambienteCad: estado.ambienteCad
    })

}

const mapDispatchToProps = {
    setarCampoAmbiente,
    salvarAmbiente
}

export default connect(mapStateToProps, mapDispatchToProps)(NovoAmbiente);