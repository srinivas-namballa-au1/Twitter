import {combineReducers} from 'redux';
import errorReducer from './errorReducer.js';

export default combineReducers({
    errors: errorReducer
})