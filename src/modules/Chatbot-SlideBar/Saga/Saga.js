import { call, select, put } from 'redux-saga/effects';
import { UploadServer } from '../../../common/services/UploadService';
import { fetchDataRequest } from './../../files/State/ActionsFile';

function* sendFilesToServerSaga(action) {
  try {
      const files = yield select(state => state.upload.files);
      const response = yield call(UploadServer, files);
      yield put(fetchDataRequest());

  } catch (error) {
      console.error('Error uploading files:', error.response ? error.response : error);
  }
}

export default sendFilesToServerSaga;
