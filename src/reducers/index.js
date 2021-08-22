import { combineReducers } from "redux";
import usuarioReducer from './usuarioReducer';
import usuarioCadastroReducer from "./usuarioCadastroReducer";
import ambienteCadastroReducer from './ambienteCadastroReducer'
import ambienteListarReducer from "./ambienteListarReducer";
import ambienteAlteracaoReducer from './ambienteAlteracaoReducer'



export default combineReducers({
    usuario: usuarioReducer,
    usuarioCad: usuarioCadastroReducer,
    ambienteCad: ambienteCadastroReducer,
    ambientesLista: ambienteListarReducer,
    ambienteAlt: ambienteAlteracaoReducer,
});

