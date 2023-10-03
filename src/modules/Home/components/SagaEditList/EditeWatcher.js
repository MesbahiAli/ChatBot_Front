import { EDIT_CONVERSATION_REQUEST } from "../../../../common/state/StatesConstants";
import handleEdit from "./EditeSaga";
import { takeEvery } from 'redux-saga/effects';

export function* watchEditConversations() {
    yield takeEvery(EDIT_CONVERSATION_REQUEST, handleEdit);
}