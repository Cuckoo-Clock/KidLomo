import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from "redux-persist/es/storage";

import { user } from './user'; //? uncertain about this....
import { gallery } from './gallery';
import { parentalControls } from './parentalControls';
import { creativePrompts } from "./creativeprompts";

const config = {
    key: 'root',
    storage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config,{
            user,
            gallery,
            parentalControls,
            creativePrompts,
        }),
        applyMiddleware(thunk, logger),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const persistor = persistStore(store);  
    return {persistor, store};
}