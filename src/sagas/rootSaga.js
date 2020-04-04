import { all, fork } from 'redux-saga/effects';
import * as watchers from './watchers';

const sagas = [
    watchers.watchAgeDown,
    watchers.watchAgeUp,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}