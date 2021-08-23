import { combineReducers } from "redux";
import usuarioReducer from './usuarioReducer';
import usuarioCadastroReducer from "./usuarioCadastroReducer";
import ambienteCadastroReducer from './ambienteCadastroReducer'
import ambienteListarReducer from "./ambienteListarReducer";
import ambienteAlteracaoReducer from './ambienteAlteracaoReducer'
import avisoExcluirReducer from "./avisoExcluirReducer";
import reservaCadastroReducer from "./reservaCadastroReducer";
import reservaListarReducer from "./reservaListarReducer";
import minhasReservasReducer from "./minhasReservasReducer";



export default combineReducers({
    usuario: usuarioReducer,
    usuarioCad: usuarioCadastroReducer,
    ambienteCad: ambienteCadastroReducer,
    ambientesLista: ambienteListarReducer,
    ambienteAlt: ambienteAlteracaoReducer,
    avisoExcluir: avisoExcluirReducer,
    reservaCad: reservaCadastroReducer,
    reservasLista: reservaListarReducer,
    minhasReservasLista: minhasReservasReducer,

});

