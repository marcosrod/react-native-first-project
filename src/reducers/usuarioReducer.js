import { USUARIO_ENTRADA_SUCESSO, USUARIO_SAIDA } from '../acoes'

export default function usuarioReducers(estado = null, acao){
    switch(acao.type) {
        case USUARIO_ENTRADA_SUCESSO:
            return acao.usuario
        
        case USUARIO_SAIDA:
            return null;

        default:
            return estado;
    }

}