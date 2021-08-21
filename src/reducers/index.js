import { combineReducers } from "redux";
import usuarioReducer from './usuarioReducer';
import usuarioCadastroReducer from "./usuarioCadastroReducer";



export default combineReducers({
    usuario: usuarioReducer,
    usuarioCad: usuarioCadastroReducer
});

