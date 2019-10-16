import {combineReducers} from 'redux';
import errorReducer from './errorReducer.js';
import authReducer from './authReducer.js';
export default combineReducers({
    errors: errorReducer,
    aith: authReducer
})