import {combineReducers} from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { groups } from './groups';

console.log("I was called");


const rootReducer = combineReducers({
    router: routerStateReducer,
   groups
});

export default rootReducer;

