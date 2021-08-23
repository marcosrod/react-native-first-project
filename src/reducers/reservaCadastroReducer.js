import {CADASTRO_SUCESSO_RESERVA, SETAR_CAMPO_RESERVA} from '../acoes'

const ESTADO_INICIAL = {
    ambienteId: '',
    data: '',
    nome: '',
    apartamento: '',
    foto: '',

}

export default function(estado = ESTADO_INICIAL, acao){
    switch(acao.type) {
        case SETAR_CAMPO_RESERVA:
            const estadoClonado = {...estado};
            estadoClonado[acao.campo] = acao.valor;
            return estadoClonado;
        case CADASTRO_SUCESSO_RESERVA:
            return ESTADO_INICIAL;
        default:
            return estado;
    }
}