import { takeEvery, put, call, select, delay, takeLatest } from 'redux-saga/effects';
import actionTypes from "../constants/actionTypes";
import * as helpers from "./helpers";

export function* setAge(payload) {
    yield put({ type: actionTypes.SET_AGE, payload });
}

export function* ageUp(){
    const store = yield select();
    const newAge = helpers.ageUp(store.age.age);
    yield setAge(newAge);
}

export function* ageDown(){
    const store = yield select();
    const newAge = helpers.ageDown(store.age.age);
    yield setAge(newAge);
}