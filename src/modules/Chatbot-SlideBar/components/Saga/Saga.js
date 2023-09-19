import { put, call, select } from 'redux-saga/effects';
import { UploadServer } from '../../../../common/services/UploadService';

function* sendFilesToServerSaga(action) {
  try {
      const files = yield select(state => state.upload.files);
      const response = yield call(UploadServer, files);
      console.log('Response:', response);
  } catch (error) {
      console.error('Error uploading files:', error.response ? error.response : error);
  }
}

export default sendFilesToServerSaga;
