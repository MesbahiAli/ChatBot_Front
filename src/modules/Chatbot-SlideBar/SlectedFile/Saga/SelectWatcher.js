import { SEND_FILE_NAMES_REQUEST } from "../../../../common/state/StatesConstants";
import sendFileNamesSaga from "./SelectSaga";
import { takeLatest } from 'redux-saga/effects';

export function* watchSendFileNamesSaga() {
    yield takeLatest(SEND_FILE_NAMES_REQUEST, sendFileNamesSaga);
  }
  