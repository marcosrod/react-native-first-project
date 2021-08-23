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

export const validaLogin = ({ email, senha }) => async dispatch => {
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
                        'Tente novamente ou crie um novo usuário!',
                        [{
                            text: 'Tentar Novamente',
                            onPress: () => {
                                reject()
                            }
                        }, {
                            text: 'OK',
                            onPress: () => {
                                reject()
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
