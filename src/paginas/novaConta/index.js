import * as React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert, TextInput, TouchableOpacity, Image } from 'react-native'
import firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { setarCampo, salvarUsuario, validaCadastro } from '../../acoes/acoesUsuarioCadastro';


const CriarConta = ({ usuarioCad, setarCampo, salvarUsuario, navigation, validaCadastro }) => {

    async function validaCad({ email, senha }) {

        validaCadastro({ email, senha })
            .then(usuario => {
                const { currentUser } = firebase.auth();
                if (currentUser.uid === "Usn4PdszpTb98HMKX36VZmYAWVb2") {
                    salvarUsuario(usuarioCad)
                    navigation.navigate('Menu');
                } else {
                    salvarUsuario(usuarioCad)
                    navigation.navigate('MenuMorador');
                }
            })

            .catch(erro => {
                console.log(erro)
            })
    }


    return (
        <ScrollView>
            <View style={estilo.tela}>
                <Text style={estilo.textoTitulo}>Nova Conta</Text>
                <View style={estilo.imagemContainer}>
                    <Image
                        style={estilo.imagem_perfil}
                        source={{
                            uri: usuarioCad.foto,
                        }}
                    />
                </View>
                <TouchableOpacity style={estilo.botaoFoto}><TextInput style={estilo.textoBotaoFoto} placeholder={"Carregar Foto"} value={usuarioCad.foto} onChangeText={valor => setarCampo('foto', valor)} ></TextInput></TouchableOpacity>
                <View style={estilo.conteiner}>
                    <TextInput style={estilo.texto} placeholder="Nome Completo" value={usuarioCad.nome} onChangeText={valor => setarCampo('nome', valor)} ></TextInput>
                    <TextInput style={estilo.texto} placeholder="Apartamento" value={usuarioCad.apartamento} onChangeText={valor => setarCampo('apartamento', valor)} ></TextInput>
                    <TextInput style={estilo.texto} placeholder="E-mail" value={usuarioCad.email} onChangeText={valor => setarCampo('email', valor)} keyboardType="email-address" autoCaptalize="none" ></TextInput>
                    <TextInput style={estilo.texto} placeholder="Senha" value={usuarioCad.senha} onChangeText={valor => setarCampo('senha', valor)} secureTextEntry={true} ></TextInput>
                    <TextInput style={estilo.texto} placeholder="Confirmar Senha" value={usuarioCad.confirmarSenha} onChangeText={valor => setarCampo('confirmarSenha', valor)} secureTextEntry={true} ></TextInput>
                    <TouchableOpacity
                        style={estilo.botao}
                        onPress={() => {
                            validaCad(usuarioCad)
                        }}>
                        <Text style={estilo.textoBotao} >Confirmar Cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.botao} onPress={() => { navigation.goBack() }}><Text style={estilo.textoBotao}>Voltar</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )



}






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
        marginTop: 15,
        marginBottom: 15,
    },
    textoBotao: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    textoBotaoFoto: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center'
    },
    imagemContainer: {
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
        usuarioCad: estado.usuarioCad
    })

}

const mapDispatchToProps = {
    setarCampo,
    salvarUsuario,
    validaCadastro
}

export default connect(mapStateToProps, mapDispatchToProps)(CriarConta);