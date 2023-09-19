import { put, call, select } from 'redux-saga/effects';
import { instance } from "../../../../common/Axios"; // Assuming you have this axios instance

function* sendFilesToServerSaga(action) {
  try {
      const files = yield select(state => state.upload.files);
      const formData = new FormData();
      files.forEach(file => {
          formData.append('file', file);
      });
      const response = yield call([instance, instance.post], '/upload', formData);
      console.log('Response:', response);
  } catch (error) {
      console.error('Error uploading files:', error.response ? error.response : error);
  }
}
export default sendFilesToServerSaga;