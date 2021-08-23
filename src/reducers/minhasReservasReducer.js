import { LISTA_MINHAS_RESERVAS } from "../acoes";

export default function(estado = [], acao){
    switch(acao.type) {
        case LISTA_MINHAS_RESERVAS:
            return acao.reservas;
        default:
            return estado;
    }
}