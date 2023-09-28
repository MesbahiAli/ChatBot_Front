import { FETCH_CONVERSATIONS_REQUEST } from "../../../../common/state/StatesConstants";
import fetchConversations from "./ListSaga";

import { takeEvery, call } from 'redux-saga/effects';

export function* conversationSaga() {
    yield takeEvery(FETCH_CONVERSATIONS_REQUEST, fetchConversations);
}
