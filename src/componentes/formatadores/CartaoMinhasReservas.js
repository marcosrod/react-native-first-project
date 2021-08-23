import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CartaoMinhasReservas = ({ ambiente, navegando }) => (
  <TouchableOpacity 
    onPress={navegando} 
    style={estilos.conteiner}
  >
    <View style={estilos.cartao}>
    <Image
        style={estilos.foto}
        source={{
          uri: ambiente.foto,
        }}
      />
      <Text style={estilos.titulo}>{ `${ambiente.nome}`  }</Text>
      <Text style={estilos.cancelar}>CANCELAR RESERVA</Text>
    </View>
  </TouchableOpacity>

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
  foto: {
    resizeMode: 'cover',
    height: 80,
    borderRadius: 5,
    flex: 1,
  },
  titulo: {
    flex: 2,
    marginLeft: 10,
    fontSize: 20
  },
  cancelar: {

  }

});

export default CartaoMinhasReservas;

