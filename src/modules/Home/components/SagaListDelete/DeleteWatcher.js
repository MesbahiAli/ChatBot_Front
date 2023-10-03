import { DELETE_CONVERSATION_REQUEST } from "../../../../common/state/StatesConstants";
import handleDelete from "./DeleteSaga";

import { takeEvery } from 'redux-saga/effects';

export function* watchDeleteConversations() {
    yield takeEvery(DELETE_CONVERSATION_REQUEST, handleDelete);
}