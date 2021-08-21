import * as React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert, TextInput, TouchableOpacity } from 'react-native'
import LinhaFormulario from '../../componentes/formatadores/LinhaFormulario'
import firebase from 'firebase'

import { connect } from 'react-redux';
import { validaLogin } from '../../acoes/'

class Login extends React.Component {

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
                // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
                // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
                // projectId: process.env.REACT_APP_PROJECT_ID,
                // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
                // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
                // appId: process.env.REACT_APP_APP_ID
                apiKey: "AIzaSyAz64NlwMqC3xvIT6bg8rt_d4jMmu0s3UM",
                authDomain: "eventive-661ff.firebaseapp.com",
                projectId: "eventive-661ff",
                storageBucket: "eventive-661ff.appspot.com",
                messagingSenderId: "303371356163",
                appId: "1:303371356163:web:0dd9ec6b7f649acfaca636"
            };
            firebase.initializeApp(firebaseConfig);
        }
    }

    setarValor(campo, valor) {
        this.setState({
            [campo]: valor
        })
    }


    validaLogin() {
        
        this.setState({ carregando: true });
        const { email, senha } = this.state;

        this.props.validaLogin({ email, senha })
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
                    mensagem: this.identificadorDeErros(erro.code),
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
                    onPress={() => this.validaLogin()}
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
                        style={estilo.textInput}
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
                        style={estilo.textInput}
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
    textInput: {
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

export default connect(null, { validaLogin })(Login)