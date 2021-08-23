import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { setarCampoReserva, salvarReserva } from '../../../acoes';
import { connect } from 'react-redux';


const ReservarAmbiente = (props) => {

    return (
        <View>
            <Image
                style={estilo.imagem_perfil}
                source={{
                    uri: props.route.params.ambiente.foto,
                }}
            />
            <View style={estilo.conteiner}>
                <Text style={estilo.descricao}> {props.route.params.ambiente.descricao} </Text>
                <Text style={estilo.texto}> {props.route.params.ambiente.lotacaoMaxima} </Text>
                <TextInput style={estilo.texto} placeholder="Data da Reserva" value={props.reserva.data} onChangeText={valor => {
                        props.setarCampoReserva('data', valor)
                        props.setarCampoReserva('ambienteId', props.route.params.ambiente.id)
                        props.setarCampoReserva('ambienteFoto', props.route.params.ambiente.foto)
                        props.setarCampoReserva('ambienteNome', props.route.params.ambiente.nome)
                    }} ></TextInput>

                <TouchableOpacity
                    style={estilo.botao}
                    onPress={() => {
                        props.salvarReserva(props.reserva)
                        props.navigation.goBack()
                    }}
                >
                    <Text style={estilo.textoBotao}>Confirmar Reserva</Text></TouchableOpacity>
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
        backgroundColor: '#E5E5E5',
        textAlign: 'center',
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
        marginBottom: 20,
    },
    botao: {
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        borderColor: '#707070',
        borderWidth: 1,
        width: 333,
        height: 50,
        padding: 10,
        marginTop: 70,
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
    },
    imagem_perfil: {
        resizeMode: 'cover',
        height: '35%',
        width: '40%',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 7,
    },

})

const mapStateToProps = (estado) => {
    return ({
        reserva: estado.reservaCad
    })

}

const mapDispatchToProps = {
    setarCampoReserva,
    salvarReserva
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservarAmbiente);