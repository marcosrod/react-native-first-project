import {CADASTRO_SUCESSO_AMBIENTE, SETAR_CAMPO_AMBIENTE} from '../acoes'

const ESTADO_INICIAL = {
    nome: '',
    lotacaoMaxima: '',
    descricao: '',
    foto: ''
}

export default function(estado = ESTADO_INICIAL, acao){
    switch(acao.type) {
        case SETAR_CAMPO_AMBIENTE:
            const estadoClonado = {...estado};
            estadoClonado[acao.campo] = acao.valor;
            return estadoClonado;
        case CADASTRO_SUCESSO_AMBIENTE:
            return ESTADO_INICIAL;
        default:
            return estado;
    }
}