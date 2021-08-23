import firebase from 'firebase';

export const LISTA_AMBIENTES = 'LISTA_AMBIENTES'
const listaAmbientes = ambientes => ({
    type: LISTA_AMBIENTES,
    ambientes
})

export const atualizaLista = () => {

    return dispatch => {
        firebase
            .database()
            .ref('/ambientes')
            .on('value', instantaneo => {
                const ambientes = instantaneo.val()
                const sequencia = listaAmbientes(ambientes)
                dispatch(sequencia)
            })
    }
}

export const excluirAmbiente = ambiente => {
  
    return async dispatch => {
        await firebase
        .database()
          .ref(`/ambientes/${ambiente.id}`)
          .remove();
    }
}