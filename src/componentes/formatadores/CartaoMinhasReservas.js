import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { excluirReserva, setarAviso } from '../../acoes'
import { connect } from 'react-redux'
import AvisoExcluirReserva from '../formatadores/avisoExcluirReserva'

Icon.loadFont();

const CartaoMinhasReservas = (props) => (

  <View>
    <AvisoExcluirReserva excluirReserva={props.excluirReserva} reserva={props.reserva} navigation={props.navigation} aviso={props.aviso} setarAviso={props.setarAviso} />
    <View style={estilos.cartao}>

      <View style={estilos.topoCartao}>
        <Image
          style={estilos.foto}
          source={{
            uri: props.reserva.ambienteFoto,
          }}
        />
        <Text style={estilos.titulo}>{props.reserva.ambienteNome}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.setarAviso(true)
        }}
        style={estilos.conteiner}
      >
        <Icon style={estilos.icone} name="times-circle" size={35} color="black" />
        <Text style={estilos.cancelar}>CANCELAR RESERVA</Text>
      </TouchableOpacity >

    </View>
  </View>


);

const estilos = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    marginTop: 10,
    height: 60,
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  cartao: {
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',

  },
  foto: {
    resizeMode: 'cover',
    height: 100,
    width: '50%',
    borderRadius: 5,
  },
  titulo: {
    marginLeft: 10,
    fontSize: 20,
    width: '45%'
  },
  cancelar: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40
  },
  topoCartao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderRadius: 5,

  },
  icone: {
    marginLeft: 10,
    marginRight: 15,
  }

});

const mapearEstadosPropriedades = (estado) => {
  return ({
    aviso: estado.avisoExcluir,
  })

}

//export default CartaoMinhasReservas;
export default connect(mapearEstadosPropriedades, { excluirReserva, setarAviso })(CartaoMinhasReservas)

