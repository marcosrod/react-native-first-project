import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CartaoReservarAmbiente = ({ ambiente, navegando }) => (
  <TouchableOpacity 
    onPress={navegando} 
    style={estilos.conteiner}
  >
    <View style={estilos.cartao}>
    <Image
        style={estilos.imagem_perfil}
        source={{
          uri: ambiente.foto,
        }}
      />
      <Text style={estilos.titulo}>{ `${ambiente.nome}`  }</Text>
    </View>
  </TouchableOpacity>

);

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    
  },
  cartao: {
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
    borderRadius: 5,
  },
  titulo: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default CartaoReservarAmbiente;

