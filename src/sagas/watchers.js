import { takeEvery, put, call, select, delay, takeLatest } from 'redux-saga/effects';
import actionTypes from "../constants/actionTypes";
import * as workers from "./workers";

export function* watchAgeUp() {
    yield takeEvery(actionTypes.AGE_UP, workers.ageUp);
}

export function* watchAgeDown() {
    yield takeEvery(actionTypes.AGE_DOWN, workers.ageDown);
}