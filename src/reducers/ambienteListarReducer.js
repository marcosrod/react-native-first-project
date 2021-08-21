import { LISTA_AMBIENTES } from "../acoes";

export default function(estado = {}, acao){
    switch(acao.type) {
        case LISTA_AMBIENTES:
            return acao.ambientes;
        default:
            return estado;
    }
}