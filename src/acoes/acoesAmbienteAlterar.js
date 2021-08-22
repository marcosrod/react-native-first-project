import firebase from 'firebase';
import {Alert} from 'react-native';

export const SETAR_CAMPO_AMBIENTE_ALT = 'SETAR_CAMPO_AMBIENTE_ALT';
export const SETAR_CAMPOS_AMBIENTE = 'SETAR_CAMPOS_AMBIENTE';

export const setarCampoAmbienteAlt = (campo, valor) => {
    return {
        type: SETAR_CAMPO_AMBIENTE_ALT,
        campo,
        valor
    }
}

export const setarCamposAmbiente = ambiente => {
    return {
        type: SETAR_CAMPOS_AMBIENTE,
        ambiente
    }
}

export const ALTERACAO_SUCESSO_AMBIENTE = 'ALTERACAO_SUCESSO_AMBIENTE';
export const alteracaoSucessoAmbiente = () => {
    return {
        type: ALTERACAO_SUCESSO_AMBIENTE
    }
}

export const alterarAmbiente = ambiente => {

    return async dispatch => {
        await firebase
            .database()
            .ref(`/ambientes/${ambiente.id}`)
            .set(ambiente)

        dispatch(alteracaoSucessoAmbiente());
    }

}
