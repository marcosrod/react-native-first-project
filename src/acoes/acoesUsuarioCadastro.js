import firebase from 'firebase';
import {Alert} from 'react-native';

export const SETAR_CAMPO = 'SETAR_CAMPO';

export const setarCampo = (campo, valor) => {
    return {
        type: SETAR_CAMPO,
        campo,
        valor
    }
}

export const CADASTRO_SUCESSO = 'CADASTRO_SUCESSO';
export const cadastroSucesso = () => {
    return {
        type: CADASTRO_SUCESSO
    }
}

export const salvarUsuario = usuario => {
    const { currentUser } = firebase.auth();

    return async dispatch => {
        await firebase
            .database()
            .ref(`/users/${currentUser.uid}`)
            .push(usuario)

        dispatch(cadastroSucesso());
    }

}

export const validaCadastro = ({ email, senha }) => dispatch => {

    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(usuario => {
            const acao = cadastroSucesso(usuario);
            dispatch(acao)
            return usuario;
        })
        .catch(erro => {
            if (erro) {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        'Não foi possível criar o usuário',
                        'Tente novamente mais tarde!',
                        [{
                            text: 'Tentar Novamente',
                            onPress: () => {
                                resolve()
                            }
                        }, {
                            text: 'OK',
                            onPress: () => {
                                resolve()
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
