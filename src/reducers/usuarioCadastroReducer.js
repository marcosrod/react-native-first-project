import {SETAR_CAMPO, CADASTRO_SUCESSO} from '../acoes'

const ESTADO_INICIAL = {
    nome: '',
    apartamento: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    foto: ''
}

export default function(estado = ESTADO_INICIAL, acao){
    switch(acao.type) {
        case SETAR_CAMPO:
            const estadoClonado = {...estado};
            estadoClonado[acao.campo] = acao.valor;
            return estadoClonado;
        case CADASTRO_SUCESSO:
            return ESTADO_INICIAL;
        default:
            return estado;
    }
}