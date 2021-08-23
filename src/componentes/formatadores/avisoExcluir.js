import React from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { excluirAmbiente, setarAviso } from '../../acoes';
import { connect } from 'react-redux';


import Icone from 'react-native-vector-icons/FontAwesome';


Icone.loadFont();

const AvisoExcluir = (props) => {
    return (
        <Modal
            visible={props.aviso}
            
            transparent
        >
            <View style={estilos.conteiner}>
                <View style={estilos.cartao}>
                    <Text style={estilos.texto1}> Confirmar Exclusão de Ambiente?</Text>
                    <Text style={estilos.texto2}> Esta ação não pode ser desfeita!</Text>
                    <View style={estilos.icones}>
                        <TouchableOpacity style={estilos.sim} onPress={() => {
                                props.setarAviso(false)
                                props.excluirAmbiente(props.ambiente)
                                props.navigation.goBack()
                        }}>
                            <Text style={estilos.simT}>SIM</Text>
                            <Icone name="check-circle" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.nao} onPress={() => props.setarAviso(false)}>
                            <Text style={estilos.naoT}>NÃO</Text>
                            <Icone name= "times-circle" size={30} color="black" />
                            
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Modal>

    )




}

const estilos = StyleSheet.create({
    conteiner: {
        height: '100%',
        backgroundColor: '#00000099',
    },
    texto1: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    texto2: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    icones: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    cartao: {
        height: '25%',
        width: '100%',
        backgroundColor: '#F8F9FA',
        justifyContent: 'space-around',

    },
    sim: {
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00FF4C90',
        justifyContent: 'space-around',
        padding: '2%',
        borderRadius: 3,
    },
    nao: {
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF000090',
        justifyContent: 'space-around',
        borderRadius: 3,
        padding: '2%',
    },
    simT: {
        fontSize: 20,
    },
    naoT: {
        fontSize: 20,
    }

})


export default connect(null, {excluirAmbiente})(AvisoExcluir);
