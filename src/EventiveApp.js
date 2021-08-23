import React from 'react';
import RoteadorTelas from './RoteadorTelas';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import raizReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { LogBox } from "react-native";  
LogBox.ignoreAllLogs(true);


const guardar  = createStore(raizReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const EventiveApp = prop =>(
    <Provider store ={guardar} >
        <RoteadorTelas/>
    </Provider>
)

export default EventiveApp;