import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { setarCampoAmbienteAlt, alterarAmbiente } from '../../acoes/acoesAmbienteAlterar'
import { connect } from 'react-redux';
import Icone from 'react-native-vector-icons/FontAwesome'

Icone.loadFont();


const AlterarAmbiente = ({ ambiente, setarCampoAmbienteAlt, alterarAmbiente, navigation }) => {

    return (
        <View>
            <View style={estilo.imagemContainer} >
                <Image
                    style={estilo.imagem_perfil}
                    source={{
                        uri: ambiente.foto,
                    }}
                />
            </View>
            <TextInput style={estilo.botaoFoto} value={ambiente.foto} onChangeText={valor => setarCampoAmbienteAlt('foto', valor)} ></TextInput>
            <View style={estilo.conteiner}>
                <TextInput style={estilo.texto} placeholder="Nome do Ambiente" value={ambiente.nome} onChangeText={valor => setarCampoAmbienteAlt('nome', valor)} ></TextInput>
                <TextInput style={estilo.texto} placeholder="Lotação Máxima do Ambiente" value={ambiente.lotacaoMaxima} onChangeText={valor => setarCampoAmbienteAlt('lotacaoMaxima', valor)} ></TextInput>
                <TextInput style={estilo.descricao} placeholder="Descrição do Ambiente" value={ambiente.descricao} onChangeText={valor => setarCampoAmbienteAlt('descricao', valor)} ></TextInput>
                <TouchableOpacity
                    style={estilo.botao}
                    onPress={() => {
                        alterarAmbiente(ambiente)
                        navigation.goBack()
                    }}
                >
                    <Icone name="check" size={40} color="black" />
                    <Text style={estilo.textoBotao}>CONFIRMAR ALTERAÇÃO</Text></TouchableOpacity>
            </View>
        </View>
    )


}


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
        height: 60,
        padding: 10,
        marginTop: -30,
        flexDirection: 'row'
    },
    textoBotao: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginLeft: 20
    },
    imagemContainer: {
        width: 180,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
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
        marginLeft: 8,
    },
    imagem_perfil: {
        resizeMode: 'cover',
        height: 120,
        borderRadius: 20,
        width: 170,
      },

})

const mapStateToProps = (estado) => {
    return ({
        ambiente: estado.ambienteAlt
    })

}

const mapDispatchToProps = {
    setarCampoAmbienteAlt,
    alterarAmbiente
}

export default connect(mapStateToProps, mapDispatchToProps)(AlterarAmbiente);