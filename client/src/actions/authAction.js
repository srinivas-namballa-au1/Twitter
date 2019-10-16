import axios from 'axios';

import {GET_ERRORS} from '../constants';

export const signupUser = (userData, history) => dispatch => {
    axios.post('http://localhost:8080/api/users/signup', userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}