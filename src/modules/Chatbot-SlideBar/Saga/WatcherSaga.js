import { takeEvery, call } from 'redux-saga/effects';
import sendFilesToServerSaga from './Saga';
import { SEND_FILES_TO_SERVER } from '../../../common/state/StatesConstants';

function* watchUploadFiles() {
  yield takeEvery(SEND_FILES_TO_SERVER, sendFilesToServerSaga);
}

export default watchUploadFiles;