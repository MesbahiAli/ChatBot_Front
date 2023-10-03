import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from '../State/ActionsFile';
import { FileApi } from '../../../common/services/FileService';

function* fetchData() {
  try {
    const response = yield call(FileApi);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default fetchData;