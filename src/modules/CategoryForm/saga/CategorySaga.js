import { call, put } from 'redux-saga/effects';
import {
  SEND_FILE_AND_DATA_SUCCESS,
  SEND_FILE_AND_DATA_FAILURE
} from '../../../common/state/StatesConstants';
import { sendFileAndDataApi } from '../../../common/services/CategoryService';
import { getCategoryRequest } from '../StateTable/CategoryAction';

function* sendFileAndDataSaga(action) {
  console.log(action.payload);
  try {
    const formData = new FormData();
    for (const key in action.payload) {
      formData.append(key, action.payload[key]);
    }
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const response = yield call(sendFileAndDataApi, formData);
    yield put({ type: SEND_FILE_AND_DATA_SUCCESS, payload: response.data });
    yield put(getCategoryRequest())
  } catch (error) {
    yield put({ type: SEND_FILE_AND_DATA_FAILURE, payload: error.message });
  }
}

export default sendFileAndDataSaga;
