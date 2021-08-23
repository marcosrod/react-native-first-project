import firebase from 'firebase';
import { Alert } from 'react-native';

export const SETAR_CAMPO_RESERVA = 'SETAR_CAMPO_RESERVA';

export const setarCampoReserva = (campo, valor) => {
    return {
        type: SETAR_CAMPO_RESERVA,
        campo,
        valor
    }
}

export const CADASTRO_SUCESSO_RESERVA = 'CADASTRO_SUCESSO_RESERVA';
export const cadastroSucessoReserva = () => {
    return {
        type: CADASTRO_SUCESSO_RESERVA
    }
}

export const salvarReserva = reserva => {

    const { currentUser } = firebase.auth()
    return async dispatch => {
        const usuarios = (await firebase.database().ref(`/usuarios`).get()).val()
        const chavesUsuarios = Object.getOwnPropertyNames(usuarios)
        chavesUsuarios.forEach((chaveUsuario) => {
            if (chaveUsuario == currentUser.uid) {
                const recebeUsuario = Object.getOwnPropertyNames(usuarios[chaveUsuario])
                const usuarioReservando = usuarios[chaveUsuario][recebeUsuario]
                reserva.nome = usuarioReservando.nome
                reserva.apartamento = usuarioReservando.apartamento
                reserva.foto = usuarioReservando.foto
            }
        })

        await firebase
            .database()
            .ref(`/reservas`)
            .push(reserva)

        dispatch(cadastroSucessoReserva());
    }

}
