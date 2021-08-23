import firebase from 'firebase';

export const LISTA_RESERVAS = 'LISTA_RESERVAS'
const listaReservas = reservas => ({
    type: LISTA_RESERVAS,
    reservas
})

export const atualizaListaReservas = (ambienteId) => {
    const reservasVetor = []

    return async dispatch => {

        const reservas = (await firebase.database().ref(`/reservas`).get()).val()
        const chavesReservas = Object.getOwnPropertyNames(reservas)
        chavesReservas.forEach((chaveReserva) => {
            if (reservas[chaveReserva].ambienteId == ambienteId) {
                reservasVetor.push(reservas[chaveReserva])

            }
        })
        const sequencia = listaReservas(reservasVetor)
        dispatch(sequencia)

    }
}