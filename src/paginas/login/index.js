import * as React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert, TextInput } from 'react-native'
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

        if(!firebase.apps.length) {
            var firebaseConfig = {
                apiKey: "AIzaSyAz64NlwMqC3xvIT6bg8rt_d4jMmu0s3UM",
                //apiKey: process.env.FIREBASE_API_KEY,
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

                if (usuario) {
                    this.setState({carregando: false, mensagem: ""})
                    this.props.navigation.navigate('Menu');
                } else {

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
            <Button
                title="Entrar"
                onPress={() => this.validaLogin()}
            />
        )
    }

    renderizarMensagem() {
        const { mensagem } = this.state;
        if (!mensagem) {
            return null;
        }

        return (
            <View>
                <Text style={style.textoErro}>{mensagem}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={style.estiloTela}>
                <Text style={style.textTitle}>Eventive</Text>
                <LinhaFormulario>
                    <TextInput
                        style={style.textInput}
                        placeholder="E-mail: usuario@provedor.com"
                        placeholderTextColor='white'
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
                        style={style.textInput}
                        placeholder="Insira sua senha aqui"
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        value={this.state.senha}
                        onChangeText={valor => {
                            this.setarValor('senha', valor);
                        }}
                    />
                </LinhaFormulario>
                {this.renderizarBotao()}
                {this.renderizarMensagem()}

                <Button title="Criar Conta" />
            </View>
        )
    }
}

//onPress={() => { props.navigation.navigate('Menu') }}


const style = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        marginTop: 5,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15
    },
    textTitle: {
        fontSize: 40,
        color: '#fff',
        alignSelf: 'center',
        paddingTop: 50,
        paddingBottom: 150,
        backgroundColor: '#212529'
    },
    estiloTela: {
        backgroundColor: '#212529',
        height: 700
    },
    textoErro: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 15,
        marginTop: 5
    }
})

export default connect(null, { validaLogin })(Login)