import { call, put } from 'redux-saga/effects';
import { 
  SEND_FILE_AND_DATA_SUCCESS, 
  SEND_FILE_AND_DATA_FAILURE 
} from '../../../common/state/StatesConstants';
import { sendFileAndDataApi } from '../../../common/services/CategoryService';

function* sendFileAndDataSaga(action) {
  try {
    const formData = new FormData();
    for (const key in action.payload.data) {
      formData.append(key, action.payload.data[key]);
    }
    if (action.payload.file) {
      formData.append('file', action.payload.file);
    }

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const response = yield call(sendFileAndDataApi, formData);
    yield put({ type: SEND_FILE_AND_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: SEND_FILE_AND_DATA_FAILURE, payload: error.message });
  }
}



export default sendFileAndDataSaga;