import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { UPDATE_CHAT_TITLE } from '../../state/ActionsHome';

function* updateChatTitleSaga(action) {
    try {
        const response = yield call(axios.put, `/update_title/${action.payload.index}`, {
            title: action.payload.newTitle
        });
        
        if (response.status === 200) {
            // Dispatch success action if needed
        } else {
            // Handle errors if needed
        }
    } catch (error) {
        console.error("Error updating chat title:", error);
        // Dispatch error action if needed
    }
}

export function* watchUpdateChatTitle() {
    yield takeEvery(UPDATE_CHAT_TITLE, updateChatTitleSaga);
}