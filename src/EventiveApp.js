import React from 'react';
import RoteadorTelas from './RoteadorTelas';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'


const store  = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const EventiveApp = prop =>(
    <Provider store ={store} >
        <RoteadorTelas/>
    </Provider>
)

export default EventiveApp;