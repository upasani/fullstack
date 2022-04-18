import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { Loginreducer } from "./Login/reducer";
import { Teachreducer } from "./teacher/reducer";

import thunk from 'redux-thunk'
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
const rootReducer = combineReducers(
    {
        login:Loginreducer,
        teacher:Teachreducer
    }

)
export const store = createStore(rootReducer, enhancer);

