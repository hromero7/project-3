import axios from 'axios';
import { returnErrors } from './errorActions';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

//check token & load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: USER_LOADING });

    

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

//register user
export const register = ({ first, last, username, email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body
    const body = JSON.stringify({ first, last, username, email, password });

    fetch('http://localhost:3003/api/users', {
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body : body

    }).then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.error){
            dispatch({
                type: REGISTER_FAIL,
                payload: data.error_msg
            })
        } else {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: data
            })
        }
       
     
        
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        });
    });
};

//LOGOUT USER
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

//LOGIN USER
export const login = ({ username, password }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body
    const body = JSON.stringify({ username : username, password : password });

    console.log("THE USERNAME AND PASSWORD ARE", body)

    fetch('http://localhost:3003/api/auth', {
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body : body

    }).then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.error){
            dispatch({
                type: LOGIN_FAIL,
                payload: data.error_msg
            })
        } else {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data
            })
        }
       
     
        
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        });
    });
};

//set up config/ headers in token 
export const tokenConfig = getState => {
    //get token from local storeage
    const token = getState().auth.token;

    //headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //if token then add to headers
    if(token) {
        config.headers['x-auth-token'] = token
    }

    return config;
}
