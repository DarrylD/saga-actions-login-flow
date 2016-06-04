/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants'

import { createAction } from 'redux-actions'


/**
 * Sets the form state
 * @param  {string} username The new text of the username input field of the form
 * @param  {string} password The new text of the password input field of the form
 */
export const changeForm = createAction(CHANGE_FORM)


/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export const setAuthState = createAction(SET_AUTH)


/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export const sendingRequest = createAction(SENDING_REQUEST)


/**
 * Tells the app we want to log in a user
 * @param  {string} username The username of the user to log in
 * @param  {string} password The password of the user to log in
 */
export const loginRequest = createAction(LOGIN_REQUEST)


/**
 * Tells the app we want to log out a user
 */
export const logout = createAction(LOGOUT)


/**
 * Tells the app we want to register a user
 * @param  {string} username The username of the user to register
 * @param  {string} password The password of the user to register
 */

export const registerRequest = createAction(REGISTER_REQUEST)


/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export const requestError = createAction(REQUEST_ERROR)


/**
 * Sets the `error` state as empty
 */
export const clearError = createAction(CLEAR_ERROR)
