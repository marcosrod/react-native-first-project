import firebase from 'firebase';
import {Alert} from 'react-native';

export const USUARIO_ENTRADA_SUCESSO = 'USUARIO_ENTRADA';
const usuarioEntradaSucesso = usuario => ({
    type: USUARIO_ENTRADA_SUCESSO,
    usuario
})

export const USUARIO_SAIDA = 'USUARIO_SAIDA';
const usuarioSaida = () => ({
    type: USUARIO_SAIDA,
})

export const validaLogin = ({ email, senha }) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(usuario => {
            const acao = usuarioEntradaSucesso(usuario);
            dispatch(acao)
            return usuario;
        })
        .catch(erro => {
            if (erro.code == "auth/user-not-found") {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        'O usuário não foi encontrado.',
                        'Deseja criar um novo usuário?',
                        [{
                            text: 'Não',
                            onPress: () => {
                                resolve()
                            }
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, senha)
                                    .then(resolve)
                                    .catch(reject)
                            }
                        }],
                        {
                            cancelable: false
                        }
                    )
                })

            }
            return Promise.reject(erro);
        })
}