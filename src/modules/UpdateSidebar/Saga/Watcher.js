import { takeEvery } from 'redux-saga/effects';
import { UPDATE_CHAT_TITLE } from '../State/ActionFile';
import { updateChatTitleSaga } from './Saga';

export function* watchUpdateChatTitle() {
    yield takeEvery(UPDATE_CHAT_TITLE, updateChatTitleSaga);
}
