import {
    call,
    put,
    select,
    takeLatest
} from "redux-saga/effects";
import axios from "axios";

import {
    API_BASE_URL,
    SERVER_ERROR_MESSAGE
} from "../../utils/constants";
import * as constants from "../constants";
import {
    setAuthUser,
    setAuthError,
    logoutSuccess,
    logoutError,
    showLoader,
    hideLoader
} from "../actions";

function signinApi(data) {
    return axios.post(`${API_BASE_URL}login`, data, {
        headers: {
            Accept: "application/json",
        },
    });
}

function* signinActionEffect(action) {
    try {
        yield put(showLoader());
        const response = yield call(signinApi, action.payload);
        const user = response.data.meta.status ? response.data.data : {};
        yield put(setAuthUser(user));
    } catch (e) {
        const error =
            e.response && e.response.data ?
            e.response.data.meta.message :
            SERVER_ERROR_MESSAGE;
        yield put(setAuthError(error));
    } finally {
        yield put(hideLoader());
    }
}

export function* signinWatcher() {
    yield takeLatest(constants.AUTH_WATCHER, signinActionEffect);
}

function signupApi(data) {
    return axios.post(`${API_BASE_URL}register`, data, {
        headers: {
            Accept: "application/json",
        },
    });
}

function* signupActionEffect(action) {
    try {
        yield put(showLoader());
        const response = yield call(signupApi, action.payload);
        const user = response.data.meta.status ? response.data.data : {};
        yield put(setAuthUser(user));
    } catch (e) {
        const error =
            e.response && e.response.data ?
            e.response.data.meta.message :
            SERVER_ERROR_MESSAGE;
        yield put(setAuthError(error));
    } finally {
        yield put(hideLoader());
    }
}

export function* signupWatcher() {
    yield takeLatest(constants.SIGNUP_WATCHER, signupActionEffect);
}

export const getToken = (state) => state.authReducer.token;

function logoutApi(token) {
    return axios.get(`${API_BASE_URL}logout`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    });
}

function* logoutActionEffect(action) {
    try {
        yield put(showLoader());
        const token = yield select(getToken);
        const response = yield call(logoutApi, token);
        const user = response.data.meta.status ? response.data.data : {};
        yield put(logoutSuccess(user));
    } catch (e) {
        const error =
            e.response && e.response.data ?
            e.response.data.meta.message :
            SERVER_ERROR_MESSAGE;
        yield put(logoutError(error));
    } finally {
        yield put(hideLoader());
    }
}

export function* logoutWatcher() {
    yield takeLatest(constants.LOG_OUT_WATCHER, logoutActionEffect);
}