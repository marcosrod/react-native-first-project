import { combineReducers } from "redux";
import usuarioReducer from './usuarioReducer';
import usuarioCadastroReducer from "./usuarioCadastroReducer";
import ambienteCadastroReducer from './ambienteCadastroReducer'



export default combineReducers({
    usuario: usuarioReducer,
    usuarioCad: usuarioCadastroReducer,
    ambienteCad: ambienteCadastroReducer
});

