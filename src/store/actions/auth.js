import {
    AUTH_WATCHER,
    AUTH_SUCCESS,
    AUTH_FAILURE,

    SIGNUP_WATCHER,

    LOG_OUT_WATCHER,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE
} from '../constants';

export const authWatcher = (payload,resolve,reject) => ({
    type: AUTH_WATCHER,
    payload,
    resolve,
    reject
});

export const signUpWatcher = (payload,resolve,reject) => ({
    type: SIGNUP_WATCHER,
    payload,
    resolve,
    reject
});

export const setAuthUser = (payload) => ({
    type: AUTH_SUCCESS, 
    payload
});

export const setAuthError = (payload) => ({
    type: AUTH_FAILURE, 
    payload
});

export const logout = (payload, resolve, reject) => ({
    type: LOG_OUT_WATCHER,
    payload,
    resolve,
    reject
});

export const logoutSuccess = (payload) => ({
    type: LOG_OUT_SUCCESS,
    payload
});

export const logoutError = (payload) => ({
    type: LOG_OUT_FAILURE,
    payload
});