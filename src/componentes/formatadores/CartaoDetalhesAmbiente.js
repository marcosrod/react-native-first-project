import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const CartaoDetalhesAmbiente = ({ ambiente}) => (
  <View 
    style={estilos.conteiner}
  >
    <View style={estilos.cartao}>
    <Image
        style={estilos.imagem_perfil}
        source={{
          uri: ambiente.foto,
        }}
      />
      <Text style={estilos.descricao}>{ambiente.descricao}</Text>
      <Text style={estilos.lotacao}>{ambiente.lotacaoMaxima}</Text>
    </View>
  </View>

);

const estilos = StyleSheet.create({
  conteiner: {

    alignItems: "center",
    width: '100%',
    height: '60%',
  },
  cartao: {
    backgroundColor: "#FFF",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  imagem_perfil: {
    resizeMode: 'cover',
    height: 100,
    borderRadius: 20,
    width: 150,
    marginTop: '5%',
    marginBottom: '5%'
  },
  descricao: {
    fontSize: 20,
    width: '95%',
    height:'38%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    textAlign: "center",

  },
  lotacao: {
    fontSize: 20,
    marginTop: '5%',
    width: '95%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    textAlign: "center",
  }

});

export default CartaoDetalhesAmbiente;

