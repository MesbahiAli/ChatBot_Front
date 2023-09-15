import { takeLatest } from 'redux-saga/effects';
import { sendMessageSaga } from './ChatSaga';

export function* watchChat() {
  yield takeLatest('SEND_MESSAGE_REQUEST', sendMessageSaga);
}
