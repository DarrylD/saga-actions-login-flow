/*
* The reducer takes care of state changes in our app through actions
*/

import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    REQUEST_ERROR,
    CLEAR_ERROR
} from '../actions'

import auth from '../auth'

import { handleActions } from 'redux-actions'


// The initial application state
let initialState = {
    formState: {
        username: '',
        password: ''
    },
    error: '',
    currentlySending: false,
    loggedIn: auth.loggedIn()
}

export default handleActions({

    CHANGE_FORM (state, action) {
        return {...state, formState: action.payload}
    },

    SET_AUTH (state, action) {
        return {...state, loggedIn: action.payload}
    },

    SENDING_REQUEST (state, action) {
        return {...state, currentlySending: action.payload}
    },

    REQUEST_ERROR (state, action) {
        return {...state, error: action.payload}
    },

    CLEAR_ERROR (state, action) {
        return {...state, error: ''}
    },

}, initialState)
