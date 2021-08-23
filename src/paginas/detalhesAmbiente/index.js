import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable, Alert } from 'react-native';
import CartaoDetalhesAmbiente from '../../componentes/formatadores/CartaoDetalhesAmbiente';
import { setarCamposAmbiente, setarAviso } from '../../acoes';
import { connect } from 'react-redux';
import AvisoExcluir from '../../componentes/formatadores/avisoExcluir';
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();

function DetalhesAmbiente(props) {
    
    const { ambiente } = props.route.params;

    useEffect(() => {
        props.setarCamposAmbiente(ambiente)
    },[])
    
    return (
        <View style={estilos.conteiner}>
            <AvisoExcluir aviso={props.aviso} setarAviso={props.setarAviso} ambiente={ambiente} navigation={props.navigation}/>
            <CartaoDetalhesAmbiente ambiente={props.ambienteDetalhes} />
            <View style={estilos.conteinerBotao}>
                <Pressable style={estilos.botao} onPress={() => props.navigation.navigate('Reservas Ativas', ambiente.id)}>
                    <Icon name= "eye" size={40} color="black" />
                    <Text style={estilos.texto} >VISUALIZAR RESERVAS</Text>
                </Pressable>
                <Pressable style={estilos.botao} onPress={() => {
                    props.navigation.navigate('Alterar Ambiente')
                    }}>
                    <Icon name= "pencil-square-o" size={40} color="black" />
                    <Text style={estilos.texto}>ALTERAR AMBIENTE</Text>
                </Pressable>
                <Pressable 
                    style={estilos.botao}
                    onPress={() => props.setarAviso(true)}
                >
                <Icon name= "minus-circle" size={40} color="black" />
                <Text style={estilos.texto}>DELETAR AMBIENTE</Text>
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
        borderRadius: 5,
        backgroundColor: '#E5E5E5',
        height: 60,
        width: '75%',
        flexDirection: 'row',
    },
    texto: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
        
        
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
        ambienteDetalhes: estado.ambienteAlt,
        aviso: estado.avisoExcluir,
    })

}

const mapDispatchToProps = {
    setarCamposAmbiente,
    setarAviso,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesAmbiente);