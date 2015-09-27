import {combineReducers} from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { groups } from './groups';
import counter from './counter';



const rootReducer = combineReducers({
    router: routerStateReducer,
   groups,
   counter
});

export default rootReducer;

