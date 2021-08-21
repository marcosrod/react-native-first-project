import firebase from 'firebase';
import {Alert} from 'react-native';

export const SETAR_CAMPO_AMBIENTE = 'SETAR_CAMPO_AMBIENTE';

export const setarCampoAmbiente = (campo, valor) => {
    return {
        type: SETAR_CAMPO_AMBIENTE,
        campo,
        valor
    }
}

export const CADASTRO_SUCESSO_AMBIENTE = 'CADASTRO_SUCESSO_AMBIENTE';
export const cadastroSucessoAmbiente = () => {
    return {
        type: CADASTRO_SUCESSO_AMBIENTE
    }
}

export const salvarAmbiente = ambiente => {

    return async dispatch => {
        await firebase
            .database()
            .ref(`/ambientes/`)
            .push(ambiente)

        dispatch(cadastroSucesso());
    }

}
