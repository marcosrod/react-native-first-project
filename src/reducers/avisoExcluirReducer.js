import {SETAR_AVISO} from '../acoes'

const ESTADO_INICIAL = {
    valor: false
}

export default function(estado = ESTADO_INICIAL, acao){
    switch(acao.type) {
        case SETAR_AVISO:
            return acao.valor
        default:
            return estado;
    }
}