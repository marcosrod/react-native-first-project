import {ALTERACAO_SUCESSO_AMBIENTE, SETAR_CAMPO_AMBIENTE_ALT, SETAR_CAMPOS_AMBIENTE} from '../acoes'

const ESTADO_INICIAL = {
    nome: '',
    lotacaoMaxima: '',
    descricao: '',
    foto: ''
}

export default function(estado = ESTADO_INICIAL, acao){
    switch(acao.type) {
        case SETAR_CAMPO_AMBIENTE_ALT:
            const estadoClonado = {...estado};
            estadoClonado[acao.campo] = acao.valor;
            return estadoClonado;
        case SETAR_CAMPOS_AMBIENTE:
            return acao.ambiente;
        default:
            return estado;
    }
}