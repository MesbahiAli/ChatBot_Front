import { takeEvery, call } from 'redux-saga/effects';
import { sendFilesToServer } from './Saga';
import { UPLOAD_FILES } from '../../../../common/state/StatesConstants';

function* watchUploadFiles() {
  yield takeEvery(UPLOAD_FILES, sendFilesToServer);
}

export default watchUploadFiles;
