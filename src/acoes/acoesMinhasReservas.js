import firebase from 'firebase';

export const LISTA_MINHAS_RESERVAS = 'LISTA_MINHAS_RESERVAS'
const listaMinhasReservas = reservas => ({
    type: LISTA_MINHAS_RESERVAS,
    reservas
})

export const atualizaListaMinhasReservas = () => {

    const { currentUser } = firebase.auth();
    return async dispatch => {

        const usuario = (await firebase.database().ref(`/usuarios/${currentUser.uid}`).get()).val()
        const idUsuario = Object.getOwnPropertyNames(usuario)
        const nomeUsuario = usuario[idUsuario].nome
        var reservasL
        firebase
            .database()
            .ref('/reservas')
            .on('value', instantaneo => {
                reservasL = instantaneo.val()

                if (reservasL) {
                    const idReserva = Object.getOwnPropertyNames(reservasL)
                    const infos = []
                    idReserva.forEach((id, i) => {
                        if (nomeUsuario == reservasL[id].nome) {
                            infos[i] = reservasL[id]
                            infos[i].id = id

                        }
                    })

                    const listaReservas = listaMinhasReservas(infos)
                    dispatch(listaReservas)
                }


            })

    }
}

export const excluirReserva = reserva => {

    return async dispatch => {

        await firebase
            .database()
            .ref(`/reservas/${reserva.id}`)
            .remove();
    }
}