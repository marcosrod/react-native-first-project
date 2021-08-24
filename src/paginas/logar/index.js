import * as React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert, TextInput, TouchableOpacity } from 'react-native'
import LinhaFormulario from '../../componentes/formatadores/LinhaFormulario'
import firebase from 'firebase'

import { connect } from 'react-redux';
import { validaEntrada } from '../../acoes'

class Logar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
            carregando: false,
            mensagem: "",
        }
    }

    componentDidMount() {
        
        if (!firebase.apps.length) {
            var firebaseConfig = {
                apiKey: "",
                authDomain: "",
                projectId: "",
                storageBucket: "",
                messagingSenderId: "",
                appId: ""
            };
            firebase.initializeApp(firebaseConfig);
        }
    }

    setarValor(campo, valor) {
        this.setState({
            [campo]: valor
        })
    }


    validaEntrada() {
        
        this.setState({ carregando: true });
        const { email, senha } = this.state;

        this.props.validaEntrada({ email, senha })
            .then(usuario => {
                const { currentUser } = firebase.auth();
                if (currentUser.uid === "Usn4PdszpTb98HMKX36VZmYAWVb2") {
                    this.setState({ carregando: false, mensagem: "" })
                    this.props.navigation.navigate('Menu');
                } else if(usuario){
                    this.setState({ carregando: false, mensagem: "" })
                    this.props.navigation.navigate('MenuMorador');
                }else {
                    this.setState({
                        carregando: false,
                        mensagem: '',
                    })
                }
            })

            .catch(erro => {
                this.setState({
                    carregando: false,
                    mensagem: this.identificadorDeErros(erro),
                })


            })
    }

    identificadorDeErros(codigo) {
        switch (codigo) {
            case "auth/user-not-found":
                return "O Email inserido não existe!";
            case "auth/wrong-password":
                return "A senha inserida está incorreta!";
            case "auth/user-not-found":
                return "O Usuário não foi encontrado!";
            default:
                return "Erro ao fazer login!"
        }
    }
    renderizarBotao() {
        if (this.state.carregando) {
            return <ActivityIndicator size="large" color="#fff" />
        }
        return (
            <View>
                <TouchableOpacity
                    style={estilo.botaoEntrar}
                    onPress={() => this.validaEntrada()}
                >
                    <Text style={estilo.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderizarMensagem() {
        const { mensagem } = this.state;
        if (!mensagem) {
            return null;
        }

        return (
            <View>
                <Text style={estilo.textoErro}>{mensagem}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={estilo.estiloTela}>
                <Text style={estilo.textoTitulo}>Eventive</Text>
                <LinhaFormulario>
                    <TextInput
                        style={estilo.textoEntrada}
                        placeholder="E-mail"
                        placeholderTextColor='grey'
                        value={this.state.email}
                        onChangeText={valor => {
                            this.setarValor('email', valor);
                        }}
                        keyboardType="email-address"
                        autoCaptalize="none"

                    />
                </LinhaFormulario>
                <LinhaFormulario>
                    <TextInput
                        style={estilo.textoEntrada
                        }
                        placeholder="Senha"
                        placeholderTextColor='grey'
                        secureTextEntry={true}
                        value={this.state.senha}
                        onChangeText={valor => {
                            this.setarValor('senha', valor);
                        }}
                    />
                </LinhaFormulario>
                {this.renderizarBotao()}
                {this.renderizarMensagem()}
                <View>
                    <Text style={estilo.textoCriar}>------------------------Ainda não possui conta?------------------------</Text>
                    <TouchableOpacity
                        style={estilo.botaoCadastro}
                        onPress={() => this.props.navigation.navigate('Nova Conta')}
                    >
                        <Text style={estilo.textoBotao}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



const estilo = StyleSheet.create({
    textoEntrada: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        width: 320,
        marginTop: 5,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    textoTitulo: {
        fontSize: 40,
        color: '#fff',
        alignSelf: 'center',
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: '#212529',
        fontWeight: 'bold',
    },
    estiloTela: {
        backgroundColor: '#212529',
        height: 700
    },
    textoErro: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 15,
    },
    botaoEntrar: {
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        width: 320,
        height: 50,
        padding: 10,
        marginTop: 30,
        marginBottom: 65,
    },
    botaoCadastro: {
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        width: 320,
        height: 50,
        padding: 10,
        marginTop: 20
    },
    textoCriar: {
        fontSize: 17,
        color: 'white',
        alignSelf: 'center',
        marginTop: 90,
    },
    textoBotao: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    },
})

export default connect(null, { validaEntrada })(Logar)