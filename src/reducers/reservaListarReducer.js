import { LISTA_RESERVAS } from "../acoes";

export default function(estado = {}, acao){
    switch(acao.type) {
        case LISTA_RESERVAS:
            return acao.reservas;
        default:
            return estado;
    }
}