import { FETCH_MESSAGES_REQUEST } from "../../../../common/state/StatesConstants";
import fetchMessages from "./MessageSaga";
import { takeEvery } from 'redux-saga/effects';

export function* messageSaga() {
    yield takeEvery(FETCH_MESSAGES_REQUEST, fetchMessages);
}
